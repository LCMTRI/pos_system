
import './App.css';
//import Card from './components/card/Card'
import FoodCard from './components/foodCard/FoodCard';
//import FAIcon from './components/icon/FontAwesomeIcon';

function App() {
    return (
        <div className="App">
            <FoodCard name="Drinks" price="15.5" from="Orders" to="Kitchen"/>
        </div>
    );
}

export default App;
