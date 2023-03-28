const productContainer = document.querySelector('.productsSide')
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

            for(let i = 0; i < data.length; i++) {
                console.log(data[i])
                let title = data[i].productName
                let size = data[i].size
                let price = data[i].productPrice
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
                        <input class="quantityInput" type="number" value=${quantity}>
                        <p class="deleteProduct" data-itemId="${i}">Delete</p>
                    </div>
                </div>`
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
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
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    })
}

deleteProduct()

