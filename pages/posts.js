import Post from "components/Post";
import { Flex, Box } from "reflexbox";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const Posts = ({ data, numberOfPosts }) => {
  const { API_URL } = process.env;
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const res = await fetch(
      `${API_URL}/posts?_start=${posts.length}&_limit=10`
    );
    const newPosts = await res.json();
    setPosts((posts) => [...posts, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);

  return (
    <Box variant="container">
      <Box my={40} as="h2">
        Posts
      </Box>

      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts?_limit=10`);
  const data = await res.json();

  const getNumberOfPosts = await fetch(`${API_URL}/posts/count`);
  const numberOfPosts = await getNumberOfPosts.json();

  return {
    props: {
      data,
      numberOfPosts: +numberOfPosts,
    },
  };
}

export default Posts;
