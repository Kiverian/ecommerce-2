import React from 'react';
// import Carousel from 'react-bootstrap/Carousel'
import './Home.css'

const Home = () => {
  return (
    <div>
        <h3 className="about">
          Magnificent Exploration
          </h3>
      {/* <!--css slideshow--> */}
      <aside>
        <div className="slide"></div>
      </aside>
        {/* <h3>
          More about Magnificent Exploration!
        </h3> */}

        <p className="about-info">
          From luxurious jets to get you to your next destination in the best time, to magnificent mind blowing yachts,<br />
   Magnificent Exploration has been giving consumers the most amazing experience someone could ever dream of.<br />
    Listed as number 1 on the Luxury Travels website for 4 consecutive years, we have truly made an impact<br />
     while living up to the name Magnificent Exploration. You have a chance to choose from new and used private<br />
      jets and yachts to meet your needs. For more information please contact us on our contact page. </p>
    </div>


  )
}

export default Home;