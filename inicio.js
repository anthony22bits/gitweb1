const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerSVG = document.querySelector('.menu-burger');
const mobileMenuListas = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const carIconListas = document.querySelector('#detail-product-car');
const flechaReturn = document.querySelector('.return-flecha');
const detailAdd = document.querySelector('#detail-product-add')
const mainContainer = document.querySelector('.main-container');
const contadorNav = document.querySelector('.contador');
const productDetailClose = document.querySelector('.product-detail-close');

/*const btnAddCar = document.querySelector('.btn-add-card');

const btnAddCarAll = btnAddCar.querySelectorAll('img');*/



function closeDetailProduct(){
   const detailAddClose = detailAdd.classList.contains('inactive');
   if (!detailAddClose) {
      detailAdd.classList.add('inactive');
   }
}


function flechaReturnDetail() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }
}
function toggleDesktopMenu() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   desktopMenu.classList.toggle('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }

}
function toggleMobileMenuBurger() {
   mobileMenuListas.classList.toggle('inactive');
}
function toggleCarIcon() {
   const iconDesktopMenu = desktopMenu.classList.contains('inactive');
   carIconListas.classList.toggle('inactive');
   if (!iconDesktopMenu) {
      desktopMenu.classList.add('inactive');
   }
}
function imgClick() {
   const detailAddContain = detailAdd.classList.contains('inactive');
   if(detailAddContain){
      detailAdd.classList.remove('inactive');
   }
}
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerSVG.addEventListener('click', toggleMobileMenuBurger);
carIcon.addEventListener('click', toggleCarIcon);
flechaReturn.addEventListener('click', flechaReturnDetail);
productDetailClose.addEventListener('click',closeDetailProduct);


const productList = [];
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);



function AddProduct(arr) {
   for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
      img.addEventListener('click', imgClick );
     
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');


      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.textContent = 'S/. ' + product.price;
      const productName = document.createElement('p');
      productName.textContent = product.name;
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const figure = document.createElement('figure');
      figure.classList.add('btn-add-car');
      const figureImg = document.createElement('img');


      figureImg.setAttribute('src', './imagenes/recursos/bt_add_to_cart.svg')
      figure.appendChild(figureImg);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(figure);
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
      mainContainer.appendChild(productCard);



   }
}
AddProduct(productList);

let contadorAdd = 1;
let btnsAdd = document.querySelectorAll('.btn-add-car');
btnsAdd.forEach(btnAdd => {
   btnAdd.addEventListener('click', function () {
      contadorNav.textContent = contadorAdd;
      contadorAdd = contadorAdd + 1;
   })
});



