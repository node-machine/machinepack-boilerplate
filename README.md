![](http://node-machine.org/images/machine-anthropomorph-for-white-bg.png)

# machinepack-boilerplate

This template exists to make it easier for you to get started writing a machinepack and the machines contained in it.

# Getting Started

1. Clone this repository.
2. Rename  the machinepack in the `package.json` file.
3. Run `npm link` in the root of your machinepack project.
4. Fire up the _Node console_ (e.g. `node`) and copy and paste: `var myFirstMachinepack = require('./');`
5. Execute the `helloWorld` method in the machinepack copying and pasting this code into the console:
`myFirstMachinepack.helloWorld({ name: 'Nikola'}).exec({ error: function(error) { return error; }, success: function(result) { return result; } });`
6. Add a new `machine` in the `machines` folder.
7. Update your `package.json` file to reflect the new machine.

Documentation pages for the machines contained in this module are automatically generated and kept up-to-date on http://node-machine.org.

### License

MIT &copy; contributors



