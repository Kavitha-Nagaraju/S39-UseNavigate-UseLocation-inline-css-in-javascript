import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ApplicationForm from './components/ApplicationForm';
import TopNavigation from './components/TopNavigation';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/applicationform" element={<ApplicationForm/>}></Route>
      <Route path="/topnavigation" element={<TopNavigation/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
