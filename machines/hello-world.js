/**
 * Machine Boilerplate 
 *
 * This is where the code for your machine goes.
 * 
 * If you don't need / can't get to every method, just implement
 * what you have time for.  The other methods will only fail if
 * you try to call them!
 * 
 * For many adapters, this file is all you need.  For very complex adapters, you may need more flexiblity.
 * In any case, it's probably a good idea to start with one file and refactor only if necessary.
 * If you do go that route, it's conventional in Node to create a `./lib` directory for your private submodules
 * and load them at the top of the file with other dependencies.  e.g. var update = `require('./lib/update')`;
 */

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

    /**
     * Module Dependencies
     */
    // ...
    // e.g.
    // var _ = require('lodash');
    // var mysql = require('hat');
    // ...

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
