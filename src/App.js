import RegisterPage from "./containers/RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./containers/LoginPage/LoginPage";
import HomePage from "./containers/HomePage/HomePage";
import './index.scss'
import SearchMovies from "./components/SearchMovies/SearchMovies";
import MainPage from "./containers/MainPAge/MainPage";
import AdminPage from "./containers/AdminPage/AdminPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/movies" element={<SearchMovies />}/>
          <Route path="/home" element={<MainPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
