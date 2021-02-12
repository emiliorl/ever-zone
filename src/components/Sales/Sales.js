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
        axios.get('https://swapi.dev/api/films')
        .then(response => {
            let productInfo = response.data.results;
            productInfo = productInfo.map(product => ( {
                title: product.title,
                episode_id: product.episode_id,
                opening_crawl: product.opening_crawl,
                characters: [...product.characters]
            }));
            salesProductsSetState({salesProducts: [...productInfo]})
        })
    }, []);

    const products = salesProductsState.salesProducts.map((m,i) => {
        return <Product 
            key={m.episode_id}
            characters={m.characters}
            title={m.title}
            movie_no={i+1}
            episode_id={m.episode_id}
            opening_crawl={m.opening_crawl}
        />
    });

    return(<div className={classes.Sales}>{products}</div>)


}

export default Sales;