/* eslint-disable no-unused-vars */
import React from 'react';
import './Main.css';
import ai from "../../images/ai.jpeg";
import linkedin from "../../images/linkedin.png";
import L3 from "../../images/L3.jpg";
import GMaps from "../../images/GMaps.png";


const Main = () => {

  const handleEdit = () => {
    // Edit button logic
  };

  const handleDelete = () => {
    // Delete button logic
  };

  const blogData = [
    {
      title: "Artificial Intelligence",
      content: "Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks may include speech recognition, decision-making, problem-solving, and learning from experience. AI has the potential to revolutionize various industries by enabling automation, improving efficiency, and providing valuable insights from large amounts of data. It is being used in areas such as healthcare, finance, transportation, and customer service, offering innovative solutions and driving technological advancements.",
      image: ai
    },
    {
      title: "LinkedIn",
      content: "LinkedIn is a social media platform designed for professional networking, job searching, and career development, connecting professionals and facilitating business connections globally. It provides a platform for showcasing skills, sharing industry insights, and building professional relationships.",
      image: linkedin
    },
    {
        title: "Nature",
        content: "Nature encompasses the physical world and all living organisms, including plants, animals, and natural phenomena. It represents the beauty, diversity, and interconnectedness of the natural environment, providing a source of inspiration, wonder, and ecological balance.",
        image: L3
    },
    {
        title: "GMaps",
        content: "A web mapping service developed by Google. It offers detailed maps, satellite imagery, street view, and real-time traffic information. Google Maps is widely used for navigation, finding locations, exploring businesses, and planning routes for both personal and commercial purposes. It has become an essential tool for exploring and navigating the physical world.",
        image: GMaps
    },
    // Add more blog data as needed
  ];

  return (
    <div className="dashboard">
      {blogData.map((blog, index) => (
        <div key={index} className="container">
          <div className="image-container">
            <img src={blog.image} alt="Img" className="image" />
          </div>
          <div className="content-container">
            <h2>{blog.title}</h2>
            <div className="content-wrapper">
              <p className="content">{blog.content}</p>
              <a href="/" className="read-more">
                Read More
              </a>
            </div>
            
              <>
              <button onClick={handleEdit} className="edit">
                Edit
              </button>
              <button onClick={handleDelete} className="delete">
                Delete
              </button>
              </>
            {/* <div className="button-container">
              <button onClick={handleEdit} className="edit-button">
                Edit
              </button>
              <button onClick={handleDelete} className="delete-button">
                Delete
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
