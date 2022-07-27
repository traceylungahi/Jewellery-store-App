import React from "react";
import Card from '@mui/material/Card';
import { makeStyles } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  multiLine: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
}}))


function ProductHolder({ product }) {
  const classes=useStyles()
  
    // console.log(product)
    
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {product.map((prod) => (
                        <Grid item key={prod.id} xs={10} sm={4} md={4}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={prod.image}
                                        alt="image"
                                    />
                                  <div style={{ backgroundColor: "bisque" }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" color="black" component="div">
                                            {prod.title}
                                        </Typography>
                                        <Typography variant="body2" color="grey" className={classes.multiLine}>
                                            {prod.description}
                                        </Typography>
                                    </CardContent>
                                  </div>
                                </CardActionArea>
                                <CardActions style={{ backgroundColor: "bisque" }}>
                                    <Button size="small" color="primary">
                                        Add to cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>

      )
}
 export default ProductHolder;