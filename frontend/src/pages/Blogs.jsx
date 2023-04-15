import React, { useEffect, useState } from "react";
import Images from "../components/Imgimport";
import "../styles/marketing.css";
// import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import Post from "../components/Post";
import { link } from "../components/link"
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  console.log(link[0].blog)
  useEffect(() => {
    fetch(`${link[0].blog}/post`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  console.log(posts)


  let lorem_title = "Lorem ipsum";
  let lorem_text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,diam nonummy nibh euismod tincidunt ut laoreet dolore magna";

  return (
    <>
      <div className="blogs-container">
        <div className="blogs-section-1">
          <img src={Images.blogs_banner} alt="" />
        </div>
        <div className="blogs-title">
          <h1>Blogs</h1>
        </div>
        <div className="blogs-card-container">
          <div className="col-md-12 row case-study-card-inner">
            {posts.length > 0 && posts.map(post => (
              <Post {...post} />
            ))}
          </div>
        </div>
        <div className="blogs-contactus">
          {/* <ContactForm section="blog_contact"/> */}
          <Contact section="blog_contact"/>
        </div>
      </div>
    </>
  );
};

export default Blogs;
