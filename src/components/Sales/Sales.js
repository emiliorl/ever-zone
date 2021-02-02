import classes from './Sales.module.css';
import Product from '../Product/Product'

const sales = (props) =>{
    
    let salesProducts = props.salesProducts.map((product, i) => {
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
    );
}

export default sales;