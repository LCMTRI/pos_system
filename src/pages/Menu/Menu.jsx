import React from 'react';
import Card from '../../components/card/Card';
import Foodcard from '../../components/foodCard/FoodCard';
import FAIcom from '../../components/icon/FontAwesomeIcon';

const Menu = () => {
    return (
        <div>
            <Card name="Haha xerath go boom boom" amount={10} backgroundColor="#cfdddb" icon={<FAIcom name='fa fa-beer'></FAIcom>} />
            <br />
            <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
        </div>
    );
};

export default Menu;