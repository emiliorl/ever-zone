import classes from './Summary.module.css';

const summary = (props) =>{

    let tax = Math.round(props.price * 4)/100;

    return(
    <div className={classes.Summary}>
        <h2>This is the summary</h2>
        <h3>Products: Q{props.price}</h3>
        <h3>Tax: Q{tax}</h3>
        <h3>Total: Q{Math.round((props.price+tax)*100)/100}</h3>
        <button>Check out</button>
    </div>)
}

export default summary;