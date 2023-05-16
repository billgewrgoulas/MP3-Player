import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage, { RegisterAction } from './pages/Register';
import HomePage from './pages/Home';
import './App.module.css';
import Dashboard from './components/Dashboard';
import MusicList from './components/MusicList';
import Artists from './components/Artists';
import Albums from './components/Albums';

const router = createBrowserRouter([
  {path: '/login', element: <LoginPage />},
  {path: '/register', element: <RegisterPage />, action: RegisterAction},
  {path: '', element: <HomePage />, children: [
    {path: '/', element: <Dashboard />, children: [
      {path: '/songs', element: <MusicList />},
      {path: '/songs/artists', element: <Artists />},
      {path: '/songs/albums', element: <Albums />},
    ]}
  ]}
]);

function App() {
  return (<RouterProvider router={router}/>);
}

export default App;
