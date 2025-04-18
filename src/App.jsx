import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import ItemDetailPage from './ItemDetailPage'


const App = () => {
  const [data, setData] = useState(null);
  const url = 'http://localhost:3000';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Inicio</Link>
        </nav>
        {data === null 
        ? (<div>Cargando...</div>) 
        : 
          <Routes>
            <Route path='/' element={<Home data={data}/>} />
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item}/>} />
            ))}
          </Routes>
        }
      </div>
    </Router>     
  )
};

export default App;
