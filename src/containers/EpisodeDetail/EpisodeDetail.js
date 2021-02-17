import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeDetail = (props) =>
{
    const [product, setProductState] = useState({});
    const episodeId = +props.match.params.episodeId;

    /* useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/'+ productId)
        .then(response => {
            const productInfo = response.data;
            console.log(productId)
            setProductState({...productInfo})
        })
    }, []); */

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/'+ episodeId)
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
        objectInfo = (
            <div style={{textAlign: "center"}}>
                <h1>{product.name}</h1>
                <h2>{product.air_date}</h2>
            </div>
        );
    }

    return (
        <>
            {objectInfo}
        </>
    );
}

export default EpisodeDetail;