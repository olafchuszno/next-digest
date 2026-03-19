// components/ui/LikeButton.tsx
'use client'

import { FC, useEffect, useState } from 'react'

type Props = {
  initialLikes?: number
}

export const LikeButton: FC<Props> = ({ initialLikes }) => {
  const [count, setCount] = useState(initialLikes ?? 0)

  useEffect(() => {
    console.log('mounted in browser')
  }, [])

  return <button onClick={() => setCount(count + 1)}>Likes: {count}</button>
}