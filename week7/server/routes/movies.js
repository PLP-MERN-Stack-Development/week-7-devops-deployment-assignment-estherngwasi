import express from 'express';
import Movie from '../models/Movie.js';

const router = express.Router();

// GET /api/movies - list all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err); // Log error
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/movies - add a movie
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    console.error('Error adding movie:', err); // Log error
    res.status(400).json({ error: 'Invalid data' });
  }
});

// PUT /api/movies/:id - edit a movie
router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    console.error('Error editing movie:', err); // Log error
    res.status(400).json({ error: 'Invalid data' });
  }
});

// DELETE /api/movies/:id - delete a movie
router.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    console.error('Error deleting movie:', err); // Log error
    res.status(400).json({ error: 'Invalid request' });
  }
});

export default router; 