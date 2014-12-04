module.exports = {

  friendlyName: 'Hello World',
  description: 'This is an initial machine that you should replace with your own machine',
  extendedDescription: 'This example machine ... ',
  cacheable: true,

  inputs: {
    foo: {
      example: 'baz',
      description: '',
      required: true
    }
  },

  defaultExit: 'success',
  catchallExit: 'error',

  exits: {
    error: {
      description: ''
    },
    success: {
      description: '',
      example: {
        yaya: ''
    }
  },

  fn: function (inputs, exits) {

  }  
};
