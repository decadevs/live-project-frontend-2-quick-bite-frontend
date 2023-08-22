


import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
import "./cartmodal.css";
import egusiSoup from "../assets/istockphoto-1386522276-1024x1024.jpeg"

export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export interface ShoppingCartProps {
  products: Product[];
  onProductRemove: (product: Product) => void;
  onClose: () => void;
  onQuantityChange: (productId: number, newQuantity: number) => void;
}

function ShoppingCart({

  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}: ShoppingCartProps) {
  return (
    <div className="the-modal ">
      <div className="the-shoppingCart">
        <div className="the-header">
          <h2 className="the-text-xl font-semibold">Quickbite Cart</h2>
          <button className="the-product-remove-btn" onClick={onClose}>
            <AiFillCloseCircle size={40} />
          </button>
        </div>
        <div className="the-cart-products">
          {products.length === 0 && (
            <span className="the-empty-text">Your basket is currently empty</span>
          )}
          {products.map((product: Product) => (
            <div className="the-cart-product" key={product.id}>
              <div className="the-product-in">

              <img src={egusiSoup} alt={product.name} className="the-product-img" />
              <span className="the-product-price">
               {product.price * product.count}$
                     </span>
                <p className="the-product-info">{product.name}</p> 
                
              </div>
              <div className="the-counter">
                <button
                  className="the-counter-btn"
                  onClick={() => onQuantityChange(product.id, product.count - 1)}
                  disabled={product.count === 1}
                >
                  -
                </button>
                <span className="the-product-count">{product.count}</span>
                <button
                  className="the-counter-btn"
                  onClick={() => onQuantityChange(product.id, product.count + 1)}
                >
                  +
                </button>
              </div>
              <button className="the-remove-btn" onClick={() => onProductRemove(product)}>
                <RiDeleteBin6Line size={20} id="the-remove-bin" />
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className="the-checkout-btn">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
// import { AiFillCloseCircle } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import "./cartmodal.css";
// import egusiSoup from "../assets/istockphoto-1386522276-1024x1024.jpeg"

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   count: number;
//   image: string;
// }

// export interface ShoppingCartProps {
//   products: Product[];
//   onProductRemove: (product: Product) => void;
//   onClose: () => void;
//   onQuantityChange: (productId: number, newQuantity: number) => void;
// }

// function ShoppingCart({
//   products,
//   onProductRemove,
//   onClose,
//   onQuantityChange,
// }: ShoppingCartProps) {
//   return (
//     <div className="modal">
//       <div className="shoppingCart">
//         <div className="header">
//           <h2 className="text-xl font-semibold">Quickbite Cart</h2>
//           <button className="product-remove-btn" onClick={onClose}>
//             <AiFillCloseCircle size={40} />
//           </button>
//         </div>
//         <div className="cart-products">
//           {products.length === 0 && (
//             <span className="empty-text">Your basket is currently empty</span>
//           )}
//           {products.map((product: Product) => (
//             <div className="cart-product" key={product.id}>
//               <div className="product-in">

//               <img src={egusiSoup} alt={product.name} className="product-img" />
//               <span className="product-price">
//                {product.price * product.count}$
//                                                           </span>
//                 <p className="product-info">{product.name}</p> 
                
//               </div>
//               <div className="counter">
//                 <button
//                   className="counter-btn"
//                   onClick={() => onQuantityChange(product.id, product.count - 1)}
//                   disabled={product.count === 1}
//                 >
//                   -
//                 </button>
//                 <span className="product-count">{product.count}</span>
//                 <button
//                   className="counter-btn"
//                   onClick={() => onQuantityChange(product.id, product.count + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <button className=" remove-btn" onClick={() => onProductRemove(product)}>
//                 <RiDeleteBin6Line size={20} id="remove-bin" />
//               </button>
//             </div>
//           ))}
//           {products.length > 0 && (
//             <button className="checkout-btn">Proceed to checkout</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCart;




// import { AiFillCloseCircle } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import "./cartmodal.css";
// import egusiSoup from "../assets/istockphoto-1386522276-1024x1024.jpeg"

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   count: number;
//   image: string;
// }

// export interface ShoppingCartProps {
//   products: Product[];
//   onProductRemove: (product: Product) => void;
//   onClose: () => void;
//   onQuantityChange: (productId: number, newQuantity: number) => void;
// }

// function ShoppingCart({
//   products,
//   onProductRemove,
//   onClose,
//   onQuantityChange,
// }: ShoppingCartProps) {
//   return (
//     <div className="modal">
//       <div className="shoppingCart">
//         <div className="header">
//           <h2 className="text-xl font-semibold">QuickBite Cart</h2>
//           <button className="product-remove-btn" onClick={onClose}>
//             <AiFillCloseCircle size={40} />
//           </button>
//         </div>
//         <div className="cart-products">
//           {products.length === 0 && (
//             <span className="empty-text">Your basket is currently empty</span>
//           )}
//           {products.map((product: Product) => (
//             <div className="cart-product" key={product.id}>
//               <img src={egusiSoup} alt={product.name} className="product-info" />
//               <div className="product-in">
//                 <h3 className="product-info">{product.name}<span className="product-price">
//                {product.price * product.count}$
//                                                           </span></h3> 
                
//               </div>
//               <div className="counter">
//                 <button
//                   className="counter-btn"
//                   onClick={() => onQuantityChange(product.id, product.count - 1)}
//                   disabled={product.count === 1}
//                 >
//                   -
//                 </button>
//                 <span className="product-count">{product.count}</span>
//                 <button
//                   className="counter-btn"
//                   onClick={() => onQuantityChange(product.id, product.count + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <button className=" remove-btn" onClick={() => onProductRemove(product)}>
//                 <RiDeleteBin6Line size={20} id="remove-bin" />
//               </button>
//             </div>
//           ))}
//           {products.length > 0 && (
//             <button className="checkout-btn">Proceed to checkout</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCart;






