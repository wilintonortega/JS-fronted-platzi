const navCorreo = document.querySelector(".navbar-email");
const menu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu");
const IconMenuLeft=document.querySelector(".menu");
const carrito=document.querySelector(".navbar-shopping-cart");
const compras=document.querySelector(".product-detail");



//creando cards container
const cardsContainer=document.querySelector(".cards-container")

navCorreo.addEventListener("click",toggleMenu)
menu.addEventListener("click",toggleMenu)
IconMenuLeft.addEventListener("click",toggleMenuMobile)
carrito.addEventListener("click",toggleCarrito)

function toggleMenu(evento) {
    //menu.setAttribute("class","inactive")
    menu.classList.toggle("inactive");
        //al dar click en menu escritorio cerrar compras si esta abierto
    compras.classList.add("inactive");
    detailProduct.classList.add("inactive");

}

function toggleMenuMobile(evento) {
    mobileMenu.classList.toggle("inactive")
    //al dar click en mobile cerrar compras si esta abierto
    compras.classList.add("inactive");
    detailProduct.classList.add("inactive");

}

function toggleCarrito(evento) {
    compras.classList.toggle("inactive")
    //al dar click a carrito cerrar o menu escritorio o menu mobile
    menu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    detailProduct.classList.add("inactive");


}

const productosLista=[];
productosLista.push({
    name:"Bicicleta",
    price:120,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productosLista.push({
    name:"carro",
    price:2000,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productosLista.push({
    name:"moto",
    price:4500,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productosLista.push({
    name:"Bicicleta",
    price:120,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productosLista.push({
    name:"carro",
    price:2000,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productosLista.push({
    name:"moto",
    price:4500,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts(arr) {
    
    for (product of arr) {
        //creo div y su clase
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        //creo imagen
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.imagen)
        //creando div info
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
        //creando div
        const productInfoDiv=document.createElement('div');
        
        const productPrecio=document.createElement('p');
        productPrecio.innerText=product.price;
    
        const productNombre=document.createElement('p');
        productNombre.innerText=product.name;            
        const productInfoFigure=document.createElement('figure');
    
        const productInfoImagen=document.createElement('img');
        productInfoImagen.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productInfoImagen);
        
        productInfoDiv.appendChild(productPrecio);
        productInfoDiv.appendChild(productNombre);
    

    
        //creando appenChild para meter etiquetas dentro de sus padres
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        //div principal
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productosLista);



/*abrir detalle producto en lista*/
const listProduct=document.querySelector(".cards-container");
listProduct.addEventListener("click",toggleProduc)
const detailProduct=document.querySelector(".product-detail-secondary");

function toggleProduc() {
    detailProduct.classList.remove("inactive"); 
    compras.classList.add("inactive"); 
    menu.classList.add("inactive");


}

/*Cerrar detalle de producto*/

const cerrarDetalle=document.querySelector(".product-detail-close");
cerrarDetalle.addEventListener("click",funcerrar);
function funcerrar()
{

    detailProduct.classList.add("inactive");
}
