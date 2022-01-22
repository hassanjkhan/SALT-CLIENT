import { Instagram, Twitter } from '@mui/icons-material';
import { IconButton, Stack, StackProps, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import config from '../config/config';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    transition: 'ease 200ms',

    '& svg': {
      fill: 'white',
      transition: 'ease 200ms',
    },

    '&:hover': {
      color: theme.palette.primary.main,

      '& svg': {
        fill: theme.palette.primary.main,
      },
    },
  },
}));

const SocialLinks: React.FC<StackProps> = (props) => {
  const classes = useStyles();

  return (
    <Stack direction='row' spacing={1} {...props}>
      <IconButton
        className={classes.button}
        component='a'
        href={config.discord}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 50 50'
          width='24px'
          height='24px'
        >
          <path d='M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z' />
        </svg>
      </IconButton>
      <IconButton
        className={classes.button}
        component='a'
        href={config.twitter}
      >
        <Twitter />
      </IconButton>
      <IconButton
        className={classes.button}
        component='a'
        href={config.instagram}
      >
        <Instagram />
      </IconButton>
    </Stack>
  );
};

export default SocialLinks;
