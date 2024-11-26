// src/ReviewPage.jsx
import React from 'react';
import './ReviewPage.css'; // Create this CSS file for custom styles

const reviews = [
    {
        id: 1,
        name: "Jane Doe",
        review: "Excellent service! I had a great experience.",
        rating: 5,
    },
    {
        id: 2,
        name: "John Smith",
        review: "Very professional and friendly staff.",
        rating: 4,
    },
    {
        id: 3,
        name: "Emily Johnson",
        review: "I loved the ambiance and the results were amazing!",
        rating: 5,
    },
];

const ReviewPage = () => {
    return (
        <div className="review-page">
            <h2>Customer Reviews</h2>
            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-item">
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <p>Rating: {review.rating} ⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewPage;