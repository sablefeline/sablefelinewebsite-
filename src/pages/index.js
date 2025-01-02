import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
export default function Home() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Meet Niko
        </Typography>
        <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
          <CardContent>
            <Typography variant="body1" style={{color: 'purple'}}>
              Niko is A CAT WHO LOVES TO SLEEP AND EAT. THEY ARE A VERY LAZY CAT WHO LOVES EATING PANCAKES
            
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Image alt='noik' src="/renesme.jpg" width={300} height={200}></Image> 
                </Grid>
                <Grid item xs={6}>
                    <Image alt='tewa i guess' src="/tewa_squish.png"  width={150} height={200}></Image> 
                    <Typography variant="body2" style={{color: 'purple'}}>gay ^</Typography>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" href="https://youtu.be/cAcI_DQZpj0?si=LrNFnykvqpTCfp5d">Cat button</Button>
            <Slider />
            <Typography variant="body2" sx={{background: "radial-gradient(circle, rgba(0,99,255,1) 0%, rgba(0,99,255,1) 44%, rgba(0,0,0,1) 100%)", borderRadius:"50px", color:"white", padding:"10px"}}>Cattest slider</Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
        caption text
      </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
