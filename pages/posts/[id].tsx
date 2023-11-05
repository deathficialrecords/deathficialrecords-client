import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { postsData } from "@/data/testdata";
import { PostDetailData } from "@/utils/Types";
import { getFullPost } from "@/utils/DatabaseUtils";
import PostDetail from "./components/PostDetail/PostDetail";

interface PostPageProps {
  post: PostDetailData | null;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <main>
      <PostDetail post={post} />
    </main>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsData.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const post = getFullPost(Number(id));

  return {
    props: {
      post,
    },
  };
};
