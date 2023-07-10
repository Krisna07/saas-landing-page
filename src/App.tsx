import React from "react";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/Hero.css";
import "./Styles/Section.css";
import "./Styles/Navbar.css";
import Features from "./Components/Sections/Features";
import MoreFeatures from "./Components/Sections/MoreFeatures";
import SectionType from "./Components/Sections/SectionType";
import Testimonila from "./Components/Sections/Testimonila";
import Pricings from "./Components/Sections/Pricings";
import TrialForm from "./Components/Sections/TrialForm";
import News from "./Components/Sections/News";
import Story from "./Components/Sections/Story";
import Footer from "./Components/Sections/Footer";
import { Element } from "react-scroll";

function App() {
  const features = [
    {
      featuresLeft: {
        heading: "Easy Advance Protection",
        des: "Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.",
      },
      featuresRight: {
        img: "/Images/protection.png",
       
      },
    },
    {
      featuresRight: {
        heading: "Easy to use",
        des: "Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.",
      },
      featuresLeft: {
        img: "/Images/usability.png",
     
       
      },
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Element name="home" className="sections">
        <Hero />
      </Element>
      <Element name="aboutus" className="sections">
        <SectionType
          heading="Software Solutions That Fit Your Needs"
          id="about us"
          sectionDes={" The Features to boost your productivity"}
          sectionItems={<Features />}
        />
      </Element>
      <Element name="services" className="sections" id="services">
        {features.map((features, x) => (
          <section className="sections" key={x}>
            <MoreFeatures
              featuresLeft={features.featuresLeft}
              featuresRight={features.featuresRight}
            />
          </section>
        ))}
      </Element>
      <Element name="testimonial" className="sections">
        <SectionType
          heading="Customer Testimonial"
          id="testimonial"
          sectionDes={" The Features to boost your productivity"}
          sectionItems={<Testimonila />}
        />
      </Element>
      <Element name="pricing" className="sections">
        <Pricings />
        <TrialForm />
      </Element>

      <Element name="story" className="sections">
        <News />
        <Story />
      </Element>
      <Element name="contactus" className="sections">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
