console.log("script.js is connected");

function store() {
  var cartCount = 0;

  function addItem(itemsToAdd) {
    cartCount = cartCount + itemsToAdd;
  }

  function removeCartItem(itemsToRemove) {
    cartCount = cartCount - itemsToRemove;
  }

  function getCartCount() {
    return cartCount;
  }

  return {
    addItem: addItem,
    removeCartItem: removeCartItem,
    getCartCount: getCartCount,
  };
}
