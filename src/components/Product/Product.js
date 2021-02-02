import classes from './Product.module.css'

const product = (props) =>{

    return(
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
                        <a href={"/product/" + props.id}>Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default product;