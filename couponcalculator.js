let discount = document.getElementById('couponValue');
let fullPrice = document.getElementById('itemPrice');
let afterCoupons = document.getElementById('afterCoupons');
let couponType = document.getElementById('couponType');

document.getElementById('submit').addEventListener("click", function(){
	afterCoupons.classList.remove('hidden');
	afterCoupons.classList.add('visible');
	document.getElementById('afterPrice').innerHTML = fullPrice.value - discount.value;
	console.log(fullPrice.value);
	console.log(discount.value);
});


