![node-machine logo](http://node-machine.org/images/machine-anthropomorph-for-white-bg.png)
# machinepack-boilerplate

This template exists to make it easier for you to get started writing a machinepack and the machines contained in it.

For more information about machinepacks and machines, check out http://node-machine.org.

## Getting Started

- Clone this repository.
- Run `npm link` in the root of your machinepack project.
- Fire up the _Node console_ (i.e. `node`) and _copy and paste_: 
  ```javascript
  var myFirstMachinepack = require('./');
  ```

- Execute the `sayHello()` method in the machinepack _copying and pasting_ this code into the console:
  ```javascript
  myFirstMachinepack.sayHello({
    name: 'Nikola'
  }).exec({ 
    
    error: function() { 
      console.log("`error` exit called!");
    }, 
  
    success: function(result) { 
      console.log("`success` exit called!"); 
    } 
  });
  ```


## Adding A New Machine
- Create a new file in the `machines/` folder which exports a machine definition, e.g. `say-hello-to-universe.js`
- Update the `machinepack.machines` key in your `package.json` file to reflect the new machine:
  ```javascript
  // ...
  {
    "machines": [
      "say-hello-to-universe"
    ]
  }
  ```
- Now you can call `sayHelloToUniverse()` when you require your machinepack, e.g.:
  ```javascript
  require('./').sayHelloToUniverse({
    // inputs...
  }, {
    // exit callbacks...
  });
  ```


## Publishing

Since machinepacks are just NPM modules, releasing them as open-source is easy.

##### Machinepack configuration
Change the `name` property in your machinepack's `package.json` file, e.g.:
```javascript
{
  "name": "machinepack-foo"
}
```
This is how it will show up on NPM as well as on http://node-machine.org.  For instance, if I chose `machinepack-foo`, the generated documentation would be available at http://node-machine.org/machinepack-foo.

> Note that `"machinepack"` is listed as a keyword in the `package.json` file- this is important so that the machinepack module is automatically picked up by our script on the http://node-machine.org website.  Curious how this works?  Check out [machinepack-npm](http://github.com/mikermcneil/machinepack-npm)


##### Publishing to NPM
When you're ready to publish your new machinepack, just run `npm publish` from the top-level directory of the module (i.e. where your `package.json` file is).

```bash
$ npm publish
```

Documentation pages for the machines contained in your new machinepack are automatically generated and kept up-to-date on http://node-machine.org.  This might take a couple of minutes, so hang tight.  Shoot us an issue if you run into any trouble.



## License

MIT &copy; contributors



