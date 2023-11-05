import { Comment } from "@/utils/Types";
import { NextPage } from "next";
import CommentItem from "./Comment";

interface CommentsProps {
  comments: Comment[];
}

const Comments: NextPage<CommentsProps> = ({ comments }) => {
  return (
    <div>
      <div>
        <h2>Comments ({comments.length}):</h2>
      </div>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id}>
            <li key={comment.id}>
              <CommentItem comment={comment} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
