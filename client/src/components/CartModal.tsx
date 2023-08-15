// import { AiFillCloseCircle } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import  "../styles/cartmodal.css"



// export interface Product {
// 	id: number;
// 	name: string;
// 	price: number;
// 	count: number;
// 	image: string;
//   }
  
//   export interface ShoppingCartProps {
// 	visibility: boolean;
// 	products: Product[];
// 	onProductRemove: (product: Product) => void;
// 	onClose: () => void;
// 	onQuantityChange: (productId: number, newQuantity: number) => void;
//   }
  
//   // export default ShoppingCartProps;








// function ShoppingCart({
//   visibility,
//   products,
//   onProductRemove,
//   onClose,
//   onQuantityChange,
// }: ShoppingCartProps) {
//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center z-50"
//       style={{
//         display: visibility ? "block" : "none",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="bg-white rounded-lg p-4 shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Shopping Cart</h2>
//           <button className="btn close-btn" onClick={onClose}>
//             <AiFillCloseCircle size={30} />
//           </button>
//         </div>
//         <div className="cart-products">
//           {products.length === 0 && (
//             <span className="empty-text">Your basket is currently empty</span>
//           )}
//           {products.map((product: Product) => (
//             <div className="cart-product flex items-center" key={product.id}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-12 h-12 mr-4"
//               />
//               <div className="product-info">
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <span className="product-price">
//                   {product.price * product.count}$
//                 </span>
//               </div>
//               <select
//                 className="count ml-4"
//                 value={product.count}
//                 onChange={(event) => {
//                   onQuantityChange(product.id, parseInt(event.target.value));
//                 }}
//               >
//                 {Array.from({ length: 10 }, (_, index) => index + 1).map(
//                   (num) => (
//                     <option value={num} key={num}>
//                       {num}
//                     </option>
//                   )
//                 )}
//               </select>
//               <button
//                 className="btn remove-btn ml-4"
//                 onClick={() => onProductRemove(product)}
//               >
//                 <RiDeleteBin6Line size={20} />
//               </button>
//             </div>
//           ))}
//           {products.length > 0 && (
//             <button className="btn checkout-btn mt-4">
//               Proceed to checkout
//             </button>
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



// export interface Product {
// 	id: number;
// 	name: string;
// 	price: number;
// 	count: number;
// 	image: string;
//   }
  
//   export interface ShoppingCartProps {
// 	visibility: boolean;
// 	products: Product[];
// 	onProductRemove: (product: Product) => void;
// 	onClose: () => void;
// 	onQuantityChange: (productId: number, newQuantity: number) => void;
//   }
  








// function ShoppingCart({
//   visibility,
//   products,
//   onProductRemove,
//   onClose,
//   onQuantityChange,
// }: ShoppingCartProps) {
//   return (
//     <div
//       // className="fixed inset-0 flex items-center justify-center z-50"
//       className="modal"
//       style={{
//         display: visibility ? "block" : "none",
//         // backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       {/* <div className="bg-white rounded-lg p-4 shadow-lg"> */}
//       <div className="shoppingCart">
//         {/* <div className="flex justify-between items-center mb-4"> */}
//         <div className="header">
//           <h2 className="text-xl font-semibold">Quick Food Basket</h2>
//           <button className="btn close-btn" onClick={onClose}>
//             <AiFillCloseCircle size={40}  />
//           </button>
//         </div>
//         <div className="cart-products">
//           {products.length === 0 && (
//             <span className="empty-text">Your basket is currently empty</span>
//           )}
//           {products.map((product: Product) => (
//             // <div className="cart-product flex items-center" key={product.id}>
//             <div className="cart-product" key={product.id}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 // className="w-12 h-12 mr-4"
//                 className="product-info"
//               />
//               <div className="product-in">
//                 {/* <h3 className="text-lg font-semibold">{product.name}</h3> */}
//                 <h3 className="product-info">{product.name}</h3>
//                 <span className="product-price">
//                   {product.price * product.count}$
//                 </span>
//               </div>
//               <select
//                 id="count"
//                 value={product.count}
//                 onChange={(event) => {
//                   onQuantityChange(product.id, parseInt(event.target.value));
//                 }}
//               >
//                 {...Array.from({ length: 10 }, (_, index) => index + 1).map(
//                   (num) => (
//                     <option value={num} key={num}>
//                       {num}
//                     </option>
//                   )
//                 )}
//               </select>
//               <button
//                 className="btn remove-btn"
//                 onClick={() => onProductRemove(product)}
//               >
//                 <RiDeleteBin6Line size={20} />
//               </button>
//             </div>
//           ))}
//           {products.length > 0 && (
//             <button className="btn checkout-btn">
//               Proceed to checkout
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCart;
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cartmodal.css";

export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export interface ShoppingCartProps {
  // visibility: boolean;
  products: Product[];
  onProductRemove: (product: Product) => void;
  onClose: () => void;
  onQuantityChange: (productId: number, newQuantity: number) => void;
}

function ShoppingCart({
  // visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}: ShoppingCartProps) {
  return (
    <div
      className="modal"
    >
      <div className="shoppingCart">
        <div className="header">
          <h2 className="text-xl font-semibold">Quick Bite Cart</h2>
          <button className="product-remove-btn" onClick={onClose}>
            <AiFillCloseCircle size={40} />
          </button>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products.map((product: Product) => (
            <div className="cart-product" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-info"
              />
              <div className="product-in">
                <h3 className="product-info">{product.name}</h3>
                <span className="product-price">
                  {product.price * product.count}$
                </span>
              </div>
              <select
                id="count-num"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, parseInt(event.target.value));
                }}
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (num) => (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  )
                )}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} id="remove-bin"/>
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className="checkout-btn">
              Proceed to checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;




