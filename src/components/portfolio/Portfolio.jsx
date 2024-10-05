import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MeTube",
    img: "https://res.cloudinary.com/dra1ghsrp/image/upload/v1728127733/ahqwokuzsombwat1ap2j.png",
    link: "https://videosharingplatformapp.vercel.app/",
    desc: "MeTube App is a full-stack web application that includes features such as user registration and authentication, video uploading, video playback, dynamic views, For the front end, I used React.js to build the user interface components, while for the back end, I employed Node.js with Express.js. Video storage and streaming were managed using Multer and MongoDB database.",
  },
  {
    id: 2,
    title: "MidiumLite",
    img: "https://res.cloudinary.com/dra1ghsrp/image/upload/v1728127910/pr9k2tyylshmgfirzatt.png",
    link: "https://midiumlite.vercel.app/",
    desc: "MidiumLite is a full-stack web application that allows users to create and publish blog posts. It includes features like user authentication, real-time comments, and a responsive design for various devices. I used React.js for the front end and Node.js for the back end and React for building the user interface components, and Node.js with Express.js for the server. For the database, I employed MongoDB.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href={item.link}
            >
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
