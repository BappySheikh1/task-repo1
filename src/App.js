import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';
import AuthProvider from './contents/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}

export default App;
