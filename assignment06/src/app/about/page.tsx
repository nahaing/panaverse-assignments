import Link from "next/link"
import Navbar from "@/components/navbar/navbar"

export default function About(){
    return(
        <main>
            <section className="Sub-header">
                <Navbar/>
                <h1>About Us</h1>
            </section>
            {/* About Us Section Start */}
            <section className="about-us">
                <div className="row">
                <div className="about-col">
                    <h1>We are the world's largest University</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                    cumque in accusantium molestias maiores fuga vitae eos, ducimus
                    officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis
                    aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum
                    iste animi voluptatem fugiat totam excepturi dolor.
                    </p>
                    <a href="#" className="hero_btn btn">
                    EXPLORE NOW
                    </a>
                </div>
                <div className="about-col">
                    <img src="img/about.png" alt="" />
                </div>
                </div>
            </section>
            {/* About Us Section end */}
            {/* Footer Section start */}
            <section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
                incidunt odio nam facilis, eligendi
                <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
                exercitationem, illum molestiae dolorem.
                </p>
                <div className="icons">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-twitter" />
                <i className="fab fa-linkedin" />
                </div>
                <p>
                Made with <i className="fas fa-heart" /> by{" "}
                <a href="#">Sagar Developer</a>
                </p>
                <p>
                Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights
                Reserved
                </p>
            </section>
            {/* Footer Section end */}
        </main>
    )
}