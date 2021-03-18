import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/ai-robot.png" width={50} height={50}/>
        {/* <img src="/ai-robot.png" alt=""/> */}
      </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>All Ninjas</a></Link>
    </nav>
   );
}

export default Navbar;