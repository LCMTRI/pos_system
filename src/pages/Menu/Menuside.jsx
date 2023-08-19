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
				console.log("what is list: ", list)
    },[orderState.data]);

    return (
        <div className="side-container">
            <ul>
                {list.map(e => <li key={e.name}><ItemCard name={e.name} price={e.price} amount={e.no} discount={e.discount} /></li>)}
            </ul>
            <Receipt total={list.length === 0 ? 0 : list.reduce((a,v) => a = v.discount ? a + (v.price * (1 - v.discount / 100) * v.no) : a + (v.price * v.no), 0)} list={list} />
        </div>
    );
}

export default Menuside;
