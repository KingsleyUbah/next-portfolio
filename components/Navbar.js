import Link from './LinkElement'

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="logo"></div>
                <ul>
                    <li>
                        <Link href="/" ><a>Home</a></Link>
                    </li>
                    
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a>Contact</a></Link>
                    </li>
                    <li>
                        <Link href="/blog"><a>Blog</a></Link>
                    </li>
                    <li>
                        <Link href="/projects"><a>Projects</a></Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar