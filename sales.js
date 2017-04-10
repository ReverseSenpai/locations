'use strict';
var  store1 ={
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
}

var store2 = {
  location:'SeaTac Airport' ,
  minCust: 3,
  maxCust: 24 ,
  avgCookie: 1.2 ,

}
var store3 = {
  location:'Seattle Center' ,
  minCust: 11 ,
  maxCust: 38,
  avgCookie: 3.7 ,
}

var store4 = {
  location: 'Capitol Hill' ,
  minCust: 20 ,
  maxCust: 38 ,
  avgCookie: 2.3 ,
}

var store5 = {
  location:'Alki' ,
  minCust: 2 ,
  maxCust: 16 ,
  avgCookie: 4.6,
}

function random(minCust,maxCust) {
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}
console.log(random(store4.minCust,store4.maxCust));
