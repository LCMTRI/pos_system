import './Card.css';

function Card({name, amount, backgroundColor, icon}) {


    const styles = {
        background: {
            backgroundColor: backgroundColor,
        },
    };
  return (
    <div className='card-container' >
        <div className='card-body' style={styles.background}> 
            {icon}
            <div className='category-name'>
                <span>{name}</span>
            </div>
            <div className='category-amount'>
                <span>{amount} items</span>
            </div>
        </div>
    </div>
  )
}

export default Card;
