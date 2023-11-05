import { PostDetailData } from "@/utils/Types";
import { NextPage } from "next";
import Comments from "./Comments";
import MediaContainer from "../shared/MediaContainer";
import Tags from "../shared/Tags";
import Link from "next/link";

interface PostProps {
  post: PostDetailData;
}

const PostDetail: NextPage<PostProps> = ({ post }) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div>
        <Link href={`/user/${post.user.id}`}>{post.user.username}</Link>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>{post.media ? <MediaContainer media={post.media} /> : null}</div>
      <div>
        Likes: {post.likes} Dislikes: {post.dislikes}
      </div>
      <Tags tags={post.tags} />
      <Comments comments={post.comments} />
    </div>
  );
};

export default PostDetail;
