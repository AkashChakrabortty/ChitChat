import './App.css';
import route  from './route/route';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="">
       <RouterProvider router={route} />
    </div>
  );
}

export default App;
