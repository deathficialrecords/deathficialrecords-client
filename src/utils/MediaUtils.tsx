import Image from "next/image";
import { MediaData, MediaTypes } from "./Types";

export const renderMedia = (media: MediaData) => {
  switch (media.type) {
    case MediaTypes.PHOTO:
      return (
        <div>
          <Image width={480} height={480} src={media.url} alt="Post media" />
        </div>
      );
    case MediaTypes.AUDIO:
      return (
        <div>
          <audio controls src={media.url} />
        </div>
      );
    case MediaTypes.VIDEO:
      return (
        <div>
          <video controls src={media.url} />;
        </div>
      );
    default:
      return null;
  }
};
