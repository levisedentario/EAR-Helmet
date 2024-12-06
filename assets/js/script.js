// Filter Products by Category
function filterProducts() {
    const filter = document.getElementById('productFilter').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
  
    products.forEach((product) => {
      const category = product.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  // Search Products by Name
  function searchProducts() {
    const search = document.getElementById('productSearch').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
  
    products.forEach((product) => {
      const name = product.querySelector('.product-name').innerText.toLowerCase();
      if (name.includes(search)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  