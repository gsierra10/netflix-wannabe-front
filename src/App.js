import RegisterPage from "./containers/RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./containers/LoginPage/LoginPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
