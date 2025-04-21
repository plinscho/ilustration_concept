import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ilustration from './Ilustration'
import Header from './headers'
import RetroPhoto from './RetroPhoto';

import './App.css'
import DynamicHeader from './headers'

function App() {
  return (
    <>
      <Header />
      <br></br><br></br><br></br>
      <Ilustration 
        image="/img/img_5.jpg"
        caption="let’s dance"
        id="1"
      />
    </>
  );
};

export default App;
