import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const url = "http://localhost:8080/api/item?id=1";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Dashboard() {

  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const [itemData, setItemData] = useState({});
  const getItemInfoAxios = async () => {

    return axios({
      method: 'get',
      url: url,  
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      console.log("holaaa");
      setItemData(response.data);
    })
  }

  useEffect(() => {
    getItemInfoAxios();
  }, []);

  return (
    
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Item:
        </Typography>
        <Typography variant="h5" component="h2">
          {itemData.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>s
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  );
}
