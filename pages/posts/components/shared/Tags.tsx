import { NextPage } from "next";

interface TagsProps {
  tags: string[];
}

const Tags: NextPage<TagsProps> = ({ tags }) => {
  return (
    <div>
      <div>Tags:</div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
