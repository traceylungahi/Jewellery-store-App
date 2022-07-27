import React from "react";
import Card from '@mui/material/Card';
import { makeStyles } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
}}))


function ProductHolder({ product }) {
  const classes=useStyles()

    console.log(product)
    return (
        <div>

            <Container>
                <Grid container spacing={3}>
                    {product.map((prod) => (
                        <Grid item key={prod.id} xs={12} sm={6} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={prod.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {prod.title}
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary" className={classes.multiLineEllipsis}>
                                            {prod.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
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