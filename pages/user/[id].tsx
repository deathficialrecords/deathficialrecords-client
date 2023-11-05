import { userData } from "@/data/testdata";
import { getUser } from "@/utils/DatabaseUtils";
import { UserData } from "@/utils/Types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import UserDetailsPage from "./components/UserPage";

interface UserPageProps {
  user: UserData;
}
const UserPage: NextPage<UserPageProps> = ({ user }) => {
  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <main>
      <UserDetailsPage user={user} />
    </main>
  );
};

export default UserPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = userData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const user = getUser(Number(id));
  console.log(user);

  return {
    props: {
      user: user,
    },
  };
};
