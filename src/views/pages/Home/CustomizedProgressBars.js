import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 13,
    borderRadius: 6,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 500 : 700],
  },
  bar: {
    borderRadius: 6,
    backgroundColor: '#20e298',
  },
}))(LinearProgress);

// // Inspired by the former Facebook spinners.
// const useStylesFacebook = makeStyles((theme) => ({
//   root: {
//     position: 'relative',
//   },
//   bottom: {
//     color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
//   },
//   top: {
//     color: '#1a90ff',
//     animationDuration: '550ms',
//     position: 'absolute',
//     left: 0,
//   },
//   circle: {
//     strokeLinecap: 'round',
//   },
// }));

// function FacebookCircularProgress(props) {
//   const classes = useStylesFacebook();

//   return (
//     <div className={classes.root}>
//       <CircularProgress
//         variant="determinate"
//         className={classes.bottom}
//         size={40}
//         thickness={4}
//         {...props}
//         value={100}
//       />
//       <CircularProgress
//         variant="indeterminate"
//         disableShrink
//         className={classes.top}
//         classes={{
//           circle: classes.circle,
//         }}
//         size={40}
//         thickness={4}
//         {...props}
//       />
//     </div>
//   );
// }

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <FacebookCircularProgress /> */}
      {/* <br /> */}
     
      <BorderLinearProgress variant="determinate" value={1} />
      
    </div>
  );
}
