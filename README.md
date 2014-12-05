![](http://node-machine.org/images/machine-anthropomorph-for-white-bg.png)

# machinepack-boilerplate

This template exists to make it easier for you to get started writing a machinepack and the machines contained in it.

# Getting Started

1. Clone this repository.
2. Rename  the machinepack in your package.json file.
3. Run `npm link` in the root of your machinepack project.
4. Fire up the _Node console_ (e.g. `node`) and type `var myFirstMachinepack = require('./machinepack-YOUR_MACHINEPACK_NAME');`
5. To see a machine in the macihine pack in action copy and paste this code into the console:

```javascript
myFirstMachinepack.helloWorld({ name: 'Nikola'
  })
  .exec({
    error: function(error) {
      return error;
    },

    success: function(result) {
      return result;
    }

  });
```

## The Basic Structure of a Machinepack

The structure of a machinepack consists of the:

- `machines` folder
- `index.js` file
- `package.json` file
- `node_modules` folder which contains, at minimum, the `machine` module

### The `machines` folder

A Machine is simply the specification  



Documentation pages for the machines contained in this module are automatically generated and kept up-to-date on http://node-machine.org.

### License

MIT &copy; contributors



