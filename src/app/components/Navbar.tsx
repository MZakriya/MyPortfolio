import Link from 'next/link';

export default function Navbar() {
    return (
      <div className=" text-white">
  <nav className="flex justify-between items-center p-5 shadow-md bg-black/50 backdrop-blur-md fixed w-full z-50 transition-all duration-300">
  <Link href="/" className="hover:text-blue-800 transition-all"><h1 className="text-3xl font-extrabold text-blue-400">MyPortfolio</h1></Link>
  <ul className="flex gap-6 text-lg justify-center w-full">
    <li><Link href="/" className="hover:text-blue-400 transition-all">Home</Link></li>
    <li><Link href="/about" className="hover:text-blue-400 transition-all">About</Link></li>
    <li><Link href="/projects" className="hover:text-blue-400 transition-all">Projects</Link></li>
    <li><Link href="/contact" className="hover:text-blue-400 transition-all">Contact</Link></li>
  </ul>
</nav>
</div>
    );
}
