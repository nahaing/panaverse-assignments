import Navbar from "@/components/navbar/navbar"

export default function Home() {
  return (
    <main>
        {/* Created BY - Sagar Developer */}
        <section className="header">
          <Navbar/>
          <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              consequuntur corrupti sapiente aut porro
              <br /> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">
              Visit Us To Know More
            </a>
          </div>
        </section>
        {/* Course Section Start */}
        <section className="course">
          <div className="PageBlock">
            <div className="verticalLine" />
            <div className="Clear" />
          </div>
          <h1>
            EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="row">
            <div className="course-col">
              <h3>Undergraduate Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                dolor corporis, commodi nihil quas soluta labore quisquam impedi
                distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.
              </p>
            </div>
            <div className="course-col">
              <h3>Graduate Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                dolor corporis, commodi nihil quas soluta labore quisquam impedit
                distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.
              </p>
            </div>
            <div className="course-col">
              <h3>Adult Learning &amp; Degree Completion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                dolor corporis, commodi nihil quas soluta labore quisquam impedit
                distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.
              </p>
            </div>
          </div>
        </section>
        {/* Course Section End */}
        {/* Campus Section Start*/}
        <section className="campus">
          <div className="PageBlock">
            <div className="verticalLine" />
            <div className="Clear" />
          </div>
          <h1>TAKE OUR VIRTUAL TOUR</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="row">
            <div className="campus-col">
              <img src="img/Campus1.png" alt="" />
              <div className="layer">
                <h3>DELHI</h3>
              </div>
            </div>
            <div className="campus-col">
              <img src="img/Campus2.png" alt="" />
              <div className="layer">
                <h3>HYDERABAD</h3>
              </div>
            </div>
            <div className="campus-col">
              <img src="img/Campus3.png" alt="" />
              <div className="layer">
                <h3>MUMBAI</h3>
              </div>
            </div>
          </div>
        </section>
        {/* Campus Section End */}
        {/* Facilities Section Start */}
        <section className="facilities">
          <div className="PageBlock">
            <div className="verticalLine" />
            <div className="Clear" />
          </div>
          <h1>Our Facilities</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="row">
            <div className="facilities-col">
              <img src="img/libary.png" alt="" />
              <h3>Best Libary</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                omnis asperiores atque aperiam.
              </p>
            </div>
            <div className="facilities-col">
              <img src="img/playground.png" alt="" />
              <h3>Athletics</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                omnis asperiores atque aperiam.
              </p>
            </div>
            <div className="facilities-col">
              <img src="img/food.png" alt="" />
              <h3>Tasty and Healthy Food</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                omnis asperiores atque aperiam.
              </p>
            </div>
          </div>
        </section>
        {/* Facilities Section End */}
        {/* Testimonials Section Start */}
        <section className="testimonials">
          <div className="PageBlock">
            <div className="verticalLine" />
            <div className="Clear" />
          </div>
          <h1>What Our Student Says</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="row">
            <div className="testimonials-col">
              <img src="img/user.png" alt="oo.." />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  maiores in nostrum rerum voluptatem praesentium veritatis alias
                  omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.
                </p>
                <h3>Student Name</h3>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
            <div className="testimonials-col">
              <img src="img/user.png" alt="oo.." />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  maiores in nostrum rerum voluptatem praesentium veritatis alias
                  omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.
                </p>
                <h3>Student Name</h3>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-alt" />
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section End */}
        {/* Call To Action Section Start */}
        <section className="cta">
          <h1>GET READY FOR A BRIGHT FUTURE</h1>
          <a href="contact.html" className="hero_btn">
            CONTACT US
          </a>
        </section>
        {/* Call To Action Section End */}
        {/* Footer Section Start */}
        <section className="footer">
          <hr />
          <h4>About Us</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
            incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur.
            Aliquid ab deserunt exercitationem, illum molestiae dolorem.
          </p>
          <div className="icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin" />
          </div>
          <p>
            Made with <i className="fas fa-heart" /> by{" "}
            <a href="index.html">Sagar Developer</a>
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
