import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import serviceImagebyIndex from './serviceImageByIndex';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css';

const MediaCard = (props) => {
  const { slides } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.item}>
      <img
        src={serviceImagebyIndex(slides.id)}
        alt="green iguana"
        className={styles.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {slides.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {slides.desc}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default MediaCard;
