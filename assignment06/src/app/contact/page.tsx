import Navbar from "@/components/navbar/navbar"

export default function Contact(){
    return(
        <main>
            <section className="Sub-header">
                <Navbar/>
                <h1>Contact Us</h1>
            </section>
            {/* Contact Us Section Start */}
            <section className="loacation">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                />
            </section>
            <section className="contact-us">
                <div className="row">
                <div className="content-col">
                    <div>
                    <i className="fa fa-home" />
                    <span>
                        <h5>NH9 Road, ABC Building</h5>
                        <p>Ghaziabad, Uttar Pradesh, IN</p>
                    </span>
                    </div>
                    <div>
                    <i className="fa fa-phone" />
                    <span>
                        <h5>+91 7445546525</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                    </div>
                    <div>
                    <i className="fa fa-envelope" />
                    <span>
                        <h5>xyz@email.com</h5>
                        <p>Email Us Yor Query</p>
                    </span>
                    </div>
                </div>
                <div className="content-col">
                    <form>
                    <input 
                        type="text" 
                        placeholder="Enter Name" 
                        // required="" 
                    />
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        // required="" 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Subject" 
                        // required="" 
                    />
                    <textarea
                        rows={8}
                        placeholder="Message"
                        // required=""
                        defaultValue={""}
                    />
                    <button type="submit" className="hero_btn btn">
                        Send Message
                    </button>
                    </form>
                </div>
                </div>
            </section>
            {/* Contact Us Section End */}
            {/* Footer Section Start */}
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
            {/* Footer Section End */}
        </main>
    )
}