import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });


  return (
    <div className='App'>
       <ToastContainer />
       <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/coin/:id" element={<CoinPage/>} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
      
    </div>
  )
}

export default App
