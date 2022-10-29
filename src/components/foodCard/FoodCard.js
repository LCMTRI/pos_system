import React, { useEffect, useRef, useState } from "react";
import './FoodCard.css';

function FoodCard({name, price, from, to}) {
    var [num, setNum] = useState(0)
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


  return (
<div className='foodcard-container' >
    <div className='foodcard-body' ref={bodyRef}> 
            
        {/* <div className="process">
            <span>{from}</span>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span>{to}</span>
        </div> */}
        <div className='food-name'>
            <span>{name}</span>
        </div>
        <div className='food-price'>
            <span>{price} VNĐ</span>
        </div>
        <div className="food-num">
            <i className="fa fa-plus-square-o" aria-hidden="true" onClick={() => {setNum(++num)}}></i>
            <span>{num}</span>
            <i className="fa fa-minus-square-o" aria-hidden="true" onClick={() => {num > 0 ? setNum(--num) : console.log("haha")}}></i>
        </div>
    </div>
</div>
  )
}

export default FoodCard;
