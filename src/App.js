import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState(new Map());

  return (
      <div className={`w-full`}>
      <div className={`App flex flex-col items-center`}>
    <div className={`w-full flex sm:max-w-[1280px]`}>
      <main className={`flex flex-col w-2/3 p-8 gap-8`}>
          <div className={`text-4xl font-medium`}>
              <h1>My Bakery</h1>
          </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem item={item} index={index} key={index} cartItems={cartItems} setCartItems={setCartItems}></BakeryItem> // replace with BakeryItem component
      ))}
        </div>
      </main>
        <aside className={`flex flex-col w-1/3 shrink-0 p-8 sticky top-20 max-h-min`}>
            <p className={`text-2xl font-medium`}> Cart</p>
            <div className={`mt-4 flex flex-col gap-4`}>
                {[...cartItems.entries()].map((entry, index) =>
                    <p className="cart-item" key={index}>{entry[1]}x {bakeryData[entry[0]].name}</p>)}
            </div>
            <p className={`mt-4 font-medium`}>Total Price: $ {[...cartItems.entries()].reduce((p, i) => p += i[1] * bakeryData[i[0]].price, 0).toFixed(2)}</p>
        </aside>
    </div>
      </div>
      </div>
  );
}

export default App;
