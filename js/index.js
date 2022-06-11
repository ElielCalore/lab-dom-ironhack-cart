// ITERATION 1

function updateSubtotal(product) {
    //Pass 1:
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');

    //Pass 2:
    const priceValue = price.innerText;
    const priceQuantity = quantity.value;

    //Pass 3:
    const priceSubTotal = priceValue * priceQuantity;

    //Pass 4:
    const subTotal = product.querySelector('.subtotal span');

    //Pass 5:
    subTotal.innerText = priceSubTotal;
    return priceSubTotal;

    //... your code goes here
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // end of test
    // ITERATION 2
    //... your code goes here
    const singleProduct = document.getElementsByClassName('product');
    let sum = 0;
    for (let i = 0; i < singleProduct.length; i++) {
        sum += updateSubtotal(singleProduct[i]);
    }

    // ITERATION 3
    //... your code goes here
    const total = document.querySelector('#total-value span');
    total.innerText = sum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
    //remove = event.querySelector('.product');

    //event.removeChild(remove);

    const target = event.currentTarget;

    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const getRemoveProduct = document.getElementsByClassName('btn btn-remove');
    for (let i = 0; i < getRemoveProduct.length; i++) {
        getRemoveProduct[i].addEventListener(
            'click',
            removeProduct(getRemoveProduct[i])
        );
    }

    //... your code goes here
});