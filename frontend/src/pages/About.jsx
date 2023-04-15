import React from "react";
import "../styles/services.css";
import Images from "../components/Imgimport";

const About = () => {
  return (
    <>
      <div className="about-section-1">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
        <img src={Images.abt_mob} alt="" />
      </div>
      <div className="about-section-2">
        <div className="abt-txt-2">
          <h2>We are business lead generation company</h2>
          <h3>
            A Legacy of Excellence Spanning Over Many Years, The Ellora Group
            has been Unifying a Multitude of Market-Dominant Ventures Under One
            Roof
          </h3>
        </div>
        <div id="abt-txt-3" className="img-section-about">
          <img src={Images.about40} alt="" className="about40" />
          <div className="about40-txt">
            <h3>Trust the team your peers trust</h3>
            <p>
              Ever since its inception, Ellora Infotech has been at the top of
              its game in delivering world class, digital-first, data-driven,
              and result-oriented marketing solutions to our cherished and
              trusted clients. Established in Pune, Maharashtra in 2022, Ellora
              Infotech houses a team of dynamic, young, and vibrant working
              professionals who are dedicated towards achieving phenomenal
              results for our clients all year round.
            </p>
          </div>
        </div>
      </div>
      <div className="about-our-story">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          reiciendis corrupti debitis accusamus odio. Nemo eligendi quo
          consequuntur. Quo quia aspernatur est, consequuntur omnis accusantium
          molestiae ea quisquam suscipit itaque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit amet beatae eius sunt fugit
          excepturi, quia dolor quos consectetur animi? Voluptatem reiciendis
          quo veritatis cupiditate expedita, aliquid sequi voluptatum accusamus.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          dignissimos illo, delectus commodi aspernatur dolorem labore maxime!
          Fugit itaque accusantium odit reprehenderit, ipsam quo voluptatum
          aspernatur repellat minima officia laborum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellendus possimus iure temporibus
          soluta praesentium perferendis eligendi fuga cumque vitae ducimus
          maiores eveniet quibusdam iste perspiciatis facilis, optio excepturi
          tempora expedita! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias impedit porro asperiores blanditiis earum? Deserunt velit,
          nemo expedita vero, ipsa quasi magnam enim possimus qui doloribus,
          quam cumque voluptatem voluptatum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ullam maxime praesentium ipsum
          accusamus. Temporibus cum saepe ipsa? Obcaecati vitae veniam, id iste
          perferendis eaque eveniet qui. Ex alias praesentium iure? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Voluptate nemo dicta
          provident in laboriosam iste! Eos voluptatibus itaque natus
          praesentium, consectetur sed quod laboriosam non excepturi nisi porro
          mollitia nulla. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Esse, magni pariatur tenetur consectetur aliquid dolorum
          recusandae, quia ex obcaecati earum eaque? Beatae hic tempora omnis
          modi id, officia quos ea?
        </p>
        <div className="our-story-button">
          <a href="/contactus">
          <button>Get in touch</button>
          </a>
        </div>
        {/* <div className="our-story-cro">
          <img src={Images.pratik_sir} alt="img" />
          <div className="story-cro-text">
            <h3>Pratik Ahirrao</h3>
            <h4>Chief Revenue Officer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              perspiciatis eveniet, corrupti necessitatibus non repudiandae
              beatae error provident voluptate cumque, iure voluptates, dolore
              voluptatum sapiente! Delectus consectetur nisi tempora maxime?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              quasi fuga dolores sunt id cupiditate odio unde maxime laboriosam?
              Mollitia sit nam labore illo exercitationem suscipit eum vero
              neque error.
            </p>
          </div>
        </div> */}
      </div>

      <div className="about-ellora-inspiration row">
        <h2>What inspires Ellora</h2>
        <div className="inspiration-left column">
          <h3>Tenacity of Ellora</h3>
          <h4>
            These values are our bedrock. They define and make us. Our character
            and destinies are energized by our values
          </h4>
          <li>Be passionate about clients success</li>
          <li>Treat each other with success</li>
          <li>Be global and responsible</li>
          <li>Unyielding integrity in everythig we do</li>
        </div>
        <div className="inspiration-right column">
          <h3>Fundamentals of Ellora</h3>
          <h4>
            When our behavior and ways of working consistently reflect our
            values. We see the five habits in action
          </h4>
          <li>Being respectful</li>
          <li>Being reponsive</li>
          <li>Always communicating</li>
          <li>Demonstrating Stewardship</li>
          <li>Building Trust</li>
        </div>
      </div>

      <div className="about-mission">
        <div className="home-section2">
          <h2>
            Our mission keeps us focused and accountable, our vision drives us,
            and our values dictate how we succeed.
          </h2>
          <div className="home-card-container">
            <div className=" section2-card">
              <img src={Images.Card1} alt="" />
              <div >
                <h3>Mission</h3>
                <p>
                To establish long standing associations with our business partners by committing to deliver excellent stakeholder value
                </p>
              </div>
            </div>
            <div className=" section2-card">
              <img src={Images.Card2} alt="" />
              <div >
                <h3>Vision</h3>
                <p>
                To revolutionize the marketing and sales industry by leveraging our inhouse expertise and delivering best in class B2B marketing solutions
                </p>
              </div>
            </div>
            <div className=" section2-card">
              <img src={Images.Card3} alt="" />
              <div >
                <h3>Values</h3>
                <p>
                Learning is our guiding principle. Collaboration and camaraderie are what keep us going. Ellora is home to a group of energetic, youthful, and varied experts who are always pushing the envelope and have your best interests at heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-section4">
        <div className="col-md-12 row flip-card-container">
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.ellife} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.ellife} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card flip-card-right ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.elinfra} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.elinfra} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.elauto} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.elauto} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card flip-card-right ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.elconstruct} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.elconstruct} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-section4">
        <div className="col-md-12 row flip-card-container">
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.elnee} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.elnee} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card flip-card-right ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.palma} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.palma} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.elr} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.elr} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 card-tab" style={{ marginTop: "20px" }}>
            <div className="flip-card flip-card-right ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Images.sgra} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                  <img src={Images.sgra} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
