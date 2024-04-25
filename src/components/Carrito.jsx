import "./Carrito.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
    return (
        <li>
        <img src={ thumbnail } alt= {title} />
        <div>
            <strong> { title }</strong> - ${price}
        </div>

        <footer>
            <small>Qty: {quantity}</small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    );
}

export function Cart () {
   const cartCheckboxId = useId();


   const { cart, clearCart, addToCart } = useCart();

   const cantProducts=cart.reduce( (total, product)=>total+product.quantity,0);

   const totalPagar=cart.reduce((total,product)=>total + product.price*product.quantity,0)
    return(
        <>
        <label className="cart-button" htmlFor={ cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={ cartCheckboxId } type="checkbox" hidden />
        <aside className="cart">
            <ul>
                {
                cart.map(product => (
                    <CartItem 
                    key={ product.id }
                    addToCart={ () => addToCart(product)}
                    { ...product}
                    />
                ))
            }
            </ul>
 
            <button style={{backgroundColor: "red"}} onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>

        </>
    );
}