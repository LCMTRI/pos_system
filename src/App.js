import React from 'react';
import './App.css';
import FoodCard from './components/foodCard/FoodCard';
import Card from './components/card/Card'
import FAIcon from './components/icon/FontAwesomeIcon';

const App = () => {
  
  return (
    <>
    <Card name="Drinks" amount="5" backgroundColor="blue" icon={<FAIcon name="fa fa-beer"></FAIcon>}></Card>
    <FoodCard name="Ale" price="15" from="XXX" to="YYY"></FoodCard>
    </>
  );
};

export default App;