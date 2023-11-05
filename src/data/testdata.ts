import { MediaTypes, PostDetailData, UserData } from "@/utils/Types";

const User1: UserData = {
  id: 1,
  username: "User 123",
  description: "I'm user 123",
  joinDate: "2020-10-01T12:00:00.000Z",
  posts: [
    {
      id: 3,
      title: "Somethin for you",
      date_posted: "2023-10-07T12:00:00.000Z",
      tags: ["music"],
    },
    {
      id: 5,
      title: "Drum machine",
      date_posted: "2023-10-07T15:00:00.000Z",
      tags: ["drawing", "oc"],
    },
    {
      id: 7,
      title: "Mayro",
      date_posted: "2023-10-06T22:00:00.000Z",
      tags: ["meme"],
    },
  ],
};

const User2: UserData = {
  id: 2,
  username: "JoeTheKiller",
  description: "joe",
  joinDate: "2020-10-01T12:00:00.000Z",
  posts: [
    {
      id: 4,
      title: "Throwback",
      date_posted: "2023-10-07T13:00:00.000Z",
      tags: ["music", "oc"],
    },
    {
      id: 2,
      title: "Second Post",
      date_posted: "2023-10-06T12:00:00.000Z",
      tags: [],
    },
  ],
};

const User3: UserData = {
  id: 3,
  username: "Palmarildo",
  description: "",
  joinDate: "2020-10-01T12:00:00.000Z",
  posts: [
    {
      id: 1,
      title: "First Post",
      date_posted: "2022-10-05T12:00:00.000.000Z",
      tags: [],
    },
    {
      id: 6,
      title: "Random thoughts",
      date_posted: "2023-10-06T21:00:00.000Z",
      tags: ["discussion"],
    },
  ],
};

export const userData = [User1, User2, User3];

const FirstPost: PostDetailData = {
  id: 1,
  user: User3,
  title: "First Post",
  description: "This is the first post ever here",
  date_posted: "2022-10-05T12:00:00.000.000Z",
  tags: [],
  likes: 25,
  dislikes: 1,
  numComments: 2,
  comments: [
    {
      id: 1,
      user: User1,
      body: "Nice post!",
    },
    {
      id: 2,
      user: User2,
      body: "rizz",
    },
  ],
};

const SecondPost: PostDetailData = {
  id: 2,
  user: User2,
  title: "Second Post",
  description: "This is the second post ever here",
  date_posted: "2023-10-06T12:00:00.000Z",
  tags: [],
  likes: 100,
  dislikes: 0,
  numComments: 2,
  comments: [
    {
      id: 1,
      user: User1,
      body: "too late",
    },
    {
      id: 2,
      user: User3,
      body: "nerd",
    },
  ],
};

const ThirdPost: PostDetailData = {
  id: 3,
  user: User1,
  title: "Somethin for you",
  description: "",
  date_posted: "2023-10-07T12:00:00.000Z",
  tags: ["music"],
  media: {
    type: MediaTypes.AUDIO,
    url: "https://cdn.discordapp.com/attachments/801616056354471986/1168319192324382720/Freeze_6-Heavy_Betal_2023-10-29_174254.wav?ex=65515509&is=653ee009&hm=cb5302c61e07876ca896554d4192848032c1f181f974c2e021a5cfb6f85bdb73&",
  },
  likes: 69,
  dislikes: 69,
  numComments: 1,
  comments: [
    {
      id: 1,
      user: User3,
      body: "Ouch, this hurts to listen to.",
    },
  ],
};

const FourthPost: PostDetailData = {
  id: 4,
  user: User2,
  title: "Throwback",
  description: "Anyone remember this tune?",
  date_posted: "2023-10-07T13:00:00.000Z",
  tags: ["music", "oc"],
  media: {
    type: MediaTypes.AUDIO,
    url: "https://cdn.discordapp.com/attachments/485123700983595028/1170114308827533352/cans.mp3?ex=6557dcde&is=654567de&hm=50dec7a561fa8b230c3a24d5761863c38b1e7ccad4bed970e58b16d2d959cd63&",
  },
  likes: 150,
  dislikes: 3,
  numComments: 5,
  comments: [
    {
      id: 1,
      user: User1,
      body: "throwback",
    },
    {
      id: 2,
      user: User3,
      body: "i play this on repeat",
    },
  ],
};

const FifthPost: PostDetailData = {
  id: 5,
  user: User1,
  title: "Drum machine",
  description: "Drum machine",
  date_posted: "2023-10-07T15:00:00.000Z",
  tags: ["drawing", "oc"],
  media: {
    type: MediaTypes.PHOTO,
    url: "https://cdn.discordapp.com/attachments/485123700983595028/1170114640156557403/csm_drm1mk4_border_287769e4c5.png?ex=6557dd2d&is=6545682d&hm=9707f44df4b2ac10350c0ef06124c669de7ee86b4165b0b33693a99f7c321bc1&",
  },
  likes: 230,
  dislikes: 2,
  numComments: 2,
  comments: [
    {
      id: 1,
      user: User2,
      body: "drum machine",
    },
    {
      id: 2,
      user: User3,
      body: "The details are incredible. How did you do it?",
    },
  ],
};

const SixthPost: PostDetailData = {
  id: 6,
  user: User3,
  title: "Random thoughts",
  description: "why do we never talk about anything serious",
  date_posted: "2023-10-06T21:00:00.000Z",
  tags: ["discussion"],
  likes: 180,
  dislikes: 11,
  numComments: 2,
  comments: [
    {
      id: 1,
      user: User1,
      body: "because",
    },
    {
      id: 2,
      user: User2,
      body: "10%..., 90% existential crisis...",
    },
  ],
};

const SeventhPost: PostDetailData = {
  id: 7,
  user: User1,
  title: "Mayro",
  description: "Mayo Man",
  date_posted: "2023-10-06T22:00:00.000Z",
  tags: ["meme"],
  likes: 99999,
  dislikes: 0,
  numComments: 0,
  comments: [],
  media: {
    url: "https://media.discordapp.net/attachments/1170357608780144745/1170720826404905060/image0.gif?ex=655a11bb&is=65479cbb&hm=03bb2e5142a3cb150e651181a5d3375e9b3f6c2a832bc6401ad29dc01c113c82&=&width=440&height=248",
    type: MediaTypes.PHOTO,
  },
};

export const postsData: PostDetailData[] = [
  FirstPost,
  SecondPost,
  ThirdPost,
  FourthPost,
  FifthPost,
  SixthPost,
  SeventhPost,
];
