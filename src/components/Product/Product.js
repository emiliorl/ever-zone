import classes from './Product.module.css';
import {Link} from 'react-router-dom'

const product = (props) =>{

    /* return(
        <div className={classes.ProductCard}>
            <div className={classes.ProductTumb}>
                <img src={props.img} alt=""/>
            </div>
            <div className={classes.ProductDetails}>
                <h4>{props.title}</h4>
                <p>{props.details}</p>
                <div className={classes.ProductBottomDetails}>
                    <div className={classes.ProductPrice}>{props.price}</div>
                    <div className={classes.ProductLinks}>
                        <Link to={"/product/" + props.id}>Comprar</Link>
                    </div>
                </div>
            </div>
        </div>
    ); */

    function addToCart(productId){
        console.log(productId);
        localStorage.setObj('item '+ productId, productId)
/*         localStorage.setObj('Quantity item '+ productId, productId)
 */    }

    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }
    


    /* let characterId = 0;
    const characters = props.characters.map((clink, i) =>{
        characterId = clink.substring(clink.indexOf('/',27)+1, clink.length -1)
        return(
            <li key={i}>
                <Link to={"/product/" + characterId}>Character {characterId}</Link>
            </li>
        );
    }); */

    return(
    <div className={classes.ProductCard}>
        <div className={classes.ProductDetails}>
            <h1>{props.title}</h1>
            <h3>{props.episode_id}</h3>
            <div className={classes.ProductBottomDetails}>
                <p>{props.opening_crawl}</p>
                {/* <ul style={{listStyleType: 'none'}}>
                    {characters}
                </ul> */}
                <div className={classes.ProductLinks}>
                        <Link to={"/product/" + props.movie_no}>Comprar</Link>
                </div>
                <div className={classes.ProductLinks} onClick={() => addToCart(props.episode_id)}>
                    <p href={"/product/"+props.episode_id}>Agregar al Carrito</p>
                </div>
            </div>
        </div>
    </div>)

}

export default product;