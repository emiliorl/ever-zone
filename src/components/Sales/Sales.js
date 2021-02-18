import React, {useState, useEffect} from 'react';
import classes from './Sales.module.css';
import Product from '../Product/Product'
import axios from 'axios'; 

const Sales = (props) =>{
    
    /* let salesProducts = props.salesProducts.map((product, i) => {
        return <Product 
            key ={product.id}
            id ={product.id} 
            img={product.img}
            detail={product.detail}
            title={product.title}
            price={product.price}/>
    });

    return(
        <div className={classes.Sales}>
            {salesProducts}
        </div>
    ); */

    const[salesProductsState, salesProductsSetState] = useState({
        salesProducts: []
    });

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            let productInfo = response.data.results;
            productInfo = productInfo.map(product => ( {
                name: product.name,
                id: product.id,
                image: product.image,
                location: product.location.name,
                episode: [...product.episode]
            }));
            salesProductsSetState({salesProducts: [...productInfo]})
        })
    }, []);

    const products = salesProductsState.salesProducts.map((m,i) => {
        return <Product 
            key={m.id}
            id={m.id}
            name={m.name}
            location={m.location}
            image={m.image}
            episode={m.episode}
        />
    });

    return(<div className={classes.Sales}>{products}</div>)


}

export default Sales;