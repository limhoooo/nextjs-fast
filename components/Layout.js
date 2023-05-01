import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Utterances from './Utterances'

const name = 'Lim Ho'
export const siteTitle = 'TECH BLOG'

export default function Layout({ children, home }) {
  const [theme, setTheme] = useState(() => {
    // localStorage 는 클라이언트상에서 동작하는 내장함수 이다
    // nextjs 를 사용할땐 서버측에서 랜더링이 되기때문에 에러가난다
    // 이런식으로 서버측에선 동작하지않고 클라이언트상에서일때 동작하게끔 처리 해줘야한다.
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  const handleClick = () => {
    const flag = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', flag)
    setTheme(flag)
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [theme])
  return (
    <div className="bg-pink-50 dark:bg-black text-gary-800 dark:text-gray-200">
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <button onClick={handleClick}>
          {theme === 'dark' ? (
            <Image width={30} height={30} src="/images/light-mode.svg" />
          ) : (
            <Image width={30} height={30} src="/images/dark-mode.svg" />
          )}
        </button>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <Link href="/posts/write">Write</Link>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <>
            <Utterances />
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
