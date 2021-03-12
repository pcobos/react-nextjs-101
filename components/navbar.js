import Link from 'next/link';

const Navbar = () => {
  return ( 
    <div>
      <div>
        <h1>Logo</h1>
      </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>All Ninjas</a></Link>
    </div>
   );
}

export default Navbar;