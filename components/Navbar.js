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
                        <Link href="/about"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/blog"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/projects"><a>Home</a></Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar