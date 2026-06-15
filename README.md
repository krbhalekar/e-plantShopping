# e-plantShopping

**Repository Name:** `e-plantShopping`

## Project Overview

**e-plantShopping** is a modern, full-featured online plant shopping platform built with React and Redux. This application allows users to browse an extensive catalog of plants organized by category, add items to their shopping cart, manage quantities, and proceed to checkout. The platform provides a seamless shopping experience with persistent cart storage and real-time inventory updates.

## Features

### 🌱 Plant Browsing
- **Categorized Plant Collections:**
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants

- **Detailed Product Information:** Each plant includes name, description, image, and pricing

### 🛒 Shopping Cart Management
- **Add to Cart:** Users can add plants to their shopping cart with a single click
- **Update Quantities:** Increment or decrement item quantities using +/- buttons
- **Remove Items:** Delete items from the cart at any time
- **Cart Persistence:** Cart data is saved to localStorage and persists across browser sessions
- **Real-time Cart Badge:** Displays the total quantity of items in the cart

### 💾 State Management
- **Redux Integration:** Global state management using Redux Toolkit
- **CartSlice:** Handles all cart operations (add, remove, update quantity)
- **Persistent Storage:** Automatic localStorage synchronization for cart data

### 💰 Checkout
- **Cart Summary:** View all items with individual and total pricing
- **Total Calculation:** Automatically calculates total amount with proper formatting
- **Order Preparation:** Ready for checkout functionality integration

## Technology Stack

- **Frontend:** React 18
- **State Management:** Redux Toolkit
- **Styling:** CSS3
- **Build Tool:** Vite
- **Package Manager:** npm

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── App.jsx              # Main application component
├── ProductList.jsx      # Product listing and browsing
├── CartItem.jsx         # Shopping cart display and management
├── CartSlice.jsx        # Redux cart slice with reducers
├── AboutUs.jsx          # About us page
├── store.js             # Redux store configuration
├── main.jsx             # Application entry point
├── index.css            # Global styles
└── assets/              # Images and media files
```

## Redux Store Structure

```javascript
{
  cart: {
    items: [
      {
        name: string,
        image: string,
        cost: string,
        quantity: number
      }
    ]
  }
}
```

## Key Components

### ProductList Component
- Displays all plant categories and products
- Handles "Add to Cart" functionality
- Shows cart badge with total quantity
- Manages cart visibility toggle

### CartItem Component
- Displays shopping cart contents
- Allows quantity adjustments
- Shows itemized and total pricing
- Handles item removal
- Displays "empty cart" message when needed

### CartSlice (Redux)
- **addItem:** Adds new plant to cart or increments quantity
- **removeItem:** Removes plant from cart
- **updateQuantity:** Updates quantity of existing cart item
- **Persistence:** Auto-saves cart to localStorage

## Usage

1. **Browse Plants:** Navigate through different plant categories on the home page
2. **Add to Cart:** Click "Add to Cart" button on any plant item
3. **View Cart:** Click the cart icon in the navbar to view your shopping cart
4. **Manage Cart:** Adjust quantities with +/- buttons or delete items
5. **Continue Shopping:** Return to the product list to add more items
6. **Checkout:** Proceed to checkout when ready to purchase

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Order history tracking
- [ ] Product search and filtering
- [ ] Plant care tips and guides
- [ ] Customer reviews and ratings
- [ ] Wishlist functionality
- [ ] Multiple language support

## License

MIT License