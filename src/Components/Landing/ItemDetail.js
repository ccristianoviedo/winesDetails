import React from 'react';
import ItemCount from './ItemCount';

const ItemDetails=({item})=>{
    return (
        <div className='item'>
            <div className='imgItem'>
                <img src={item.img} alt={item.name} className='imgUrl'/>
            </div>
            <div className='itemText'>     
                <p>BODEGA: {item.name}</p>
                <p>DESCRIPCION:  {item.descripcion}</p>
                <p>COSECHA: {item.cosecha}</p>
                <p>VARIEDAD: {item.variedad}</p>
                <p>CRIANZA: {item.crianza}</p>
                <p>SUGERENCIA: {item.sugerencia}</p>
                <p>STOCK: {item.stock}</p>
                <ItemCount stock={item.stock} initial={1}/>
            </div>   
        </div>
    ) 
}
export default ItemDetails;
