import { BasicPostData } from "@/utils/Types";
import Link from "next/link";
import MediaContainer from "../shared/MediaContainer";
import { formatDate } from "@/utils/utils";

const POST_DESCRIPTION_MAX_LENGTH = 200;

interface BasicPostProps {
  post: BasicPostData;
}

const ThumbnailPost = ({ post }: BasicPostProps) => {
  return (
    <div>
      <div>
        <h2>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
        <div>Date posted: {formatDate(post.date_posted)}</div>
        <div>{post.media && <MediaContainer media={post.media} />}</div>
        <p>
          {post.description.length > POST_DESCRIPTION_MAX_LENGTH
            ? `${post.description.slice(0, POST_DESCRIPTION_MAX_LENGTH)}...`
            : post.description}
        </p>
        <p>Likes: {post.likes}</p>
      </div>
    </div>
  );
};

export default ThumbnailPost;
