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
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import ButtonGroup from '@material-ui/core/ButtonGroup';





const useStyles = makeStyles((theme) => ({
  root: {  height: '5vh',
          flexGrow: 1,'& > *': 
            { margin: theme.spacing(1)},
                 palette: 
                       {primary: 
          { 
          main: purple[500]}, 
          secondary: {main: green[500]} 
          }
    }}));


  


function Detail () {
  const classes = useStyles();

  const [cart, _,  __, addToCart, remove] = useContext(AppContext)
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

  
   

      <Box mx={10}>
      <Grid container spacing={7}>
      {bakery && bakery.Products.map(product => (
        <Grid item xs={6}>
          <Card className={"MuiElevatedCard--01"}>
          <div className="product-image-detail">

          </div>
            <CardHeader
              className={"MuiCardHeader-root"}
              title={product.ProductName}
              subheader={product.ProductDescription}
              classes={{
                title: "MuiCardHeader-title",
                subheader: "MuiCardHeader-subheader"
              }}
            />
            <CardContent className={"MuiCardContent-root"}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <Grid container>
                    <Grid container justify="space-evenly">
                      <label>{product.price}</label>
                    </Grid>
                  </Grid>
                  <Divider light />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <Grid container>
                    <Grid container justify="space-evenly">
                    <div  className="product-image-detail">
                    <div className={classes.root}>
                          <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical outlined primary button group"
                            size="small"
                            variant='text'
                          >
                              <Button>+</Button>
                              <Button>-</Button>
                            </ButtonGroup>
                          </div>  
                          </div>
                    </Grid>
                  </Grid>
                  <Divider light />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  </>
)
}

export default Detail;

{/* <h1> Id {id} </h1>
{item && <p>Bakery Name: {item.name}</p>}

// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(data => setItem(data))
// }, [])

// const cartItems = cart.map((el) => (
    //   <div key={el.id}>
    //     {`${el.name}: $${el.price}`}
    //     <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    //   </div>
    // ));

    <button onClick={addToCart}>Add</button> */}

  
    
