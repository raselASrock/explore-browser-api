
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
    displayProducts(product, quantity);


    // Set to local Storage
    // Simple Way 
    localStorage.setItem(product, quantity)
}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li)
}