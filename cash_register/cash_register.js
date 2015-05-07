var line_items = [
    {description: "aardvark", price: 425, qty: -1},
    {description: "PruNe", price: 1.99, qty: 1},
    {description: "potato", price: .79, qty: -10},
    {description: "zebra", price: 525.25, qty: 1},
    {description: "SpinAch", price: 2.99, qty: 1},
    {description: "zepplin", price: 20000, qty: 1},
    {description: "PetUnia", price: 1.25, qty: 12},
    {description: "squash", price: 2.35, qty: 3}
];

var coupons = [
    {description: "Zebra", discount: 100, limit: 1},
    {description: "squash", discount: 1.00, limit: 1},
    {description: "mouse", discount: 2.00, limit: 10}
];

var $entries, 
    $subTotal,
    $salesTax,
    $total;

$(document).ready(function(){

   $entries = $("#entries");
   $subTotal = $('#subtotal');
   $salesTax = $('#salestax');
   $total = $('#total');

  myUtils.myEach(line_items, function(v,i){
    addItem(v.price, v.description, v.qty);
  });

  updateSubTotal();


});

function addItem(price, title, quantity) {
  // YUCK! Let's refactor this!
  var html_string = (
        "<tr>" +
          "<td>" +  title + "</td>" +
          "<td>" + quantity + "</td>" +
          "<td>" + price + "</td>" +
        "</tr>"
  );
  $entries.append(html_string);
}

function updateSubTotal() {
  
var subTotalPrice = 0;

subTotalPrice = myUtils.myReduce(line_items, function(value, nextValue){
    return value + (nextValue.price * nextValue.qty);
  })

  $subTotal.text("$" + subTotalPrice); 
  updateSalesTax(subTotalPrice);
}

function updateSalesTax(subTotalPrice) {
  var salesTax = subTotalPrice * .0725;
  $salesTax.text("$" + salesTax);
  updatedTotal(subTotalPrice, salesTax);
}

function updatedTotal(subTotalPrice, salesTax) {
  var total = subTotalPrice + Math.round(salesTax);
  $total.text("$" + total);
}

function sortReceipt() {
  var receipt = myUtils.myEach(line_items, function(val) {
    val.description
  }
}
myUtils.myEach.sort(line_items);