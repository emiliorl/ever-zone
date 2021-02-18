import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './ProductDetails.module.css';
import {Link} from 'react-router-dom'

const ProductDetail = (props) =>
{
    const [product, setProductState] = useState({});
    const productId = +props.match.params.productId;
    /* const productDB = [
        {
            id: 0,
            img: "https://images-na.ssl-images-amazon.com/images/I/716hxkzc4SL._SY445_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$0.05"
        },
        {
            id: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/71RJjEn8oCL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/51P7ctxJSvL._AC_SL1000_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$11"
        },
        {
            id: 3,
            img: "https://images-na.ssl-images-amazon.com/images/I/81WMUxNTRYL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$110"
        },
        {
            id: 4,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 5,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        }
    ]; */

    /* useEffect(() => {
        const p = (productDB.filter(p => p.id === productId))[0] || {};
        setProductState({...p});
    }, []); */

    /* useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/'+ productId)
        .then(response => {
            const productInfo = response.data;
            console.log(productId)
            setProductState({...productInfo})
        })
    }, []); */

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/'+ productId)
        .then(response => {
            const productInfo = response.data;
            setProductState({...productInfo})
        })
    }, []);

    /* let objectInfo = <div style={{textAlign: "center"}}><h1>Product not found...</h1></div>;
    if(Object.entries(product).length !== 0)
    {
        objectInfo = (
            <div style={{textAlign: "center"}}>
                <h1>{product.title}</h1>
                <h1>{product.episode_id}</h1>
                <h2>{product.director}</h2>
                <h3>{product.opening_crawl}</h3>
                <ul style={{listStyleType: 'none'}}>
                    {product.characters}
                </ul> 
                <ul style={{listStyleType: 'none'}}>
                    {product.starships}
                </ul> 
            </div>
        );
    } */

    

    let objectInfo = <div style={{textAlign: "center"}}><h1>Product not found...</h1></div>;
    if(Object.entries(product).length !== 0)
    {
        let episodeId = 0;
        const episodes = product.episode.map((clink,i) => {
            episodeId = clink.substring(40, clink.length);  
            return (
                <li key={i}>
                    <Link to={'/episode/'+  episodeId}> Episode {episodeId} </Link>
                </li>
            );
        });
        
        objectInfo = (
            <div className={classes.containter}>
                <div className={classes.mainContent}>
                    <img src={product.image} alt={product.name}/>
                    <div className={classes.mainDetails}>
                        <h1>Action Figure: {product.name}</h1>
                        <div className={classes.ProductPrice}>Q {Math.round(product.id * 9999)/100}</div>
                        <h2>{product.species}</h2>
                        <h3>{product.location.name}</h3>
                    </div>
                </div>
                <h2 style={{textAlign: 'left', padding: '1%'}}>Epsiodes</h2>
                <div>
                    <ul className={classes.episodeList}>
                        {episodes}
                    </ul> 
                </div>
            </div>
        );
    }

    return (
        <>
            {objectInfo}
        </>
    );
}

export default ProductDetail;