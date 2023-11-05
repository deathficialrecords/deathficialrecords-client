import { UserData } from "@/utils/Types";
import { NextPage } from "next";
import UserPosts from "./UserPosts";
import { formatDate } from "@/utils/utils";

interface UserDetailsPageProps {
  user: UserData;
}
const UserDetailsPage: NextPage<UserDetailsPageProps> = ({ user }) => {
  return (
    <div>
      <div>
        <h1>{user.username}</h1>
      </div>
      <div>Joined {formatDate(user.joinDate)}</div>
      <div>
        <p>{user.description}</p>
      </div>
      <div>
        <h2>{user.username}'s Posts</h2>
        <UserPosts user={user} />
      </div>
    </div>
  );
};

export default UserDetailsPage;
