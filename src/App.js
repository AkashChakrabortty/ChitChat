import './App.css';
import route  from './route/route';
import { RouterProvider } from 'react-router-dom';
import store from './app/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <div className='h-screen bg-base-200'>
      <Provider store={store}>
      <RouterProvider router={route} />
      </Provider>
    </div>
  );
}

export default App;
