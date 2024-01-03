import { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header';
import Loading from './Loading';
import Main from './Main';
import MenuContainer from './MenuContainer';
import doIt from '../code/typing-effect';

function App() {
  const [loading,setLoading] = useState(false);
  const [animBurger, setBurgerState] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=> doIt(), 5000);
    setTimeout(() => {
      setLoading(false);
    }, 4500)
  }, []);

  return (
    <div className="App">
      <div className="pattern"></div>
      <MenuContainer animBurger={animBurger} setAnimBurger={setBurgerState} />
      {loading ? (<Loading/>) :(<Main animBurger={animBurger} setAnimBurger={setBurgerState}/>)}
      {/* <Main animBurger={animBurger} setAnimBurger={setBurgerState}/> */}
    </div>
  );
}

export default App;
