
const getInputValueById = id =>{
    const inputField = document.getElementById(id)
    const inputValue = inputField.value;
    inputField.value = ``
    return inputValue; 
}


const addProduct = () =>{

    const product = getInputValueById('product-name-field');
    console.log(product);
    const quantity = getInputValueById('product-quantity-field');
    console.log(quantity);
    // Display Product on UI
    addProductToDisplay(product, quantity);


    // Set to local Storage
    // Simple Way 
    // localStorage.setItem(product, quantity)
    saveItemToLocalStorage(product, quantity)
}


const getShoppingCartFromLocalStorage = () =>{
    let saveCart = localStorage.getItem('cart')
    let cart = {};
    if(saveCart){
        cart = JSON.parse(saveCart)
    }
    return cart
}

const saveItemToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCartFromLocalStorage()
    // Add product to the Object as Property
    cart[product] = quantity
    const cartStringified = JSON.stringify(cart)
    // save to local Storage
    localStorage.setItem('cart', cartStringified)
}



const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li)
}

const displayStoredProducts = () =>{
    const cart = getShoppingCartFromLocalStorage()
    for(const product in cart){
        const quantity = cart[product]
        console.log(product, quantity);
        addProductToDisplay(product, quantity);
    }
}
displayStoredProducts()
