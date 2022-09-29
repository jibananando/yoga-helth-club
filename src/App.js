import './App.css';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


function App() {
  const [timeData, setTimeData] = useState(0);
  const clickBtn = (time) => {
    console.log("click");
    setTimeData(timeData + time);
  }
  return (
    <div>
      <Header clickBtn={clickBtn}></Header>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
