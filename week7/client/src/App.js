import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  List,
  ListItem,
  Card,
  CardContent,
  CardActions,
  Snackbar,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMovie, setEditingMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const fetchMovies = () => {
    setLoading(true);
    axios.get(`${API_URL}/api/movies`).then(res => {
      setMovies(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAdd = () => {
    setEditingMovie(null);
    setShowForm(true);
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this movie?')) {
      axios.delete(`${API_URL}/api/movies/${id}`).then(() => {
        fetchMovies();
        setSnackbar({ open: true, message: 'Movie deleted' });
      });
    }
  };

  const handleFormSubmit = (data) => {
    if (editingMovie) {
      axios.put(`${API_URL}/api/movies/${editingMovie._id}`, data).then(() => {
        setShowForm(false);
        setEditingMovie(null);
        fetchMovies();
        setSnackbar({ open: true, message: 'Movie updated' });
      });
    } else {
      axios.post(`${API_URL}/api/movies`, data).then(() => {
        setShowForm(false);
        fetchMovies();
        setSnackbar({ open: true, message: 'Movie added' });
      });
    }
  };

  // Filter movies by title or genre
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    (movie.genre && movie.genre.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Movie Catalog
          </Typography>
          <Button color="inherit" startIcon={<AddIcon />} onClick={handleAdd}>
            Add Movie
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Search by title or genre"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ mb: 3 }}
        />
        {showForm && (
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <MovieForm
                onSubmit={handleFormSubmit}
                initialData={editingMovie || {}}
                onCancel={() => { setShowForm(false); setEditingMovie(null); }}
              />
            </CardContent>
          </Card>
        )}
        {loading ? <Typography>Loading...</Typography> : (
          <List>
            {filteredMovies.map(movie => (
              <ListItem key={movie._id} disableGutters sx={{ mb: 2 }}>
                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Typography variant="h6">{movie.title} ({movie.releaseYear})</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{movie.genre}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{movie.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<EditIcon />} onClick={() => handleEdit(movie)}>
                      Edit
                    </Button>
                    <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(movie._id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </ListItem>
            ))}
          </List>
        )}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ open: false, message: '' })}
          message={snackbar.message}
          action={
            <IconButton size="small" color="inherit" onClick={() => setSnackbar({ open: false, message: '' })}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Container>
    </>
  );
}

export default App; 