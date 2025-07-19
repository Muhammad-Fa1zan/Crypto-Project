import QueryGet from "./query/QueryGet"
import { ThemeProvider } from './Context-theme/ContextTheme';
import Navbar from "./pages/Navbar";
// import ModeToggle from "./Context-theme/ModeToggle";


function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <QueryGet />
        {/* <ModeToggle /> */}
      </ThemeProvider>
    </>
  )
}

export default App
