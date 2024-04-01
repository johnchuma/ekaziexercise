import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index path='/' element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
