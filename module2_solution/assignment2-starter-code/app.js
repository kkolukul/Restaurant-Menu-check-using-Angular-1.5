(function(){
'use strict';
angular.module("ShoppingListCheckOff",[])
.controller("buycontroller",buycontroller)
.controller("boughtcontroller",boughtcontroller)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

buycontroller.$inject=['ShoppingListCheckOffService'];
function buycontroller(ShoppingListCheckOffService) {
 var ToBuyController = this;

 ToBuyController.buylist=ShoppingListCheckOffService.Tobuy;

 ToBuyController.boughtbutton = function (item,index) {
   ShoppingListCheckOffService.boughtfun(item,index);
 }
}

boughtcontroller.$inject=['ShoppingListCheckOffService'];
function boughtcontroller(ShoppingListCheckOffService) {
var AlreadyBoughtController = this;
AlreadyBoughtController.boughtlist = ShoppingListCheckOffService.bought;
}

function ShoppingListCheckOffService() {
  var service = this;
 service.Tobuy =[{name:"cookie",value:20},{name:"biscuits",value:10},{name:"drinks",value:"4 bottles"},{name:"tea",value:"5 bags"},{name:"candies",value:20}];
 service.bought = [];

  service.boughtfun = function (item,index) {
    service.bought.push(item);
    service.Tobuy.splice(index,1);
  };
 //service.getitem = function () {
  //return Tobuy;
//};

}
})();
