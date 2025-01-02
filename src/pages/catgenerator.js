import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function CatGenerator() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateCat = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const [data] = await response.json();
      setCatImage(data.url);
    } catch (error) {
      console.error('Error fetching cat:', error);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Random Cat Generator
        </Typography>
        
        <Button 
          variant="contained" 
          onClick={generateCat} 
          sx={{ mb: 4 }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Generate New Cat'}
        </Button>

        <Card sx={{ maxWidth: '100%' }}>
          <CardContent>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            ) : catImage ? (
              <CardMedia
                component="img"
                image={catImage}
                alt="Random cat"
                sx={{ maxHeight: 400, objectFit: 'contain' }}
              />
            ) : (
              <Typography variant="body1">
                Click the button to generate a cat!
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
