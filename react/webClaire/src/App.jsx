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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Ilustration
            image="/img/img_5.jpg"
            caption="let’s dance"
            id="1"
            />
          <Ilustration 
            image="/img/img_10.jpg"
            caption="sunday reality"
            id="10"
            />
          <Ilustration 
            image="/img/img_23.jpg"
            caption="it’s not my fucking birthday"
            id="10"
            />
        </div>
      </main>
    </div>
  </>
  );
}

export default App;
