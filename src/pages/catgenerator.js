import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { keyframes } from '@mui/system'; // Import keyframes for animations

// Define keyframes for animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
          sx={{ mb: 4, animation: `${bounce} 2s infinite` }} // Apply bounce animation to button
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
                sx={{ maxHeight: 400, objectFit: 'contain', animation: `${fadeIn} 1s ease-in` }} // Apply fadeIn animation to image
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
