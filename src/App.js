
import './App.css';
import Card from './components/card/Card'
import FAIcon from './components/icon/FontAwesomeIcon';

function App() {
    return (
        <div className="App">
            <Card name="Drinks" amount="5" backgroundColor="yellow" icon={<FAIcon name={"fa fa-beer"}></FAIcon>}/>
            <Card name="Drinks" amount="5" backgroundColor="violet" icon={<FAIcon name={"fa fa-beer"}></FAIcon>}/>
        </div>
    );
}

export default App;
