import React from 'react';
import { useState } from 'react';
import Section from '../../components/Section/Section';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import './Home.css';
import exampleImage from '../../assets/example_img.jpg';

function Home() {
  const topSectionContent = {
    heading: "Heading #1",
    description: "Description! This is my super cool and awesome fun fact. Oh cool! This is my other super cool and awesome fun fact."
  };

  const middleSectionContent = {
    heading: "Heading #1",
    caption: "Caption #1",
    description: `Description: ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.`
  };

  const cardsData = [
    {
      title: "Hang out with Creative Labs",
      description: "I love spending time with my creatives and making memories!",
      image: exampleImage
    },
    {
      title: "Caption #1",
      description: "Description"
    },
    {
      title: "Caption #1",
      description: "Description"
    },
    {
      title: "Caption #1",
      description: "Description"
    },
    {
      title: "Caption #1",
      description: "Description"
    },
    {
      title: "Caption #1",
      description: "Description"
    }
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="home">
        <Section heading={topSectionContent.heading} description={topSectionContent.description} imagePosition="right"/>
        
        <Section heading={middleSectionContent.heading} caption={middleSectionContent.caption} description={middleSectionContent.description} imagePosition="left"/>
        
        <button className="showMore" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
        </button>

        {showMore && <CardCarousel heading="Heading #1" cards={cardsData} />}
      </div>
    </div>
  );
}

export default Home;