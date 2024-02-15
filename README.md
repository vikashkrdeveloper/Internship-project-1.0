
#React E-commerce Application

This project is a React.js application that serves as an e-commerce platform with authentication capabilities and various product management features. It includes functionalities such as user authentication, protected routes, fetching products, searching and filtering products, managing a shopping cart, and adding products to the cart.

#Features

##Login Process:
Implements the login process using the DummyJSON Auth API.
Users can authenticate themselves by providing valid credentials.

##Save Login Token:
Saves the login token received from the authentication process for authorization purposes.
The token is stored securely in the browser's local storage.

##Protected Route for Home Page:
Makes the home page a protected route, allowing only logged-in users to access it.
Unauthorized users are redirected to the login page.

##Fetch Products on Home Page:
Fetches products from the DummyJSON Products API.
Displays the fetched products on the home page.

#Search Products by Name:
Provides a search feature on the home page to search for products by name.
Dynamically filters and displays products based on the search query entered by the user.

##Filter Products by Price:
Implements a filter option on the home page to filter products by price range.
Users can select a price range, and the displayed products will be updated accordingly.

##Implement a Cart:
Creates a cart component to manage selected products.
Shows the cart count on the top navigation bar and updates dynamically as products are added to or removed from the cart.
Calculates and displays the total amount of the cart.

##Add to Cart Button on Product Cards:
Implements an "Add to Cart" button on product cards.
Allows users to add products to their shopping cart with a single click.
