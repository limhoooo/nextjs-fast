import React, { memo } from 'react'

{
  /* <script
        src="https://utteranc.es/client.js"
        repo="limhoooo / utterances-comment"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script> */
}

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) return
        const srcriptElement = document.createElement('script')
        srcriptElement.src = 'https://utteranc.es/client.js'
        srcriptElement.async = true
        srcriptElement.crossorigin = 'anonymous'
        srcriptElement.setAttribute('repo', 'limhoooo/utterances-comment')
        srcriptElement.setAttribute('issue-term', 'pathname')
        srcriptElement.setAttribute('theme', 'github-light')
        elem.appendChild(srcriptElement)
      }}
    />
  )
}

// 리랜더안되게 메모이제이션 처리
export default memo(Utterances)
