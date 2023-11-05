export interface UserData {
  id: number;
  username: string;
  description: string;
  joinDate: string;
  posts: MinimalPostData[];
}
export interface MediaData {
  url: string;
  type: MediaTypes;
}
export enum MediaTypes {
  VIDEO,
  PHOTO,
  AUDIO,
}

export interface BasicUserData {
  id: number;
  username: string;
}

export interface MinimalPostData {
  id: number;
  title: string;
  date_posted: string;
  tags: string[];
}

export interface BasicPostData extends MinimalPostData {
  user: BasicUserData;
  description: string;
  numComments: number;
  likes: number;
  dislikes: number;
  media?: MediaData;
}

export interface PostDetailData extends BasicPostData {
  comments: Comment[];
}

export interface Comment {
  id: number;
  user: BasicUserData;
  body: string;
}
