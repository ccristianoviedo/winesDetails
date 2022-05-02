import React, {useState, useEffect} from 'react';
import './ItemDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getItem} from '../mocks/getItem'
import ItemDetails from './ItemDetail';

const ItemDetailContainer=()=>{
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);  

    useEffect(() => {
        setLoading(true)
        getItem().then((data) => {setItem(data)})
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))
        .finally(()=>setLoading(false))        
    },[])
    
    return(
        <>
           {loading ? (<h2>Cargando.......</h2>):item.map((item)=><ItemDetails item={item} key={item.id}/>)                      
           }      
        </>
    )
}
export default ItemDetailContainer;   