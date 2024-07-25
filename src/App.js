import './App.css';
import Navbar from './components/Navbar';
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav';
import { useState } from 'react';
import ContextProvider from './components/countrycontext';

function App() {

  const screenConfig = useState(0);

  return (
    <div>
      <ContextProvider>
        <Navbar />
        <InfoPanel currentScreen={screenConfig[0]} />
        <FootNav screenConfig={screenConfig} />
      </ContextProvider>
    </div>
  );
}

export default App;
