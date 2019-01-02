let discount = document.getElementById('couponValue');
let fullPrice = document.getElementById('itemPrice');
let afterCoupons = document.getElementById('afterCoupons');
let couponType = document.getElementById('couponType');

document.getElementById('submit').addEventListener("click", function(){
	let type = couponType.options[couponType.selectedIndex].value;

	if(type === "dollar"){
		document.getElementById('afterPrice').innerHTML = fullPrice.value - discount.value;
	} else {
		let discountValue = fullPrice.value * (discount.value/100);
		document.getElementById('afterPrice').innerHTML = fullPrice.value - discountValue;
	}
	afterCoupons.classList.remove('hidden');
	afterCoupons.classList.add('visible');
	
	console.log(fullPrice.value);
	console.log(discount.value);
	console.log(couponType.options[couponType.selectedIndex].text);
});


