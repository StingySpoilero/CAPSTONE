// src/pages/ReviewPage.jsx
import React, { useEffect, useState } from 'react';
import { getReviews, createReview } from './api.mjs'; // Adjust the import path as needed

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            const reviewsData = await getReviews();
            setReviews(reviewsData);
        };

        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { author, content };
        const createdReview = await createReview(newReview);
        setReviews([...reviews, createdReview]);
        resetForm();
    };

    const resetForm = () => {
        setAuthor('');
        setContent('');
    };

    return (
        <div>
            <h2>Client Reviews</h2>
            <p>Check out these reviews from previous clients!</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Write your review here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>

            <ul>
                {reviews.map(review => (
                    <li key={review._id}>
                        <strong>{review.author}</strong>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewPage;