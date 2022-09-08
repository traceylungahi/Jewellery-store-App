import React from "react";
// import { NavLink } from 'react-router-dom'
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


function ProductHolder({ product, deleteProduct }) {
  const url = "http://localhost:9292/products"
  
  
  const classes=useStyles()

  
  function handleRemove(id) {
      fetch(url + "/" + id, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => deleteProduct(id));
    }
    

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {product.map((prod) => (
                        <Grid item key={prod.id} xs={10} sm={4} md={4} >
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={prod.image_url}
                                        alt="image"
                                    />
                                  <div style={{ backgroundColor: "brown" }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" color="black" component="div" className={classes.multiLine}>
                                            {prod.title}
                                        </Typography>
                                        <Typography variant="body2" color="white" className={classes.multiLine}>
                                            {prod.description}
                                        </Typography>
                                    </CardContent>
                                  </div>
                                </CardActionArea>
                                <CardActions style={{ backgroundColor: "brown" }}>
                                    <Button size="small" color="primary">
                                    ${prod.price}
                                    </Button>
                                    <Button onClick={() => alert(prod.title + 'Added to cart')} size="small" color="primary">
                                      Add to cart
                                    </Button>
                                    {/* <Button  size="small" color="primary">
                                      <NavLink to='/editdescription'>Edit</NavLink>
                                    </Button> */}
                                    <Button onClick={() => handleRemove(prod.id)} size="small" color="primary">
                                      Remove
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