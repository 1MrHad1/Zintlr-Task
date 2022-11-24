import './App.css';
import Category from './components/Category';
import Header from './components/Header';

import Card from './components/Card';
import InfoBox from './components/InfoBox';
import Modal from './components/Modal';



function App() {

  
  return (
    <div className='news'>
      <div>
      <Header/>
      <Card/>
      <Category/>
      <Modal/>
      <InfoBox/>
      
    </div>
    </div>
  );
}

export default App;
