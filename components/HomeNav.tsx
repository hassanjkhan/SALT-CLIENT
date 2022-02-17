import { Stack, StackProps, Link as StyledLink, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import React from 'react';
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
          <Link key={item.path} href={item.path} passHref>
            <StyledLink
              variant='body2'
              underline='none'
              color='white'
              className={classes.link}
              align={props.direction === 'column' ? 'center' : 'left'}
              onClick={() => onClick?.()}
            >
              {item.label}
            </StyledLink>
          </Link>
        ))}
      </Stack>
    </div>
  );
};

export default HomeNav;
