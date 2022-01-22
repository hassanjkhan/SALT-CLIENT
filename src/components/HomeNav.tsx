import { Stack, StackProps, Link as StyledLink, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import config from '../config/config';

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: '0.5rem',
    transition: '200ms',

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

interface Props extends StackProps {
  onClick?: () => any;
}

const HomeNav: React.FC<Props> = (props) => {
  const { onClick, ...rest } = props;
  const classes = useStyles();

  return (
    <div style={{ margin: '-0.5rem', ...props.style }}>
      <Stack direction='row' spacing={1} {...rest}>
        {config.homeMenuItems.map((item) => (
          <StyledLink
            key={item.path}
            variant='body2'
            underline='none'
            color='white'
            className={classes.link}
            to={item.path}
            component={item.hashLink ? HashLink : Link}
            align={props.direction === 'column' ? 'center' : 'left'}
            onClick={() => onClick?.()}
          >
            {item.label}
          </StyledLink>
        ))}
      </Stack>
    </div>
  );
};

export default HomeNav;
