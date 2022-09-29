import './App.css';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
