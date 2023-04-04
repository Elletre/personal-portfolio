import { createStyles, makeStyles } from '@material-ui/core/styles';

const HomeStyles = () =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#222',
      color: '#fff',
    },
    heading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '6rem',
      margin: 0,
      lineHeight: 1.2,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '-.04em',
    },
    subheading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      fontSize: '1.8rem',
      margin: '16px 0',
      textAlign: 'center',
      letterSpacing: '0.03em',
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.3rem',
      padding: '16px 24px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#1976d2',
      color: '#fff',
      transition: 'background-color 0.2s ease, color 0.2s ease',
      '&:hover': {
        backgroundColor: '#003c8f',
      },
    },
  });

export const useHomeStyles = makeStyles(HomeStyles);
