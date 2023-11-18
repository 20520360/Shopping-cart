document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-list');
    const cartContainer = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    const cartEmptyMessage = document.getElementById('cart-empty-message');

     const products = [
        {
            "id": 1,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
            "name": "Nike Air Zoom Pegasus 36",
            "description": "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
            "price": 108.97,
            "color": "#e1e7ed"
        },
        {
            "id": 2,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
            "name": "Nike Air Zoom Pegasus 36 Shield",
            "description": "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
            "price": 89.97,
            "color": "#4D317F"
        },
        {
            "id": 3,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
            "name": "Nike CruzrOne",
            "description": "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
            "price": 100.97,
            "color": "#E8D026"
        },
        {
            "id": 4,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
            "name": "Nike Epic React Flyknit 2",
            "description": "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
            "price": 89.97,
            "color": "#FD584A"
        },
        {
            "id": 5,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png",
            "name": "Nike Odyssey React Flyknit 2",
            "description": "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
            "price": 71.97,
            "color": "#D4D7D6"
        },
        {
            "id": 6,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png",
            "name": "Nike React Infinity Run Flyknit",
            "description": "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
            "price": 160.0,
            "color": "#F2F5F4"
        },
        {
            "id": 7,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png",
            "name": "Nike React Miler",
            "description": "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
            "price": 130.0,
            "color": "#22AFDC"
        },
        {
            "id": 8,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png",
            "name": "Nike Renew Ride",
            "description": "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
            "price": 60.97,
            "color": "#B50320"
        },
        {
            "id": 9,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png",
            "name": "Nike Vaporfly 4% Flyknit",
            "description": "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
            "price": 187.97,
            "color": "#3569A1"
        },
        {
            "id": 10,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png",
            "name": "Nike Zoom Fly 3 Premium",
            "description": "Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.",
            "price": 160.0,
            "color": "#54D4C9"
        }
    ];

    let cart = [ ];

    // Display products in the product container
    renderProducts(products);

    // Display cart items in the cart container
    renderCart(cart);

    // Function to render products
  function renderProducts(products) {
        productContainer.innerHTML = '';

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
               <div class="img-our"> <img src="${product.image}" alt="${product.name}" class="product-img" width="100"></div>
               <h2 class="product-name">${product.name}</h2>
               <p class="product-description">${product.description}</p>
               <div class="add-price"> 
                   <h2 class="product-price">$${product.price.toFixed(2)}</h2>
                   ${product.addedToCart ? '<button class="btn-added"><img class="img-check" src="./assets/check.png"></button>' : `<button class="btn-add" onclick="addToCart(${product.id})"><h2>Add to cart</h2></button>`}
               </div>
            `;
            productContainer.appendChild(productCard);
        });
    }

    // Function to render cart items
    function renderCart(cart) {
        cartContainer.innerHTML = '';
        totalPriceElement.textContent = `$0.00`;

        if (cart.length === 0) {
            cartEmptyMessage.style.display = 'block';
        } else {
            cartEmptyMessage.style.display = 'none';

            cart.forEach(cartItem => {
                const cartItemCard = document.createElement('div');
                cartItemCard.classList.add('cart-item');
                cartItemCard.innerHTML = `
            
                     <div class="img-your">
                        <img class= "cart-img" src="${cartItem.image}" alt="${cartItem.name}" width="80">
                     </div>
                    <div class="container-cart">
                    <h2 class="cartItem-name">${cartItem.name}</h2>
                    <p class="cart-price">$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                        <div class = "cart-caculator">
                        <button onclick="increaseQuantity(${cartItem.id})">+</button>
                        <span class="cart-quantity"> ${cartItem.quantity}</span>
                        <button onclick="decreaseQuantity(${cartItem.id})">-</button>
                        <button class="btn-cart" onclick="removeFromCart(${cartItem.id})"><img class="img-trash" src="./assets/trash.png"></button>
                        </div>
                    </div>
                `;
                cartContainer.appendChild(cartItemCard);
            });

            // Calculate and display total price
            const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
        }
    }

    // Function to add a product to the cart
    window.addToCart = function (productId) {
        const productToAdd = products.find(product => product.id === productId);

        if (productToAdd) {
            const existingCartItem = cart.find(item => item.id === productId);

            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                cart.push({ ...productToAdd, quantity: 1 });
            }

            // Mark the product as added to cart
            productToAdd.addedToCart = true;

            renderCart(cart);
            renderProducts(products); // Update the product list to reflect the change
        }
    };
    

    // Function to increase quantity
    window.increaseQuantity = function (productId) {
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity++;
            renderCart(cart);
        }
    };

    // Function to decrease quantity
    window.decreaseQuantity = function (productId) {
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity--;

            if (cartItem.quantity === 0) {
                removeFromCart(productId);
            } else {
                renderCart(cart);
            }
        }
    };

    // Function to remove a product from the cart
    window.removeFromCart = function (productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart(cart);
    };

    // Initial rendering
    renderProducts(products);
    renderCart(cart);
});
