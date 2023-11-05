import { renderMedia } from "@/utils/MediaUtils";
import { MediaData } from "@/utils/Types";
import { NextPage } from "next";

interface ImageContainerProps {
  media: MediaData;
}

const MediaContainer: NextPage<ImageContainerProps> = ({ media }) => {
  return <div>{renderMedia(media)}</div>;
};
export default MediaContainer;
