import QueryGet from "./query/QueryGet"
import { ThemeProvider } from './Context-theme/ContextTheme';
import Navbar from "./pages/Navbar";
// import ModeToggle from "./Context-theme/ModeToggle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";


function App() {


  return (
    <>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<QueryGet />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <ModeToggle /> */}
      </ThemeProvider>
    </BrowserRouter>    
    </>
  )
}

export default App
