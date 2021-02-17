import classes from './Product.module.css';
import {Link} from 'react-router-dom';
import cartIcon from '../../Images/cartIcon.png';

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
        localStorage.setObj('item '+ productId, productId)
/*      localStorage.setObj('Quantity item '+ productId, productId)
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
            <div className={classes.ProductTumb}>
                <img src={props.image} alt={props.name}/>
            </div>
            <h1>{props.name}</h1>
            <h3>{props.species}</h3>
            <div className={classes.ProductBottomDetails}>
                {/* <p>{props.opening_crawl}</p>
                <ul style={{listStyleType: 'none'}}>
                    {characters}
                </ul> */}
                <div className={classes.ProductLinks}>
                    <div>
                        <img src={cartIcon} alt="" className={classes.icon} onClick={() => addToCart(props.id)} />
                    </div>
                    <div>
                        <Link to={"/product/" + props.id}>Comprar</Link>
                    </div>
                </div>                
            </div>
        </div>
    </div>)

}

export default product;