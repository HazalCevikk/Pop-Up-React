import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={toggle}
    />
    {isOpen && <Popup
      content={<> 
      {/* Kendi HTML kodlarımızı buraya yapıştıracağız. Html içeriği popupa prop olarak geçilmiştir. Popupın toggle yapısı ise usestate hooku kullanılarak oluşturulmuştur. Css de değişiklik yapmak istersen app.css dosyasındaki classlara göre yapabilirsin. */}
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={toggle}
    />}
  </div>
  );
}


export default App;
