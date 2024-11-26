// src/pages/AboutPage.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutPage.css'; // Create this CSS file for custom styles

const AboutPage = () => {
    const images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpg',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <h2>About Us</h2>
            <p>
                Scheduling wax appointments, or any appointments has never been easier. 
                With Wax the Ripper, we are dedicated to providing exceptional service and 
                creating meaningful connections with our clients. Founded on the principles 
                of integrity, innovation, and customer satisfaction, our team of passionate 
                professionals strives to deliver personalized solutions tailored to meet 
                the unique needs of each individual we serve. With a commitment to quality 
                and a focus on building lasting relationships, we aim to enhance the lives 
                of our clients through our comprehensive range of services. Join us on our 
                journey as we continue to grow and evolve, driven by our mission to make 
                a positive impact in our community and beyond.
            </p>

            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`About Us ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AboutPage;