import React, { useState } from 'react';
import { TextField, Button, Stack, CardActions } from '@mui/material';

function MovieForm({ onSubmit, initialData = {}, onCancel }) {
  initialData = initialData || {}; // Extra safety
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [releaseYear, setReleaseYear] = useState(initialData.releaseYear || '');
  const [genre, setGenre] = useState(initialData.genre || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, releaseYear, genre });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <TextField
          label="Release Year"
          type="number"
          value={releaseYear}
          onChange={e => setReleaseYear(e.target.value)}
        />
        <TextField
          label="Description"
          multiline
          minRows={2}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <CardActions>
          <Button type="submit" variant="contained" color="primary">
            {initialData._id ? 'Update' : 'Add'} Movie
          </Button>
          {onCancel && <Button onClick={onCancel} color="secondary">Cancel</Button>}
        </CardActions>
      </Stack>
    </form>
  );
}

export default MovieForm; 