import { React, useContext, useEffect, useState } from 'react';
import './Menuside.css';
import ItemCard from '../../components/itemCard/ItemCard';
import { OrderContext } from '../../contexts/OrderContext';

const Menuside = () => {
    const [list, setList] = useState([]);
    const { orderState, orderDispatch } = useContext(OrderContext);
    useEffect(() => {
        setList(orderState.data.map(e => <li><ItemCard name={e.name} num={e.no} amount={e.no} /></li>))
    },[orderState]);

    return (
        <div className="side-container">
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default Menuside;
