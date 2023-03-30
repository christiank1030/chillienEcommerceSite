const productContainer = document.querySelector('.productsSide')
const totalPrice = document.querySelector('.totalHeader')
const fullCartPage = document.querySelector('.fullCartPage')
let prices = []
let data = []

const populateCart = () => {
    if(sessionStorage.user) {
        let user = JSON.parse(sessionStorage.user)

        // fetch request for user data
        fetch(`/cart?user=${user.email}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not ok.");
            }
        })
        .then(cartData => {
            data = cartData

            if(!data.length) {
                fullCartPage.innerHTML = ``
                let emptyCart = document.createElement('div')
                emptyCart.classList.add('emptyCartDiv')
                fullCartPage.appendChild(emptyCart)
                emptyCart.innerHTML = `
                    <img class="emptyCartImage" src="./images/AlertImage.jpg" alt="">
                    <h1 class="emptyCartTitle">Your shopping cart is empty</h1>
                `
            } else {

            for(let i = 0; i < data.length; i++) {
                let title = data[i].productName
                let size = data[i].size
                let price = data[i].productPrice
                prices.push(parseInt(price.slice(1)))
                let quantity = data[i].quantity

                let newProductCard = document.createElement('div')
                productContainer.appendChild(newProductCard)
                newProductCard.classList.add('cartProductContainer')

                    newProductCard.innerHTML = `
                    <img class="cartProductImg" src="./images/smileyFace0.jpeg" alt="">
                    <div class="titleAndPrice">
                        <h3 class="cartProductTitle">${title} (${size})</h3>
                        <p class="cartProductPrice">${price}</p>
                        <div class="quantityAndDelete">
                            <input class="quantityInput" data-itemId=${i} type="number" value=${quantity}>
                            <p class="deleteProduct" data-itemId="${i}">Delete</p>
                        </div>
                    </div>`
            }
        }
            let totalSum = 0
            for(let i = 0; i < prices.length; i++) {
                totalSum += prices[i]
            }
            totalPrice.innerHTML = `<h3 class="totalHeader">Total: $${totalSum}`
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        fullCartPage.innerHTML = ``
        let emptyCart = document.createElement('div')
        emptyCart.classList.add('emptyCartDiv')
        fullCartPage.appendChild(emptyCart)
        emptyCart.innerHTML = `
            <img class="emptyCartImage" src="./images/AlertImage.jpg" alt="">
            <h1 class="emptyCartTitle">Your shopping cart is empty</h1>
        `
    }
}
populateCart();



// Delete button functionality

const deleteProduct = () => {
    productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteProduct')) {
            let itemId = parseInt(event.target.dataset.itemId)
            data.splice(itemId, 1)

            let user = JSON.parse(sessionStorage.user)

            fetch(`/cart?user=${user.email}`, {
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(updatedData => {
                console.log("Cart updated:", updatedData)
                // Remove deleted product card from UI
                let deletedProductCard = event.target.closest('.cartProductContainer')
                deletedProductCard.remove()
                location.reload()
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    })
}

deleteProduct()

const editQuantity = () => {
    productContainer.addEventListener('change', (event) => {
        if(event.target.classList.contains('quantityInput')) {
            const index = Array.from(
                document.querySelectorAll('.quantityInput')
            ).indexOf(event.target)

            const item = data[index]
            item.quantity = event.target.value
            console.log(item.quantity)

            let user = JSON.parse(sessionStorage.user)


            fetch(`/cart?user=${user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(() => {
                console.log('quantity updated')
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    })
}

editQuantity()

