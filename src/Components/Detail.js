/* eslint-disable */
import React, {useContext} from 'react';
import {useParams} from 'react-router-dom'
import { AppContext } from '../Context/CartContext'
import DB from '../DB/db.json';
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from '@material-ui/core/Box';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: {  width:'30vw', height: '55vh',
          flexGrow: 1,'& > *': 
            { margin: theme.spacing(1)},
                 palette: 
                       {primary: 
          { 
          main: purple[500]}, 
          secondary: {main: green[500]} 
          }
    },
    media: {
      height: 140,
    }}));


function Detail () {
  const classes = useStyles();
  const [cart, _,  __, addToCart, removeFromCart] = useContext(AppContext)
  let history = useHistory(); 
  const db = DB;  
  let {id} = useParams()
  const bakery = db[id];




return (

<>
    <div>
      <div className=".detail-div">
          <div className="detail-wrapper">
            <div className="detail-header">
            </div>
          </div>
            <div>
              <h1>{bakery.name}</h1>
              <p>{bakery.Description}</p>
        </div>
      </div>
    </div>

  
   

      <Box mx={10} mt={12}>
      <Grid container spacing={4}>
      {bakery && bakery.Products.map(product => (
        <Grid item xs={6}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require('../public/cafedavignon.jpeg')}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.ProductName}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {product.ProductPrice}$
              </Typography>
            </CardContent>
          </CardActionArea>
          <Typography variant="body2" color="textSecondary" component="p">
                {product.ProductDescription}
          </Typography>
          <CardActions>
            <Button onClick={() => addToCart(product)}size="small" color="primary">
              +
            </Button>
            <Button  onClick={() => removeFromCart(product)} size="small" color="primary">
              -
            </Button>
            <Button size="small" color="primary">
              {cart.ProductPrice}$
            </Button>
            
          </CardActions>
        </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  </>
  )
}

export default Detail;