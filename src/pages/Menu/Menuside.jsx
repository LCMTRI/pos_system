import { React, useState } from 'react';
import './Menuside.css';
import ItemCard from '../../components/itemCard/ItemCard';

const Menuside = () => {
    const [list, setList] = useState([]);
    return (
        <div className="side-container">
            <ul>
                <li><ItemCard name={"Coffee 1"} num={1} amount={1} /></li>
                <li><ItemCard name={"Breakfast 4"} num={2} amount={3} /></li>
                <li><ItemCard name={"Milk tea 3"} num={3} amount={2} /></li>
            </ul>
        </div>
    );
}

export default Menuside;
