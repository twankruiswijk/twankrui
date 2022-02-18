import { useEffect, useState } from 'react';
import { useLoaderData, useFetcher } from 'remix';
import type { LoaderFunction } from 'remix';

import Card from '~/components/Card';
import Newsletter from '~/components/Newsletter';
import { getPosts } from '~/lib/notion';
import type { Post } from '~/lib/notion';
import { heading, paragraph } from '~/styles/typography';

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
      className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4"
    >
      <Card
        title={p.title}
        description={p.summary}
        linkUrl={`/blog/${p.slug}`}
        imageUrl={p.cover_image}
      />
    </div>
  ));

  return (
    <main>
      <section className="pt-20 md:pt-32 mb-8">
        <div className="container">
          <div className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
            <h1 className={`${heading} inset-1 col-span-full`}>
              &gt; I build things for the web
            </h1>

            <p className={`${paragraph} mb-8 col-span-full lg:col-span-8`}>
              I am an independent creator who loves to help you build your next
              front-end. Besides writing code, I write about code, productivity,
              and remote work.
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
              {fetcher.type === 'normalLoad' && <p>loading</p>}

              {posts.hasMore && (
                <button
                  onClick={() =>
                    fetchMorePosts(`/blog?cursor=${posts.nextCursor}`)
                  }
                >
                  Fetch more
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
