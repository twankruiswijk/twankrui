import { useEffect, useState } from 'react';
import { useLoaderData, useFetcher, MetaFunction } from 'remix';
import type { LoaderFunction } from 'remix';

import Card from '~/components/Card';
import Newsletter from '~/components/Newsletter';
import { getPosts } from '~/lib/notion';
import type { Post } from '~/lib/notion';
import { heading, paragraph } from '~/styles/typography';
import Button from '~/components/Button';

export const meta: MetaFunction = () => {
  return {
    title: 'twankrui.com blog',
    description:
      'This blog page contains all my articles, tutorials, tweets, and other goodies that I’ve shared on the internet over the years.',
    'og:title': 'Contact Twan',
    'og:description':
      'This blog page contains all my articles, tutorials, tweets, and other goodies that I’ve shared on the internet over the years.',
  };
};

type Posts = {
  data: Post[];
  nextCursor: string | undefined;
  hasMore: boolean;
};

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);

  let cursor: string[] | undefined = url.searchParams.getAll('cursor');

  const posts = await getPosts(cursor.length ? cursor[0] : undefined);

  return {
    data: posts.data,
    nextCursor: posts.next_cursor,
    hasMore: posts.has_more,
  };
};

export default function BlogIndex() {
  const fetcher = useFetcher();
  const initialPosts = useLoaderData<Posts>();
  const [posts, setPosts] = useState<Posts>(initialPosts);

  const fetchMorePosts = (link: string) => {
    fetcher.load(link);
  };

  useEffect(() => {
    if (fetcher.data) {
      setPosts((prevPosts: Posts) => ({
        data: [...prevPosts.data, ...fetcher.data.data],
        nextCursor: fetcher.data.nextCursor,
        hasMore: fetcher.data.hasMore,
      }));
    }
  }, [fetcher.data]);

  const renderPosts = posts.data.map((p: Post) => (
    <div
      key={p.title}
      className="mb-2 md:mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4"
    >
      <Card
        title={p.title}
        description={p.summary}
        linkUrl={`/blog/${p.slug}`}
        imageUrl={p.cover_image}
        variant="blog"
      />
    </div>
  ));

  return (
    <main>
      <section className="pt-20 md:pt-32 mb-8">
        <div className="container">
          <div className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
            <h1 className={`${heading} inset-1 col-span-full`}>
              &gt; Here is everything I published.
            </h1>

            <p className={`${paragraph} mb-8 col-span-full lg:col-span-8`}>
              This blog page contains all my articles, tutorials, tweets, and
              other goodies that I’ve shared on the internet over the years.
            </p>

            <p className={`${paragraph} mb-4 col-span-full lg:col-span-8`}>
              Want to stay up to date with what I publish?
            </p>

            <div className="col-span-full">
              <div className="mt-4 md:mt-0">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-32">
        <div className="container">
          <div className="grid gap-x-4 gap-y-4 grid-cols-12 lg:gap-y-8">
            {renderPosts}

            <div className="col-span-full">
              {posts.hasMore && (
                <Button
                  title={
                    fetcher.type === 'normalLoad'
                      ? 'Loading...'
                      : 'Load more blogs'
                  }
                  fixedWidth="md:w-60"
                  handleClick={() =>
                    fetchMorePosts(`/blog?cursor=${posts.nextCursor}`)
                  }
                  disabled={fetcher.type === 'normalLoad'}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
