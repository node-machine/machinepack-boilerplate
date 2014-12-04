module.exports = {

  friendlyName: 'Hello World',
  description: 'This is an initial machine that you should replace with your own machine',
  extendedDescription: 'This example machine concatonates ',
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

    var doJSONRequest = require('../lib/do-request');

    // GET projects/ and send the api token as a header
    doJSONRequest({
      method: 'get',
      url: '/oauth/access_token',
      data: {
        'redirect_uri': inputs.callbackUrl,
        'client_id': inputs.appId,
        'client_secret': inputs.appSecret,
        'code': inputs.code,
      },
      headers: {}
    }, function (err, responseBody) {
      if (err) {
        return exits.error(err);
      }

      // Parse Facebook Access Token from request Body
      var token;
      try {

        return exits.success({
          token: responseBody.match(/access_token=([a-z0-9]+)[^a-z0-9]{0,}/i)[1],
          expires: (function getExpirationDateAsISOString (){
            var now = new Date();
            var secondsFromNowToExpiry = +(responseBody.match(/expires=([0-9]+)[^0-9]{0,}/i)[1]);
            var expirationDate = new Date( (now.getTime() + (secondsFromNowToExpiry*1000)) );
            return expirationDate.toJSON();
          })()
        });
      } catch (parseError){
        return exits.error(parseError);
      }
    });
  }
};
