import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Hellow</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/" render={() => <Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
