// import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

export default function Index() {
  return <>
    <Head>
      <title>Next.js Blog Example with {CMS_NAME}</title>
    </Head>
  </>
}

export async function getStaticProps() {
  // const posts = (await getAllPostsForHome(preview)) || []
  const posts = []

  return {
    props: { posts },
  }
}
