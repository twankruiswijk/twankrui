import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DB_ID || '';

export type Post = {
  title: string;
  slug: string;
  cover_image: string;
  summary: string;
};

function normalizePosts(data: any) {
  return data.map((d: any) => ({
    title: d.properties.Title?.title[0].plain_text,
    slug: d.properties.Slug?.rich_text[0].plain_text,
    cover_image: d.properties.Image?.files[0].file.url,
    summary: d.properties.Summary?.rich_text[0].plain_text,
  }));
}

export const getPosts = async (cursor?: string | undefined) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 3,
    start_cursor: cursor,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'published',
          },
        },
      ],
    },
  });

  return {
    data: await normalizePosts(response.results),
    next_cursor: response.next_cursor,
    has_more: response.has_more,
  };
};

function normalizePostInfo(d: any) {
  return {
    title: d.properties.Title?.title[0].plain_text,
    cover_image: d.properties.Image?.files[0].file.url,
    summary: d.properties.Summary?.rich_text[0].plain_text,
    canonical: d.properties.Canonical?.url,
    date: d.properties.Published_date?.date.start,
    source: d.properties.Source?.select?.name,
    words: d.properties.Words?.number,
  };
}

export const getPost = async (slug: string) => {
  const post = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Slug',
          text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = post.results[0].id;

  const page = await notion.pages.retrieve({ page_id: pageId });
  const blocks = await notion.blocks.children.list({ block_id: pageId });

  return { pageInfo: await normalizePostInfo(page), blocks: blocks.results };
};
