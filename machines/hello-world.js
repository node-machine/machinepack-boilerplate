/**
 * Machine Boilerplate 
 *
 * A machine is just a function that's part of an object with stuff to make it more declarative. 
 * 
 */


module.exports = {

/**
 *
 * friendlyName
 * A display name for the machine.
 * - Sentence-case (like a normal sentence)
 * - No ending punctuation.
 * - Less than 50 characters 
 *
 */
  
  friendlyName: 'Hello World',

/**
 *
 * description
 * Clear, 1 sentence description in the imperative mood (e.g. "delete all..." not "deletes all..."). 
 * Should be less than 80 characters.
 * 
 */

  description: 'Log a hello message with the a user\'s secret code and return the length of the name input and the secret code.',

  /**
   *
   * extendedDescription
   * Provides supplemental info on top of description. Full markdown syntax with complete sentences (including punctuation). Should be less than 2000 characters.
   * 
   * Some example uses would be:
   * - Technical notes
   * - Description of how the function works
   * - Caveats (e.g. rate-limiting)
   * 
   */

  extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',

  /**
   *
   * inputs
   * The specification for the input values that the machine fn expects.
   * 
   */

  inputs: {

    /**
     *
     * input key (in this example: name)
     * An input key is a camel-cased alphanumeric string that must start with a lower-cased letter. 
     * No special characters allowed INCLUDING underscores (_) or dollar signs ($).
     * 
     * Examples of input keys which are NOT OK:
     * - 4myhOmies
     * - _id
     * - $
     * - $contains
     * 
     */

    name: {

      /**
       * 
       * input example (Required)
       * 
       * Used to determine the expected data type of the input. 
       * All runtime values which are functions, undefined, null, regex will be ignored. 
       * For inputs that expect objects, `example` determines the minimum required schema. 
       * 
       */
      
      example: 'John',

      /**
       * 
       * input description
       * A short description describing the input use.
       * 
       */
      
      description: 'The name of the person that will be sent the hello message.',

      /**
       *
       * input description
       * A short description describing the input use.
       * 
       */
      
      required: true
    }

  },

  /**
   *
   * defaultExit
   * This exit will be triggered when cb() or cb(null, 'whatever') or cb(undefined, 'whatever') is called. 
   * Defaults to "success" if an exit named "success" exists; otherwise defaults to the catchall exit.
   */

  defaultExit: 'success',

  /**
   *
   * catchAllExit
   * If machine fn calls exits.foo, and a foo outcome is not configured at runtime, this exit will be called instead. 
   * This exit will also be triggered when cb('anything') or cb('anything', 'whatever') is called. 
   * Defaults to "error" if an exit named "error" exists; otherwise leaving this blank will result in an error being 
   * thrown if the machine module can't find an exit to call.
   * 
   */

  catchallExit: 'error',

  /**
   *
   * catchAllExit
   * If machine fn calls exits.foo, and a foo outcome is not configured at runtime, this exit will be called instead. 
   * This exit will also be triggered when cb('anything') or cb('anything', 'whatever') is called. Defaults to "error" 
   * if an exit named "error" exists; otherwise leaving this blank will result in an error being thrown if the machine 
   * module can't find an exit to call.
   * 
   */

  exits: {

    /**
     *
     * exit key
     * A named exit.
     * 
     */

    error: {

      /**
       * 
       * exit description
       * A short description describing when the exit would be called.
       * 
       */
      
      description: '',
      void: true
    },

    /**
     *
     * exit key
     * A named exit.
     * 
     */

    success: {

      /**
       * 
       * exit description
       * A short description describing when the exit would be called.
       * 
       */
      
      description: '',

      /**
       * 
       * exit example
       * Keys in dictionary examples are all required; if a key doesn't exist in an output variable, 
       * the machine module will coerce it to the falsey of the correct type.
       * 
       */
      
      example:  {
        numLettersInName: 4,
        secretCode: "e9ec627220bc9e8ca66f916b7fba92f3" 
      }
    }

  },

  /**
   *
   * fn
   * The JavaScript function which embodies the behavior of the machine. 
   * It will be run when this machine is executed. The inputs argument is an object of the runtime values 
   * that were passed in to the machine. The exits argument is a switchback (or object of functions) where 
   * each key corresponds to an exit callback.
   * 
   */

  fn: function (inputs, exits) {

    /**
     * Module Dependencies
     *
     * Put your dependencies within fn.
     * 
     */

    var Hat = require('hat');

    // Generate a key.

    var secretCode = Hat();

    // Get the length of inputs.name.

    var myLength = inputs.name.length;

    // Log inputs.name and the secretCode. 

    console.log("\n\n\n\n*******************************************************************\nHello %s, your secret code is %s", inputs.name, secretCode); 

    // Return an object containing myLength and the secretCode

    return exits.success({
      numLettersInName: myLength, 
      secretCode: secretCode
    });

  }

};
