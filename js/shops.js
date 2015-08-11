
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

var Shop = function(shopName, text) {
  this.shopName = shopName;
  this.text = text;
};

Shop.prototype.render = function() {
  var td = document.createElement('td');

  td.innerHTML = this.shopName = this.text;

  return td;
};

var shops = document.getElementById('shops');
var donutForm = document.getElementById('donut-form');
var donutButton = document.getElementById('donut-button');
var clearShops = document.getElementById('clear-shops');
var donutData = [];

var renderAllShops = function() {
  shops.innerHTML = '';
  donutData.forEach(function(shop) {
    shops.appendChild(shop.render());
  });
};

var handleShopSubmit = function(event) {
  event.preventDefault();

    if (!event.target.minCustomerMaker.value) {
      return alert('Shops cannot be empty!');
    }

    var newShop = new Shop(event.target.shopMaker.value, event.target.minCustomerMaker.value);
    event.target.shopMaker.value = null;
    event.target.minCustomerMaker.value = null;
    donutData.push(newShop);
    renderAllShops();
};

donutButton.addEventListener('submit', handleShopSubmit);

clearShops.addEventListener('click', function() {
  shops.innerHTML = '';
  donutData = [];
});

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
  for (var i=0; i < 11; i++) {
    x = this.calculateDonutsPerHour();
    console.log(x);
    this.hourlyTotals.push(x);
    this.dailyTotals = this.dailyTotals + x;
  }
};

// Instantiate new objects to represent each of the five locations.
var downtown = new DonutShop("Downtown", 8, 43, 4.50);
var capitolHill = new DonutShop("Capitol Hill", 4, 37, 2.00);
var southLakeUnion = new DonutShop("South Lake Union", 9, 23, 6.33);
var wedgewood = new DonutShop("Wedgewood", 2, 28, 1.25);
var ballard = new DonutShop("Ballard", 8, 58, 3.75);

downtown.calculateDailyDonuts();
capitolHill.calculateDailyDonuts();
southLakeUnion.calculateDailyDonuts();
wedgewood.calculateDailyDonuts();
ballard.calculateDailyDonuts();

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

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();













