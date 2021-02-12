const Cart = (props) =>
{

    Object.keys(localStorage).forEach(function(key){
        console.log(localStorage.getItem(key));
     });

    return(
        <>
            <h1>Cart</h1>
        </>
    );
}

export default Cart;