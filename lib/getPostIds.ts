import { Post } from '@/types/post';

export const getPostIds = async (): Promise<number[] | null> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts: Post[] = await response.json();

    const firstFivePostIds = posts.slice(0, 5).map(({ id }) => id);

    return firstFivePostIds;
  } catch (error) {
    return null;
  }
};
