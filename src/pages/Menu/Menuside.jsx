import { React, useContext, useEffect, useState } from 'react';
import './Menuside.css';
import ItemCard from '../../components/itemCard/ItemCard';
import Receipt from '../../components/receipt/Receipt';
import { OrderContext } from '../../contexts/OrderContext';

const Menuside = () => {
    const [list, setList] = useState([]);
    const { orderState, orderDispatch } = useContext(OrderContext);
    useEffect(() => {
        // setList(orderState.data.map(e => <li><ItemCard name={e.name} num={e.no} amount={e.no} /></li>))
        setList(orderState.data);
    },[orderState]);

    return (
        <div className="side-container">
            <ul>
                {list.map(e => <li><ItemCard name={e.name} price={e.price} amount={e.no} /></li>)}
                {console.log(list)}
            </ul>
            <Receipt total={list.length === 0 ? 0 : list.reduce((a,v) => a = a + (v.price * v.no), 0)} />
        </div>
    );
}

export default Menuside;
