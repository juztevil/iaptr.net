import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Dummy from "./Pages/Dummy";

function App(){
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dummy" element={<Dummy/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;