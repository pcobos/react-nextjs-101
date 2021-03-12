import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae voluptate at, possimus beatae perferendis asperiores eum quisquam ipsum et numquam. Fuga, est eos. Enim exercitationem perferendis facilis ad soluta.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See all ninjas</a>
      </Link>
    </div>
  )
}
