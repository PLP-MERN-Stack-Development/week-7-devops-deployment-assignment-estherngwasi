import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseYear: Number,
  genre: String,
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie; 