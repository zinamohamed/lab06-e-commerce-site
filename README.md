# Adding local storage

1) Make it so you can click on products and them to the cart in localStorage
    1) We need a button to click
    2) Add an event listener to the button
    3) On click
        a. Look at id of the thing we clicked on.
        b. We should add add/increent that item in the cart.
            1) Check if an item with this ID is already in the cart. If so, increment the quantity.
            2) If it's not in the cart, put one in there with a quantity of 1.
    4) Load the cart from localStorage
        a. Grab the cart from localStorage, and store it in a variable.
        b. Replace our hard-coded cart with that variable.
