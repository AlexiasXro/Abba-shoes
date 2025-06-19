document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    let index = 0;

    setInterval(() => {
        cards[index].classList.remove('active');
        index = (index + 1) % cards.length;
        cards[index].classList.add('active');
    }, 5000); // Cambia el número (en milisegundos) para ajustar la duración entre cambios
});

// maneja los filtros de productos 
  document.addEventListener("DOMContentLoaded", function () {
    const filtros = document.querySelectorAll(".filtro-btn");
    const productos = document.querySelectorAll(".product-box");

    filtros.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filtro = btn.getAttribute("data-filtro");

        productos.forEach((producto) => {
          const categoria = producto.getAttribute("data-categoria");

          if (categoria === filtro) {
            producto.style.display = "block";
          } else {
            producto.style.display = "none";
          }
        });
      });
    });
  });
