// src/pages/AboutPage.jsx
import './AboutPage.css'; // Import your CSS file for About page styles

const AboutPage = () => {
    return (
        <div className="about-container">
            <h2 className="centered-title">About Us</h2>
            <p className="centered-text">
                Scheduling wax appointments, or any appointments, has never been easier. 
                With Wax the Ripper, we are dedicated to providing exceptional service and creating 
                meaningful connections with our clients. Founded on the principles of integrity, 
                innovation, and customer satisfaction, our team of passionate professionals strives 
                to deliver personalized solutions tailored to meet the unique needs of each individual 
                we serve. With a commitment to quality and a focus on building lasting relationships, 
                we aim to enhance the lives of our clients through our comprehensive range of services. 
                Join us on our journey as we continue to grow and evolve, driven by our mission to make 
                a positive impact in our community and beyond.
            </p>
            <img 
                src="./images/Image5.jpg" // Replace with your image path
                alt="Description of About Image 5"
                className="about-image"
            />
            <img 
                src="./images/Image10.jpg" // Replace with your image path
                alt="Description of About Image 2"
                className="about-image"
            />
        </div>
    );
};

export default AboutPage;