import { useState } from "react";

function FoodCard({name, price, from, to}) {

    const [num, setNum] = useState(0)

    const styles = {
        background: {
            backgroundColor: backgroundColor,
        },
    };



  return (
    <div className='card-container' >
        <div className='card-body' style={styles.background}> 
            <div></div>
            <div>
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
            <div>
                <button><i className="fa fa-plus-square-o" aria-hidden="true" onClick={() => setNum(++num)}></i></button>
                <span>{num}</span>
                <button><i className="fa fa-minus-square-o" aria-hidden="true" onClick={() => setNum(--num)}></i></button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard;