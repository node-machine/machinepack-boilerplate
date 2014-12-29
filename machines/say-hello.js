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
 * - Sentence-case (like a normal sentence- only uppercase the first letter of the first word)
 * - No ending punctuation.
 * - Less than 50 characters (i.e. 2-4 words)
 *
 */
  
  friendlyName: 'Say hello',

/**
 *
 * description
 *  • Clear, 1 sentence description in the imperative mood (e.g. "Delete all..." not "Deletes all..."). 
 *  • Ending punctuation is optional, but not necessary
 *  • Should be less than 80 characters.
 * 
 */

  description: 'Log a hello message with a generated secret code and other information',

  /**
   *
   * extendedDescription
   * Provides supplemental info on top of description. Full markdown syntax with complete sentences (including punctuation). 
   * Should be less than 2000 characters.
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
     * input key
     * (in this example, the input key is `name`)
     * 
     * An input key is a camel-cased alphanumeric string that must start with a lower-cased letter. 
     * No special characters allowed INCLUDING underscores (_) or dollar signs ($).
     * 
     * Examples of good input keys:
     * - apiToken
     * - id
     * - myHomies
     * 
     * Examples of BAD iinput keys which are NOT OK:
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
       * • If `example` is `true` or `false`, only true or false (boolean) values will be allowed.
       * • If `example` is a number, only numbers will be allowed.
       * • If `example` is a string, only strings will be allowed (numbers/booleans will be automatically converted to strings)
       * • If `example` is an object, the specified keys are required, and extra keys will be ignored.
       * • If `example` is an array, it should only have one item (indicating that this input expects an array of _things like this_)
       * 
       */
      
      example: 'John',

      /**
       * 
       * input description
       * A short description describing what the input is, as a noun phrase.
       * 
       */
      
      description: 'The name of the person that will be sent the hello message.',

      /**
       *
       * `required`
       * 
       * (Defaults to false)
       * 
       * Whether or not the input is required.
       * If a required input value is omitted, the catchall exit will be triggered.
       * 
       */
      
      required: true
    }

  },

  /**
   *
   * defaultExit
   * 
   * The name of the "default" (or "primary") exit.  Use this to indicate the "normal" outcome that a user
   * should expect from this machine.
   * E.g. a `divide()` machine might have "success" as its `defaultExit`, but a separate "triedToDivideByZero".  `defaultExit` helps indicate which exit is the most "normal".
   * 
   * Defaults to "success" if an exit named "success" exists; otherwise defaults to the catchall exit.
   * 
   * > Note to switchback users:
   * > This default exit is what will be triggered by calling `exits()` or `exits(null, 'whatever')`.
   */

  defaultExit: 'success',


  exits: {

    /**
     *
     * exit key
     * 
     * The name for your exit, and how you'll call it in your machine code.
     * e.g. an exit with key: `notEnoughFunds` is triggered in the machine `fn` by calling:
     * ```
     * exits.notEnoughFunds()
     * ```
     * 
     */

    error: {

      /**
       * 
       * exit description
       * A short description that explains when the exit would be called.
       * 
       */
      
      description: '',
      
      
      
      
      /**
       * void
       * 
       * If an exit doesn't have a return value (e.g. your machine calls the `exits.error()` callback with no arguments)
       * you should mark the exit as `void`.
       * 
       * Defaults to false.
       */
      void: true
    },



    /**
     *
     * Another exit:
     * 
     */

    success: {
      
      description: '',


      /**
       * 
       * exit example
       * 
       * Required (unless `void` is set to true)
       * 
       * The `example` indicates the expected return value from the exit.
       * 
       * It works pretty much like the `example` for inputs, and follows the same rules.
       * 
       * If the actual value passed to this exit callback from your machine `fn` doesn't match the type inferred
       * from `example`, the value will be converted to match the example before being passed to the user's callback.
       * In general, missing data will be converted to the "falsy" value for its type.
       * 
       * So:
       * • missing strings will be filled-in as `''`' (empty string)
       * • missing numbers will be filled-in as `0`
       * • missing booleans will be filled-in as `false`
       * 
       * 
       * In the `example` below, if `fn` called:
       * ```
       * exits.success(['something completely wrong']);
       * ```
       * 
       * Then the user's callback would receive:
       * ```
       * {
       *   numLettersInName: 0,
       *   secretCode: '',
       * }
       * ```
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
     * Put your `require()` calls within `fn`.
     * (this improves performance by reducing the # of dependencies that need to be loaded)
     *
     */

    var Hat = require('hat');

    setTimeout(function(){ 

      // Generate a key.

      var secretCode = Hat();

      // Get the length of inputs.name.

      var myLength = inputs.name.length;

      // Log inputs.name and the secretCode. 

      console.log("Hello %s, your secret code is %s", inputs.name, secretCode); 

      // Return an object containing myLength and the secretCode

      return exits.success({
        numLettersInName: myLength, 
        secretCode: secretCode
      });

    }, 1); 

  }

};
