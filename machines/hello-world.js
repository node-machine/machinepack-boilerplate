module.exports = {

  friendlyName: 'Hello World',
  description: 'Log a hello message with the a user\'s secret code and return the length of the name input and the secret code.',
  extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',

  inputs: {

    name: {
      example: 'John',
      description: 'The name of the person that will be sent the hello message.',
      required: true
    }

  },

  defaultExit: 'success',
  catchallExit: 'error',

  exits: {

    error: {
      description: '',
      void: true
    },

    success: {
      description: '',
      example:  {
        numLettersInName: 4,
        secretCode: "e9ec627220bc9e8ca66f916b7fba92f3" 
      }
    }

  },

  fn: function (inputs, exits) {

    var Hat = require('hat');

    var secretCode = Hat();

    var myLength = inputs.name.length;

    console.log("Hello %s, your secret code is %s", inputs.name, secretCode); 

    return exits.success({
      numLettersInName: myLength, 
      secretCode: secretCode
    });

  }

};
