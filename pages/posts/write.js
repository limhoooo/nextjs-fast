import { useRef, useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function write() {
  const router = useRouter()
  const titleRef = useRef(undefined)
  const contentRef = useRef(undefined)

  const handleSumbit = (event) => {
    event.preventDefault()

    const id = titleRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          alert(data.msg)
          router.push('/')
        })
        .catch((error) => alert(`request error: ${error}`))
    }
  }
  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={handleSumbit}>
        {/* <input type="text" name="id" placeholder="id" required ref={idRef} /> */}
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <input
          className="rounded bg-pink-500 px-2"
          type="submit"
          value="Create"
        />
      </form>
    </Layout>
  )
}
