import { Metadata } from 'next'
import React from 'react'


async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
  return res.json()
}
type PropsType = {
  params: {
    id: string
  }
}
export const generateMetadata = async ({ params: { id } }: PropsType): Promise<Metadata> => {
  const post = await getData(id)
  console.log(post)

  return {
    title: post.title
  }
}
export default async function BlogDinamicPage({ params: { id } }: PropsType) {
  const post = await getData(id)
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}
