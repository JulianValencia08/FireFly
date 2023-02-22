import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';

import Main from './pages/main';
import Login from './pages/login'
import SignUp from './pages/signup'
import NotFound from './pages/notFound';;


let theme = createTheme({
  typography: {
    fontFamily: 'Minecraft',
    h1: {
      fontFamily: 'Minecrafter',
      fontSize: "60px",
    },
    h2: {
      fontFamily: 'Minecrafter',
      fontSize: "40px",
    },
    h3: {
      fontFamily: 'Minecrafter',
      fontSize: "20px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundSize: "128px 55px",
          height: "55px",
          width: "128px",
          fontFamily: "Minecraft",
          fontSize: "16px",
          border: "black",
          textShadow: "none",
          textDecoration: 'none',
          color: "black",
          '&:hover': {
            MozBoxShadow: "0 0 15px #ccc",
            WebkitBoxShadow: "0 0 15px #ccc",
            boxShadow: "0 0 15px #ccc",
          }
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);


function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="login" element={<div className="grass"><Login /></div>} />
          <Route path="signup" element={<div className="grass"><SignUp /></div>} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
