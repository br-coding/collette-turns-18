// Code goes here

// Add your code here

var app = angular.module('myApp', ['ngMessages']);

app.controller('myCtrl', function($scope) {
  $scope.SubmitForm = function() {
    var itemForm = $scope.exampleForm;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

  $scope.SubmitFormTwo = function() {
    var itemForm = $scope.exampleForm2;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

  $scope.SubmitFormThree = function() {
    var itemForm = $scope.exampleForm3;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

  $scope.SubmitSubscription = function() {
    var itemForm = $scope.subscribeForm;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

  $scope.CallUsSubmit = function() {
    var itemForm = $scope.callusForm;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        // var formHolder = $('.cta-form-holder');
        // var messageHolder = $('.cta-message-holder');
        $('.cta-form-holder').addClass('hide-form');
        $('.cta-message-holder').addClass('show-message');

        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

  $scope.ContactUsSubmit = function() {
    var itemForm = $scope.contactUsForm;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        window.location.assign('22-contact-us.html');
        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

  $scope.CareerSubmit = function() {
    var itemForm = $scope.careerForm;
    var form = itemForm.$$element;

    if (itemForm.$valid) {
      console.log('formValid');
      $(form).find(".btn-wrapper").addClass("loading");
      HandleRequest();
    } else {
      console.log('formValid NOT');
      var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
      angular.forEach(allFields, function(value, key) {
        var fieldName = $(value).attr("name");
        itemForm[fieldName].$setTouched();
      });
    }
    return false;

    function HandleRequest() {
      console.log("send the request");
      setTimeout(function() {
        // var formHolder = $('.cta-form-holder');
        // var messageHolder = $('.cta-message-holder');
        $('.career-form-holder').addClass('hide-form');
        $('.career-message-holder').addClass('show-message');
        
        $(form).find(".btn-wrapper").removeClass("loading");
      }, 4000);
    }
  }

});

app.directive('formEmail', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.formEmail = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(viewValue);

        //   if (INTEGER_REGEXP.test(viewValue)) {
        //     // it is valid
        //     return true;
        //   }

        //   // it is invalid
        //   return false;
      };
    }
  };
});



