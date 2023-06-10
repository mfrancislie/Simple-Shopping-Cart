# Simple Shopping Cart

# Table Contents

1. Create-react-app
   1. npx-create-react-app
   2. remove extra files
2. Create-Layout
   1. create component file and add Header, Main, Basket
   2. Style Component
3. Create Main Component
   1. create data.js
   2. render product item
4. Create Product Component
   1. create product divs
   2. pass props to product components
5. Implement Cart
   1. Add and Remove items from the Cart
6. Create Basket Component
   1. Show list items in cart items
   2. calculate subtotal
   3. show checkout button
7. Save cart items to localStorage
   1. localStorage.setItem('cartItems', JSON.stringify(newCartItems));
   2. Inside useEffect function setCartItems(localStorage.setItem('cartItems',) ? JSON.parse(localStorage.setItem('cartItems')): [])
