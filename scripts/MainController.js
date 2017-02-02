(function() {
  'use strict';
  angular
    .module('formlyApp')
    .controller('MainController', MainController);

  function MainController(province) {
    var vm = this;

    //THE MODEL OBJECT THAT WE REFERENCE ON THE ELEMENT IN INDEX.HTML
    vm.rental = {};

    //AN ARRAY OF OUR FORM FIELDS WITH CONFIGURATION AND OPTIONS SE.
    //WE MAKE REFERENCE TO THIS IN THE 'FIELDS' ATTRIBUTE ON THE ELEMENT

    vm.rentalFields = [
      {
        key: 'first_name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true
        }
      },
      {
        key: 'last_name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
      },
      {
        key: 'under25',
        type: 'checkbox',
        templateOptions: {
          label: 'Are you under 25?',
        },
        //HIDE THIS FIELD IF WE DON'T HAVE ANY VALID INPUT IN THE EMAIL FIELDS
        hideExpression: '!model.email'
      },
      {
        key: 'province',
        type: 'select',
        templateOptions: {
          label: 'Province/Territory',
          //CALL OUR PROVINCE SERVICE TO GET A LIST OF PROVINCES AND TERRITORIES
          options: province.getProvinces()
        },
        hideExpression: '!model.email'
      },
      {
        key: 'insurance',
        type: 'input',
        templateOptions: {
          label: 'Insurance Policy Number',
          placeholder: 'Enter your insurance policy number'
        },
        hideExpression: '!model.under25 || !model.province'
      }
    ];
  }
})();
