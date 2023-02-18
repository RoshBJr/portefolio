import { useState, useEffect } from 'react';
import './App.scss';
import Loading from './Loading';
import Main from './Main';

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500)
  }, []);

  return (
    <div className="App">
      {loading ? (<Loading/>) : (<Main/>) }
    </div>
  );
}

export default App;
