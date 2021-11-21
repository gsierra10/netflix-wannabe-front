import RegisterPage from "./containers/RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./containers/LoginPage/LoginPage";
import HomePage from "./containers/HomePage/HomePage";
import MoviePage from "./containers/MoviePage/MoviePage";
import './index.scss'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/" element={<MoviePage/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
