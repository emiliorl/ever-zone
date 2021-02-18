import classes from './CartItems.module.css';

const cartItem = (props) =>{

    return(
    <div className={classes.ProductCard}>
        <div className={classes.ProductDetails}>
            <div className={classes.ProductTumb}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className={classes.ProductBottomDetails}>
                <h1>{props.name}</h1>
                <select name = "dropdown">
                    <option value = {1} selected>{1}</option>
                    <option value = {2}>{2}</option>
                    <option value = {3}>{3}</option>
                </select>
                <div className={classes.ProductLinks}>
                    <div className={classes.ProductPrice}>Q {Math.round(props.id * 9999)/100}</div>
                </div>                
            </div>
        </div>
    </div>)

}

export default cartItem;