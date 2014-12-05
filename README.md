![](http://node-machine.org/images/machine-anthropomorph-for-white-bg.png)

# machinepack-boilerplate

This template exists to make it easier for you to get started writing a machinepack and the machines contained in it.

# Getting Started

- Clone this repository.
- Rename  the machinepack in the `package.json` file.
- Run `npm link` in the root of your machinepack project.
- Fire up the _Node console_ (e.g. `node`) and _copy and paste_: 

```javascript
`var myFirstMachinepack = require('./');
```
-  Execute the `helloWorld` method in the machinepack _copying and pasting_ this code into the console:

```javascript
myFirstMachinepack.helloWorld({ name: 'Nikola'}).exec({ 
  
  error: function() { 
    console.log("error exit called!");
  }, 

  success: function(result) { 
    console.log console.log("success exit called!"); 
  } 
});
```
- Add a new `machine` in the `machines` folder.
- Update your `package.json` file to reflect the new machine.

Documentation pages for the machines contained in this module are automatically generated and kept up-to-date on http://node-machine.org.

### License

MIT &copy; contributors



