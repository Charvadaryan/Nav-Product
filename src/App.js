import React,{useState} from 'react';
import './App.css';
import Product from './components/products/products';
import Card from './components/card/Card';
import Navigation from './components/Navigation/Navigation'


function App() {

  const [tab, setTab] = useState({tab: 'Product'})
  const [selected, setSelected] = useState([])

  const changeTab = (tab) => {
    setTab({tab: tab})
  }

  const addCard = (item) => {
    setSelected([...selected, item]) 
  }

  const removeCard = (id) => {
    setSelected([...selected].filter(item => item.id !== id))
  }
  
  
  return (
    <div className="App">
      <Navigation count={selected} changeTab={changeTab} />
      {/* <button onClick={() => setTab(true)}>Product</button>
      <button onClick={() => setTab(false)}>Cart</button> */}
      {/* {tab ? <Product/> : <Cart/>} */}
      {(tab.tab === "Product") ? <Product addCard={addCard} /> : <Card removeCard={removeCard} selected={selected}/>}
    </div>
  );
}

export default App;
