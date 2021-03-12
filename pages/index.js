import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Test</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae voluptate at, possimus beatae perferendis asperiores eum quisquam ipsum et numquam. Fuga, est eos. Enim exercitationem perferendis facilis ad soluta.</p>
      <Footer />
    </div>
  )
}
