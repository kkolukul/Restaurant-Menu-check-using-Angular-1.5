(function () {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

MenuSearchService.$inject = ['$http'];
 function MenuSearchService($http) {
   var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
         method : "GET",
         url :"https://davids-restaurant.herokuapp.com/menu_items.json"
       }).then(function (result) {
           var dat = result.data;
           var fitems=[];
           for (var i in dat.menu_items) {
             if (dat.menu_items[i].description.indexOf(searchTerm) === -1) {
               console.log("no items");
             }
             else fitems.push(dat.menu_items[i]);
           }
         console.log(fitems);
         return fitems;
       });
    };
 }

 NarrowItDownController.$inject = ['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
     var ctrl = this;
    // ctrl.searchTerm ='';

     ctrl.menusearch = function (searchTerm) {
       var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
       promise.then(function (response) {
         ctrl.found = response;
        
       })
       .catch( function (error) {
         console.log('error occured in retreiving');
       });
     };

   ctrl.removeItem = function (index) {
     ctrl.found.splice(index,1);
   }

 }


 function FoundItems() {
   var ddo = {
     templateUrl : 'project/founditems.html',
     scope : {
       onRemove : '&',
       items : '<'
     }
   };
   return ddo;
 }


})();
