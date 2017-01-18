var app = angular.module('myApp', []);

app.controller('NameController', function() {
  this.names = [];
  this.enteredName = "";
  this.toBeRemoved = "";
  this.errorMsg = "";
  this.errorBool = false;
  this.index = 0;

  this.pushToNames = function() {
    this.enteredName = this.enteredName.toUpperCase();
    if(this.names.indexOf(this.enteredName) === -1) {
      this.names.push(this.enteredName);
      this.enteredName = "";
      this.errorBool = false;
    }
    else {
      this.errorBool = true;
      this.errorMsg = "The specified name is already in the list and cannot be added.";
      this.enteredName = "";
    }
  };

  this.removeFromNames = function() {
    this.toBeRemoved = this.toBeRemoved.toUpperCase();
    this.index = this.names.indexOf(this.toBeRemoved);
    if(this.index !== -1) {
      this.names.splice(this.index, 1);
      this.toBeRemoved = "";
      this.errorBool = false;
    }
    else {
      this.errorBool = true;
      this.errorMsg = "The specified name is not in the list and cannot be removed."
    }
  };
});
