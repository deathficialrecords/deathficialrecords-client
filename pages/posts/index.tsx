import type { NextPage } from "next";
import { useState } from "react";
import { BasicPostData } from "@/utils/Types";
import { postsData } from "@/data/testdata";
import ThumbnailPost from "./components/PostIndex/ThumbnailPost";

const POSTS_PER_PAGE = 25;

const IndexPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirtPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = postsData.slice(indexOfFirtPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {currentPosts.map((post: BasicPostData) => (
          <div key={post.id}>
            <ThumbnailPost post={post} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => paginate(currentPage + 1)}>Next Page</button>
      </div>
      <div>
        {currentPage > 1 ? (
          <button onClick={() => paginate(currentPage - 1)}>
            Previous Page
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default IndexPage;
