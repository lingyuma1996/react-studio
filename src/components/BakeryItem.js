// TODO: create a component that displays a single bakery item
function BakeryItem(props){
    function addToCart(){
        console.log(props)
        props.cartItems.set(props.index, props.cartItems.has(props.index) ? props.cartItems.get(props.index) + 1 : 1)
        props.setCartItems(new Map(props.cartItems))
    }

    return (
        <div className={`bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col`}>
            <div className={`flex-[2] md:flex-[1.5] w-full h-60 bg-gray-200 rounded-md overflow-hidden`}>
                <img className={`w-full h-full object-cover`} src={props.item.image} alt={props.item.name}></img>
            </div>
            <div className={`flex-1 flex-grow p-4 flex flex-col justify-between`}>
                <div>
                <h2 className={`text-xl font-bold`}>{props.item.name}</h2>
                <p>{props.item.description}</p>
                </div>
                <div className={`flex items-center justify-between`}>
                    <p> $ {props.item.price}</p>
                    <button className={`px-4 py-2 rounded-md`} onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default BakeryItem;