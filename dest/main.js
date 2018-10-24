var itemCart	= document.getElementById('cart');
	footerCart	= document.querySelector('.hover-block');
	price		= document.querySelector('.price-header');
itemCart.onmouseover = function showCart() {
    price.style.visibility = 'hidden';
    footerCart.style.visibility ='visible';
    footerCart.style.height ='100%';
}
itemCart.onmouseout = function hiddenCart(){
	price.style.visibility = 'visible';
	footerCart.style.visibility ='hidden';
	footerCart.style.height ='0';
	
}