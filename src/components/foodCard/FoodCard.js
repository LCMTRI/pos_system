import React, { useContext, useEffect, useRef, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './FoodCard.css';

function FoodCard({name, price, from, isBestSeller}) {
    var [num, setNum] = useState(0)
    
    const { orderState, orderDispatch } = useContext(OrderContext);
    const bodyRef = useRef(null)

    useEffect(() => {
        
        if (num > 0 && !bodyRef.current.classList.contains("transform-background")) {
            bodyRef.current.classList.toggle("transform-background")
            bodyRef.current.classList.toggle("transform-text-and-icon")
        } else if (num <= 0 && bodyRef.current.classList.contains("transform-background"))  {
            bodyRef.current.classList.toggle("transform-background")
            bodyRef.current.classList.toggle("transform-text-and-icon")
        }
    }, [num])

    useEffect (() => {
        if (orderState.data.findIndex(v => v.name === name) === -1) {
            num = 0
            setNum(0)
        }
        
    }, [orderState.data.findIndex(v => v.name === name)])
     

    const handleIns = () => {
        setNum(++num)
        if (num === 1) 
            orderDispatch({type: 'ADD', payload: {name: name, no: num, price: price}})
        else 
            orderDispatch({type: 'INS', payload: {name: name, no: num, price: price}})


    }

    const handleDes = () => {
        setNum(--num)
        if (num === 0) 
            orderDispatch({type: 'DELETE', payload: {name: name}})
        else 
            orderDispatch({type: 'DES', payload: {name: name, no: num, price: price}})
    }



  return (
<div className='foodcard-container' >
    <div className='foodcard-body' ref={bodyRef}> 
        {isBestSeller ? <div class="corner-ribbon__inner">
            <div class="corner-ribbon__ribbon">-Best-seller-</div>
        </div> : null}
        <div className="process">
            <span>{from}</span>
            {/* <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span>{to}</span> */}
        </div>
        {/* <div className="best">
            <span>Best seller</span>
        </div> */}
        <div className='food-name'>
            <span>{name}</span>
        </div>
        <div className='food-price'>
            <span>{price.toLocaleString()} VNĐ</span>
        </div>
        <div className="food-num">
            <i className="fa fa-plus-square-o" aria-hidden="true" onClick={() => handleIns()}></i>
            <span>{num}</span>
            <i className="fa fa-minus-square-o" aria-hidden="true" onClick={() => !num || handleDes()}></i>
        </div>
    </div>
</div>
  )
}

export default FoodCard;
