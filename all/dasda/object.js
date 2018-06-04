var cars = { 
   businessname: 'Enterprise Car Rental',
   types: ['Economy','Midsize'],
   econCars: 500,
   midsizeCars: 200
};

window.onload = function(){
   document.getElementById("busiName").innerHTML = cars.businessname;
};

function displayCars(){
   document.getElementById("econCars").innerHTML = cars.types[0];
   document.getElementById("econCarsavail").innerHTML = cars.econCars;
   document.getElementById("midSizeCars").innerHTML = cars.types[1];
   document.getElementById("midSizeCarsAvail").innerHTML = cars.midsizeCars;
};

function midsizeClick(){
   cars.midsizeCars--;
   document.getElementById("midSizeCarsAvail").innerHTML = cars.midsizeCars;
};
function econsizeClick(){
   cars.econCars--;
   document.getElementById("econCarsavail").innerHTML = cars.econCars;
};