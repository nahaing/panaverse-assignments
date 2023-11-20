import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <Link href="/" className="logo">
              Xplore
              <i className="fab fa-staylinked" />
              kill
            </Link>
            <div className="nav-links" id="navLinks">
              {/* Reposnive bar open and close */}
              <i 
                className="fa fa-times" 
                // onclick="hideMenu()" 
              />
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/course">Course</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <i 
              className="fa fa-bars" 
              // onclick="showMenu()" 
            />
            {/* Reposnive bar open and close */}
        </nav>
    )
}