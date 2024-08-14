import mongoose from 'mongoose';

// Define the schema for fixed data
const FixedDataSchema = new mongoose.Schema({
    id: Number,
    page_title: String,
    number: String,
    verified_reviews: String,
    academic_review: String,
    faculty_review: String,
    infrastructure_review: String,
    social_life_review: String,
    placement_review: String,
});

const ReviewsDataSchema = new mongoose.Schema({
    title: String,
    title_link: String,
    rating: String,
    helpful_or_not: String,
    likes: [String],
    dislikes: [String],
});

// Create models based on the schemas
const FixedData = mongoose.model.FixedData || mongoose.model('FixedData', FixedDataSchema);
const ReviewsDataa =mongoose.model.ReviewsData || mongoose.model('ReviewsData', ReviewsDataSchema);

// Export models
export default {
    FixedData,
    ReviewsDataa,
};
