import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-732x549-thumbnail.jpg"
        title="Green lizard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Lizard
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut
          repudiandae iusto autem. Unde mollitia suscipit impedit quos dolores
          sed qui quod, incidunt ab ex voluptates ad. Vero, dignissimos
          consectetur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  );
};

export default MuiCard;
