import { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header';
import Loading from './Loading';
import Main from './Main';
import MenuContainer from './MenuContainer';

function App() {
  const [loading,setLoading] = useState(false);
  const [animBurger, setBurgerState] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500)
  }, []);

  return (
    <div className="App">
      <MenuContainer animBurger={animBurger} setAnimBurger={setBurgerState} />
      {loading ? (<Loading/>) :(<Main animBurger={animBurger} setAnimBurger={setBurgerState}/>)}
    </div>
  );
}

export default App;
