import { useState } from 'react'
import Calculador from './components/Calculador';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Calculador/>
    </>
  );
}

export default App;
