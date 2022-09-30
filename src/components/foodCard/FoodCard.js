import { useState } from "react";
import "./FoodCard.css"
function FoodCard({name, price, from, to}) {

    var [num, setNum] = useState(0)





  return (
    <div className='card-container' >
        <div className='card-body'> 
            <div className="process">
                <span>{from}</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span>{to}</span>
            </div>
            <div className='food-name'>
                <span>{name}</span>
            </div>
            <div className='food-price'>
                <span>${price}</span>
            </div>
            <div className="food-num">
                <i className="fa fa-plus-square-o" aria-hidden="true" onClick={() => setNum(++num)}></i>
                <span>{num}</span>
                <i className="fa fa-minus-square-o" aria-hidden="true" onClick={() => setNum(--num)}></i>
            </div>
        </div>
         
    </div>
  )
}

export default FoodCard;