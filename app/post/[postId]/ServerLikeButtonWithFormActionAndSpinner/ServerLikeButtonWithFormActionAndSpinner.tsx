import { updatePostLikesFormAction } from '@/lib/posts/actions/updatePostLikesFormAction';
import { Post } from '@/types/post';
import { FC } from 'react';
import { ClientSubmitButton } from './ClientSubmitButton';

type Props = {
  post: Post;
};

export const ServerLikeButtonWithFormActionAndSpinner: FC<Props> = ({ post }) => {
  return (
    <form className="server-border server-text" action={updatePostLikesFormAction}>
      <input type="hidden" name="id" value={post.id} />
      <input type="hidden" name="likes" value={(post.likes ?? 0) + 1} />
      <ClientSubmitButton likes={post.likes ?? 0} />
    </form>
  );
};
