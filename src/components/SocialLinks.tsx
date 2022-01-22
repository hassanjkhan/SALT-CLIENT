import { Instagram, Twitter } from '@mui/icons-material';
import { IconButton, Stack, StackProps, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import config from '../config/config';
import DiscordIcon from './DiscordIcon';

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
        <DiscordIcon />
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
