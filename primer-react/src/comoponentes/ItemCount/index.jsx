import './itemCount.css';
import React,{ useState } from 'react';

export const ItemCount = () => {
    const  [count, setCount ] = useState(1);
   
    const decrease = () => {
    setCount (count - 1);
   }

   const increase = () => {
    setCount (count + 1);
   }
    return (
        <div className='counter'>
            <button onClick={decrease} >-</button>
            <span> {count} </span>
            <button onClick={increase} >+</button>
            <div>
                <button> Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;