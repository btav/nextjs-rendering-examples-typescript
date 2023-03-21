interface PostType {
  title: string;
  content: string;
  imageUrl: string;
}

export interface Posts {
  posts: [PostType];
}
