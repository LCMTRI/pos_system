import React from 'react';
import './Menuside.css';
import ItemCard from '../../components/itemCard/ItemCard';

const Menuside = () => {

    return (
        <div className="side-container">
            <ul>
                <li><ItemCard message={"lmao toi o dau?"} num={1} /></li>
                <li><ItemCard message={"ko biet nua..."} num={2} /></li>
                <li><ItemCard message={"thoi thoi ong cut me ong di"} num={3} /></li>
                <li><ItemCard message={"oke ck nha~"} num={4} /></li>
            </ul>
        </div>
    );
}

export default Menuside;
