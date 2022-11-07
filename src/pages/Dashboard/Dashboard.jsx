import React from 'react';
import ItemCard from '../../components/itemCard/ItemCard';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <ItemCard num="1" />
            <ItemCard num="1" />
            <ItemCard num="1" />
        </div>
    );
};

export default Dashboard;