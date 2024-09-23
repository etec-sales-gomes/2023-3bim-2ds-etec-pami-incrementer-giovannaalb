import './App.css';
import { useState } from 'react';
import ButtonIncrement from './components/ButtonIncrement';
import ButtonDecrement from './components/ButtonDecrement';
import Value from './components/Value';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='content'>
      <ButtonIncrement count={count} setCount={setCount} />
      <Value count={count} />
      <ButtonDecrement count={count} setCount={setCount} />
    </div>
  );
}

export default App;
