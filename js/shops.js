
'use strict';

// Constructor function with location specific property attributes
var DonutShop = function(locationName, minCustPerHour, maxCustPerHour, avgDonutPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgDonutPerCust = avgDonutPerCust;
  this.hourlyTotals = [];
  this.dailyTotals = 0;
};

// Method generating random number of customers
DonutShop.prototype.generateRandomNumCust = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
};

// Method simulating number of donuts purchased per hour
DonutShop.prototype.calculateDonutsPerHour = function() {
  var donuts = this.generateRandomNumCust(this.minCustPerHour, this.maxCustPerHour);
  return Math.floor(donuts * this.avgDonutPerCust);
};

// Method calculating the sum of hourly totals
DonutShop.prototype.calculateDailyDonuts = function () {
  var x;
  for (var i=0; i < 12; i++) {
    x = this.calculateDonutsPerHour();
    // console.log(x);
    this.hourlyTotals.push(x);
    this.dailyTotals = this.dailyTotals + x;
  }
};

// Method to render new row into table with data from corresponding object, yo.
DonutShop.prototype.render = function() {
  var getTable = document.getElementById('donutShops');
  var newRow = document.createElement('tr');
  newRow.id=this.locationName;
  newRow.innerHTML= this.locationName;
  getTable.appendChild(newRow);
  this.calculateDailyDonuts();
  
  for (var i = 0; i < 12; i++) {
    var newCell = document.createElement('td');
    newCell.innerHTML = this.hourlyTotals[i];
    newRow.appendChild(newCell);
  }

  var newCell = document.createElement('td');
  newCell.innerHTML = this.dailyTotals;
  newRow.appendChild(newCell);

};

// Instantiate new objects to represent each of the five locations.
var downtown = new DonutShop("Downtown", 8, 43, 4.50);
var capitolHill = new DonutShop("Capitol Hill", 4, 37, 2.00);
var southLakeUnion = new DonutShop("South Lake Union", 9, 23, 6.33);
var wedgewood = new DonutShop("Wedgewood", 2, 28, 1.25);
var ballard = new DonutShop("Ballard", 8, 58, 3.75);

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();

downtown.calculateDailyDonuts();
capitolHill.calculateDailyDonuts();
southLakeUnion.calculateDailyDonuts();
wedgewood.calculateDailyDonuts();
ballard.calculateDailyDonuts();

var Shop = function(shopName, text) {
  this.shopName = shopName;
  this.text = text;
};

Shop.prototype.render = function() {
  var td = document.createElement('td');

  td.innerHTML = this.shopName = this.text;

  return td;
};

var donutButton = document.getElementById('donut-button');
var handleShopSubmit = function() {
// var shops = document.getElementById('shops');
var donutForm = document.getElementById('donut-form');
var newLocation = document.getElementById('locationname');
var newMincustomers = document.getElementById('mincustomers');
var newMaxcustomers = document.getElementById('maxcustomers');
// var donutData = [];
};

donutButton.addEventListener('click', handleShopSubmit);


var renderAllShops = function() {
  var shops = document.getElementById('shops');
  var donutData = [];
  shops.innerHTML = '';
  donutData.forEach(function(shop) {
    shops.appendChild(shop.render());
  });
};

// var handleShopSubmit = function(event) {

//     if (!event.target.mincustomers.value) {
//       return alert('Shops cannot be empty!');
//     }

//     var newShop = new Shop(event.target.locationname.value, event.target.mincustomer.value);
//     event.target.locationname.value = null;
//     event.target.mincustomer.value = null;
//     donutData.push(newShop);
//     renderAllShops();
// };

// donutButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log("Is the button working?");
//   handleShopSubmit(event);
//   // shops.innerHTML = '';
//   // donutData = [];
// });












