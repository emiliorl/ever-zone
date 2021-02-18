import React, {useState, useEffect} from 'react';
import classes from './Cart.module.css';
import CartItem from '../../components/CartItems/CartItems';
import Summary from '../../components/Summary/Summary';
import axios from 'axios'; 

const Cart = (props) =>
{

    let items = [];
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        items.push(localStorage.getItem( localStorage.key( i ) ))
    }

    const[cartProductsState, cartProductsSetState] = useState({
        cartProducts: []
    });

    useEffect(() => {
        if(items.length === 0){
        }
        if(items.length === 1){
            axios.get('https://rickandmortyapi.com/api/character/'+ items[0])
            .then(response => {
                const productInfo = response.data;
                cartProductsSetState({...productInfo})
            })
        }
        if(items.length > 1){
            axios.get('https://rickandmortyapi.com/api/character/'+ items)
            .then(response => {
                let productInfo = response.data;
                productInfo = productInfo.map(product => ( {
                    name: product.name,
                    id: product.id,
                    image: product.image,
                    species: product.species,
                    episode: [...product.episode]
                }));
                cartProductsSetState({cartProducts: [...productInfo]})
            })
        }
    }, []);

    let products;
    let productsSummary;
    let total = 0;

    if(items.length === 1){
        products = (
            <CartItem 
                key={cartProductsState.id}
                id={cartProductsState.id}
                name={cartProductsState.name}
                species={cartProductsState.species}
                image={cartProductsState.image}
                episode={cartProductsState.episode}
            />);
            productsSummary = <Summary
                price={Math.round(cartProductsState.id*9999)/100}
            />
    }
    else{
        products = cartProductsState.cartProducts.map((m,i) => {
        return <CartItem 
            key={m.id}
            id={m.id}
            name={m.name}
            species={m.species}
            image={m.image}
            episode={m.episode}
        />
        });
        cartProductsState.cartProducts.map((m,i) => {
            total += Math.round(m.id * 9999)/100
        })
        productsSummary = <Summary
                price={Math.round(total*100)/100}
        />
    }

    return(
        <div className={classes.Cart}>
            <div className={classes.CartItems}>
                {products}
            </div>
            <div className={classes.Summary}>{productsSummary}</div>
        </div>
    )
}

export default Cart;