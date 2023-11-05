import { UserData } from "@/utils/Types";
import { NextPage } from "next";
import Link from "next/link";

interface UserPostsProps {
  user: UserData;
}
const UserPosts: NextPage<UserPostsProps> = ({ user }) => {
  return (
    <div>
      <ul>
        {user.posts.map((post) => (
          <div key={post.id}>
            <li key={post.id}>
              <div>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
