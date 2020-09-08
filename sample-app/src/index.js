import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Demo from './demo';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));


/*
function App() {

  const classes = useStyles();

  return (

    <Container maxWidth="sm">
    <Box color="text.primary">
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </Box>
    </Container> 

  );
}
*/

ReactDOM.render(
    <Demo />,
    document.querySelector('#contents')  
);

