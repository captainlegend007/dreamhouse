import {
  FaArrowLeft,
  FaArrowRight,
  FaDashcube,
  FaFacebook,
  FaHamburger,
  FaInstagram,
  FaPinterest,
  FaPlusCircle,
} from "react-icons/fa";
import "/home.css";
import Image1 from "./src/assets/Image1.webp";
import { FaCircleArrowDown, FaPeopleGroup, FaXTwitter } from "react-icons/fa6";
import Image2 from "./src/assets/Image2.webp";
import Image3 from "./src/assets/Image3.webp";
import Image4 from "./src/assets/Image4.jpg";
import Image5 from "./src/assets/Image5.jpg";
import Image6 from "./src/assets/Image6.jpg";
import Image7 from "./src/assets/Image7.jpg";
import Image8 from "./src/assets/Image8.jpg";
import Image9 from "./src/assets/Image9.jpg";
import Image10 from "./src/assets/Image10.jpg";
import Image11 from "./src/assets/Image11.jpg";
import Image12 from "./src/assets/Image12.jpg";
import Image13 from "./src/assets/Image13.jpg";
import Image14 from "./src/assets/Image14.jpg";
import Image15 from "./src/assets/Image3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 500,
        },
      },
    ],
  };
  const settingsB = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 500,
        },
      },
    ],
  };

  const scroll = (value) => {
    if (value === 1) {
      window.scrollTo({ top: 1700, left: 0, behavior: "smooth" });
    } else if (value === 2) {
      window.scrollTo({ top: 3850, left: 0, behavior: "smooth" });
    } else if (value === 3) {
      window.scrollTo({ top: 5500, left: 0, behavior: "smooth" });
    } else if (value === 4) {
      window.scrollTo({ top: 7100, left: 0, behavior: "smooth" });
    } else if (value === 5) {
      window.scrollTo({ top: 7700, left: 0, behavior: "smooth" });
    }
  };
  return (
    <div>
      {menu && (
        <div className="hamburger-menu">
          <div className="menu-flex">
            <div className="menu-parent">
              <IoClose className="menu" onClick={() => setMenu(!menu)} />
            </div>
            <p className="link-name">Home</p>
            <p className="link-name" onClick={() => scroll(1)}>
              About us
            </p>
            <p className="link-name" onClick={() => scroll(2)}>
              How We Work
            </p>
            <p className="link-name" onClick={() => scroll(3)}>
              Articles
            </p>
            <p className="link-name" onClick={() => scroll(4)}>
              Review
            </p>
            <p className="link-name" onClick={() => scroll(5)}>
              FAQ
            </p>
          </div>
        </div>
      )}
      <div className="header">
        <div className="quick-links">
          <p className="header-links">Gallery</p>
          <p className="header-links">Gallery</p>
          <p className="header-links">Gallery</p>
        </div>
        <div className="brand-name">
          <p>Dream House</p>
        </div>
        <div className="menu">
          <IoMenu className="menu" onClick={() => setMenu(!menu)} />
        </div>
      </div>
      <div className="dream-house-grid">
        <div className="dream-house-text">
          <p className="house-of-your-dreams">THE HOUSE OF YOUR DREAMS</p>
          <p className="house-of-your-dreams-sub-text">
            Discover the beauty and functional houses designed with minimalism in mind
          </p>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaXTwitter className="social-icon" />
            <FaPinterest className="social-icon" />
          </div>
        </div>
        <div className="dream-house-image">
          <img src={Image14} className="header-image" />
        </div>
        <div className="dream-house-description">
          <div className="image-arrow">
            <FaArrowLeft className="arrow-left" />
            <FaArrowRight className="arrow-right" />
          </div>
          <div className="house-name-div">
            <p className="house-name"> Dream House</p>
            <p className="house-details">
              Model house with large panoramic window and fireplace
            </p>
          </div>
          <div className="more-details">
            <p className="materials">MATERIALS</p>
            <p className="materials">Aerated Concrete</p>
          </div>
          <div className="more-details">
            <p className="materials">SQUARE</p>
            <p className="materials">132M2</p>
          </div>
          <div className="view-more">
            <p className="view-more-text">View More</p>
            <FaArrowRight className="view-more-arrow" />
          </div>
        </div>
      </div>
      <div className="about-us">
        <p className="about-us-text">ABOUT US</p>
        <p className="about-us-sub-text">
          We are a team of professionals with many years of experience in the design and
          construction of country houses.
        </p>

        <div className="about-us-grid">
          <div className="about-a">
            <div className="about-heading">
              <FaCircleArrowDown className="about-icon" />
              <p className="about-text-header">Personalized Approach</p>
            </div>
            <p className="about-text-description">
              We carefully consider all your preferences and needs, creating unique
              projects that perfectly match your lifestyle.
            </p>
          </div>
          <div className="about-a">
            <div className="about-heading">
              <FaCircleArrowDown className="about-icon" />
              <p className="about-text-header">Personalized Approach</p>
            </div>
            <p className="about-text-description">
              We carefully consider all your preferences and needs, creating unique
              projects that perfectly match your lifestyle.
            </p>
          </div>
          <div className="about-a">
            <div className="about-heading">
              <FaCircleArrowDown className="about-icon" />
              <p className="about-text-header">Personalized Approach</p>
            </div>
            <p className="about-text-description">
              We carefully consider all your preferences and needs, creating unique
              projects that perfectly match your lifestyle.
            </p>
          </div>
          <div className="about-a">
            <div className="about-heading">
              <FaPeopleGroup className="about-icon" />
              <p className="about-text-header">Professional Team</p>
            </div>
            <p className="about-text-description">
              Our team has years of experience and a proven track record of successful
              projects.
            </p>
          </div>
        </div>
        <div className="record-grid">
          <div className="record-grid-sub">
            <p className="record-grid-text-a">30+</p>
            <p className="record-grid-text-b">Models of Houses</p>
          </div>
          <div className="record-grid-sub">
            <p className="record-grid-text-a">10+</p>
            <p className="record-grid-text-b">Years of Experience</p>
          </div>
          <div className="record-grid-sub">
            <p className="record-grid-text-a">100+</p>
            <p className="record-grid-text-b">Satisfied Customers</p>
          </div>
          <div className="record-grid-sub">
            <p className="record-grid-text-a">7</p>
            <p className="record-grid-text-b">Stages of quality control</p>
          </div>
        </div>
      </div>
      <div className="best-sellers-container">
        <p className="best-seller-text">BESTSELLERS</p>
        <Slider {...settings}>
          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image10} className="best-seller-image" />
          </div>
          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image11} className="best-seller-image" />
          </div>

          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image5} className="best-seller-image" />
          </div>
          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image12} className="best-seller-image" />
          </div>
        </Slider>
      </div>
      <div className="how-we-work">
        <div className="how-we-work-first">
          <p className="how-we-work-text">HOW WE WORK</p>
          <img src={Image11} className="how-we-work-image" />
        </div>
        <div className="how-we-work-second">
          <div className="how-we-work-second-parent">
            <div className="left-part">
              <p className="how-we-work-number">01 </p>
            </div>
            <div className="right-part">
              <p className="about-header">Consultation</p>
              <p className="about-sub-text">
                We begin by discussing your needs, preferences, and budget, forming the
                concept of your future home.
              </p>
            </div>
          </div>
          <div className="how-we-work-second-parent">
            <div className="left-part">
              <p className="how-we-work-number">02 </p>
            </div>
            <div className="right-part">
              <p className="about-header">Design</p>
              <p className="about-sub-text">
                Our architects create a custom project with drawings and 3D
                visualizations. After approval, we prepare the necessary documents and
                estimates.
              </p>
            </div>
          </div>
          <div className="how-we-work-second-parent">
            <div className="left-part">
              <p className="how-we-work-number">03 </p>
            </div>
            <div className="right-part">
              <p className="about-header">Construction</p>
              <p className="about-sub-text">
                We start construction, ensuring quality and adherence to timelines at
                every stage. We keep you regularly informed about progress.
              </p>
            </div>
          </div>
          <div className="how-we-work-second-parent">
            <div className="left-part">
              <p className="how-we-work-number">04 </p>
            </div>
            <div className="right-part">
              <p className="about-header">Project Handover</p>
              <p className="about-sub-text">
                We conduct a final quality check, address any issues, and hand over the
                keys to your new home along with all documents and warranties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="start-fulfilling-your-dreams-grid">
        <div className="start-a">
          <img src={Image8} className="dream-image" />
        </div>
        <div className="start-b">
          <p className="start-fulfilling-text">START FULFILLING YOUR DREAMS WITH US</p>
          <p className="start-fulfilling-text-b">Flexible approach to each client</p>
        </div>
        <div className="start-div">
          <FaArrowRight className="arrow-right-b" />
        </div>
      </div>
      <div className="articles-and-tips">
        <div className="articles-text-parent">
          <p className="articles-text">ARTICLES AND TIPS</p>
          <p className="articles-sub-text">
            Here you will find a wealth of useful articles, tips and ideas to help you
            create the home of your dreams. Our experts share their knowledge and
            experience in design, construction, decor, and more.
          </p>
          <div className="articles-menu">
            <div className="article-menu-text">
              <button className="article-name-button">Design and Architecture</button>
              <button className="article-name-button">Interior and Decor</button>
              <button className="article-name-button">Landscape Design</button>
              <button className="article-name-button">Tips and Recommendations</button>
            </div>
            <div className="article-arrow-div">
              <FaArrowLeft className="articles-left-arrow" />
              <FaArrowRight className="articles-right-arrow" />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="best-sellers-container">
        <div className="best-seller-images">
          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image5} className="best-seller-image" />
            <p className="articles-text-details">
              Discover the secrets of successful country home design. Learn about modern
              architectural trends, innovative solutions, and best practices in home d...
            </p>
            <p className="articles-read-more">
              Read <FaArrowRight className="read-more-arrow" />
            </p>
          </div>
          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image4} className="best-seller-image" />
            <p className="articles-text-details">
              Discover the secrets of successful country home design. Learn about modern
              architectural trends, innovative solutions, and best practices in home d...
            </p>
            <p className="articles-read-more">
              Read <FaArrowRight className="read-more-arrow" />
            </p>
          </div>
          <div className="best-seller-item-a">
            <div className="best-seller-text-div">
              <p className="best-seller-name">TRANQUIL HAVEN</p>
              <p className="best-seller-price">$119,900</p>
            </div>
            <img src={Image7} className="best-seller-image" />
            <p className="articles-text-details">
              Discover the secrets of successful country home design. Learn about modern
              architectural trends, innovative solutions, and best practices in home d...
            </p>
            <p className="articles-read-more">
              Read <FaArrowRight className="read-more-arrow" />
            </p>
          </div>
        </div>
      </div>
      <div className="what-customers-say-about-us">
        <p className="customer-review-text">CUSTOMERS REVIEW</p>

        <Slider {...settingsB}>
          <div className="customer-review-div">
            <div className="customer-review-sub">
              <div className="customer-review-image-div">
                <div className="review-image-div">
                  <img src={Image15} className="customer-review-image" />
                </div>
                <div className="customer-details">
                  <p className="customer-name">Sarah Connor</p>
                  <p className="customer-item">Bought the Tranquil Haven Project</p>
                </div>
              </div>
              <p className="customer-review-text-b">
                We are thrilled with our new home! The Tranquil Haven project exceed all
                our expectations. The spacious rooms, cozy atmosphere, and high quality
                materials have made our country house the perfect retreat. Thank you for
                your professionalism and attention to detail!
              </p>
            </div>
          </div>
          <div className="customer-review-div">
            <div className="customer-review-sub">
              <div className="customer-review-image-div">
                <div className="review-image-div">
                  <img src={Image15} className="customer-review-image" />
                </div>
                <div className="customer-details">
                  <p className="customer-name">Sarah Connor</p>
                  <p className="customer-item">Bought the Tranquil Haven Project</p>
                </div>
              </div>
              <p className="customer-review-text-b">
                We are thrilled with our new home! The Tranquil Haven project exceed all
                our expectations. The spacious rooms, cozy atmosphere, and high quality
                materials have made our country house the perfect retreat. Thank you for
                your professionalism and attention to detail!
              </p>
            </div>
          </div>
          <div className="customer-review-div">
            <div className="customer-review-sub">
              <div className="customer-review-image-div">
                <div className="review-image-div">
                  <img src={Image15} className="customer-review-image" />
                </div>
                <div className="customer-details">
                  <p className="customer-name">Sarah Connor</p>
                  <p className="customer-item">Bought the Tranquil Haven Project</p>
                </div>
              </div>
              <p className="customer-review-text-b">
                We are thrilled with our new home! The Tranquil Haven project exceed all
                our expectations. The spacious rooms, cozy atmosphere, and high quality
                materials have made our country house the perfect retreat. Thank you for
                your professionalism and attention to detail!
              </p>
            </div>
          </div>
          <div className="customer-review-div">
            <div className="customer-review-sub">
              <div className="customer-review-image-div">
                <div className="review-image-div">
                  <img src={Image15} className="customer-review-image" />
                </div>
                <div className="customer-details">
                  <p className="customer-name">Sarah Connor</p>
                  <p className="customer-item">Bought the Tranquil Haven Project</p>
                </div>
              </div>
              <p className="customer-review-text-b">
                We are thrilled with our new home! The Tranquil Haven project exceed all
                our expectations. The spacious rooms, cozy atmosphere, and high quality
                materials have made our country house the perfect retreat. Thank you for
                your professionalism and attention to detail!
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="faq-div">
        <p className="faq-text">FAQ</p>

        <div className="faq-grid">
          <div className="faq-questions">
            <div className="faq-flex">
              <div className="faq-questions-and-answers">
                <p className="faq-questions-text">
                  What is the process for designing a house
                </p>
                <FaPlusCircle className="faq-icon" />
              </div>
            </div>
            <div className="faq-flex">
              <div className="faq-questions-and-answers">
                <p className="faq-questions-text">
                  What is the process for designing a house
                </p>
                <FaPlusCircle className="faq-icon" />
              </div>
            </div>
            <div className="faq-flex">
              <div className="faq-questions-and-answers">
                <p className="faq-questions-text">
                  What is the process for designing a house
                </p>
                <FaPlusCircle className="faq-icon" />
              </div>
            </div>
            <div className="faq-flex">
              <div className="faq-questions-and-answers">
                <p className="faq-questions-text">
                  What is the process for designing a house
                </p>
                <FaPlusCircle className="faq-icon" />
              </div>
            </div>
            <div className="faq-flex">
              <div className="faq-questions-and-answers">
                <p className="faq-questions-text">
                  What is the process for designing a house
                </p>
                <FaPlusCircle className="faq-icon" />
              </div>
            </div>
            <p className="more-faq">
              More FAQ <FaArrowRight className="arrow-right-c" />
            </p>
          </div>

          <div className="do-you-have-questions">
            <div className="questions-flex">
              <p className="main-questions-text">Do You have any questions?</p>
              <p className="sub-questions-text">
                You can feel free to ask us any questions and we will answer as soon as
                possible
              </p>
            </div>
            <div className="questions-inputs">
              <input placeholder="email address" className="email-input" />
              <textarea className="text-area-input" placeholder="Enter your questions" />
            </div>
            <div className="send-flex">
              <div className="check-box-div">
                <input type="checkbox" className="checkbox-input" />
                <p className="by-clicking">
                  By clicking on the button you agree to the privacy policy
                </p>
              </div>
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-a">
          <p className="footer-logo">2025 DreamHouse</p>
          <p className="footer-term-of-use">Term of use</p>
        </div>
        <div className="footer-a">
          <p className="footer-term-of-use">Privacy Policy</p>
          <div className="footer-icons">
            <FaFacebook className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaXTwitter className="footer-icon" />
            <FaPinterest className="footer-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
