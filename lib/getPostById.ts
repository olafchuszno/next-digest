export const getPostById = async (postId: number) => {
  try {
    const post = (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    ).json();
    return {
      ...post,
      likes: 0,
    };
  } catch (error) {
    return null;
  }
};
