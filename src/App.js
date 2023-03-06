import './App.css';
import route  from './route/route';
import { RouterProvider } from 'react-router-dom';
import store from './app/store';
import {Provider} from 'react-redux'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={route} />
      <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
