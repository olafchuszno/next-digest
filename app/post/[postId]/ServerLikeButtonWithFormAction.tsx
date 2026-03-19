import { updatePostLikesFormAction } from '@/lib/posts/actions/updatePostLikesFormAction';
import { Post } from '@/types/post';
import { FC } from 'react';

type Props = {
  post: Post;
};

export const ServerLikeButtonWithFormAction: FC<Props> = ({ post }) => {
  return (
    <form
      className="server-border server-text flex items-center"
      action={updatePostLikesFormAction}
    >
      <input type="hidden" name="id" value={post.id} />
      <input type="hidden" name="likes" value={(post.likes ?? 0) + 1} />
      <button type="submit">Server Likes: {post.likes ?? 0}</button>
    </form>
  );
};
