import { Comment } from "@/utils/Types";
import { NextPage } from "next";
import Link from "next/link";

interface CommentProps {
  comment: Comment;
}
const Comment: NextPage<CommentProps> = ({ comment }) => {
  return (
    <div>
      <div>
        <Link href={`/user/${comment.user.id}`}>{comment.user.username}</Link>
      </div>
      <div>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
