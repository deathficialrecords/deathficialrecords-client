import { postsData, userData } from "@/data/testdata";

export const getFullPost = (postId: number) => {
  for (const post of postsData) {
    if (post.id === postId) {
      return post;
    }
  }

  return null;
};

export const getUser = (id: number) => {
  for (const user of userData) {
    if (user.id === id) {
      return user;
    }
  }

  return null;
};
