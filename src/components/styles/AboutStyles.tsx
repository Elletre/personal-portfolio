import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const AboutStyles = makeStyles((theme: Theme) =>
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
      fontSize: '4rem',
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
      margin: `${theme.spacing(2)}px 0`,
      textAlign: 'center',
      letterSpacing: '0.03em',
    },
    text: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      fontSize: '1.1rem',
      lineHeight: 1.6,
      textAlign: 'justify',
      maxWidth: '700px',
      margin: `${theme.spacing(2)}px 0`,
      padding: `0 ${theme.spacing(2)}px`,
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.3rem',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
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
  })
);

export type AboutClasses = ReturnType<typeof AboutStyles>;

export default AboutStyles;
