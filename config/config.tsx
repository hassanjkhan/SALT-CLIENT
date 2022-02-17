import { Typography } from '@mui/material';

const config = {
  discord: '',
  instagram: '',
  twitter: '',
  homeMenuItems: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/#about', hashLink: true },
    { label: 'Countdown', path: '/#countdown', hashLink: true },
    { label: 'Roadmap', path: '/#roadmap', hashLink: true },
    { label: 'FAQ', path: '/#faq', hashLink: true },
    { label: 'Team', path: '/#team', hashLink: true },
  ],
  logo: <Typography style={{ fontSize: '1.5rem' }}>LOGO</Typography>,
};

export default config;
