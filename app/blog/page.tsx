import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Blog | Next App',
}
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
  if (!res.ok) throw new Error("Enable to fetch posts!")
  return res.json()
}
const Blog = async () => {
  const posts = await getData()
  return (
    <div>
      <ul>
        {posts.map((post: any) => {
          return <li key={post.id}>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Blog