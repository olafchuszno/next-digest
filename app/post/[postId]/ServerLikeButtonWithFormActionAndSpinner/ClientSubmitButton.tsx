'use client';

import { useFormStatus } from 'react-dom';
import { Spinner } from '@/components/ui/Spinner';

export const ClientSubmitButton = ({ likes }: { likes: number }) => {
  const { pending } = useFormStatus();
  return (
    <button className="client-border client-text flex gap-1" type="submit" disabled={pending}>
      Server Likes (with client button): {pending ? <Spinner /> : likes}
    </button>
  );
};
