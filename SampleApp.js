var app=angular.module('myApp',[]);

app.service('ContactService', function () {
    var uid = 1;
    var contacts = [{
             id: 0,
             'name': 'Rakesh',
             'email': 'rakesh@gmail.com',
             'phone': '1234567890'
    }];
     
    this.save = function (contact) {
        if (contact.id == null) {
            contact.id = uid++;
            contacts.push(contact);
        } 
 
    }
 
    
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
  
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    
    this.list = function () {
        return contacts;
    }
})

app.controller('myCtrl',function($scope,ContactService){
     $scope.contacts = ContactService.list();
 
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }
 
 
    $scope.delete = function (id) {
 
        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }
 
 
    $scope.edit = function (id) {
        $scope.newcontact = ContactService.get(id);
    }
});

