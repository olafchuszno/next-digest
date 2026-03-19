// components/ui/LikeButtonWithUpdateFormAction.tsx
'use client';

import { updatePostLikesFormAction } from '@/lib/posts/actions/updatePostLikesFormAction';
import { Post } from '@/types/post';
import { FC, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Spinner } from './Spinner';

type Props = {
  post: Post;
};

export const LikeButtonWithUpdateFormAction: FC<Props> = ({ post }) => {
  const [count, setCount] = useState(post.likes ?? 0);

  const action = async (formData: FormData) => {
    await updatePostLikesFormAction(formData);
    setCount(likes => likes + 1);
  };

  return (
    <form className="client-border client-text flex items-center" action={action}>
      <input type="hidden" name="id" value={post.id} />
      <input type="hidden" name="likes" value={count + 1} />
      <SubmitButton count={count} />
    </form>
  );
};

const SubmitButton = ({ count }: { count: number }) => {
  const { pending } = useFormStatus();
  return (
    <button className="items-center flex gap-1" type="submit" disabled={pending}>
      Client Likes (with update + form action): {pending ? <Spinner /> : count}
    </button>
  );
};
