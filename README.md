![external_image](http://www.nickvallaris.com/wp-content/uploads/2017/02/cucumber-logo-1024x445.jpg)
### CUCUMBER.JS

In this project, I set up cucumber.js infrastructure from the ground level without boilerplate to understand better how it works

It has One scenario with three steps Given, When and Then

## Folder structure:
```bash
├── features
│   └── addition.feature # A test that contains Given, Then and When Scenarios
│   └── step_definition #
│       └── addition_steps.js # Pure JavaScript is here that makes possible white tests in Gherkin format with .feature extension
├── README.md # This file.
├── lib #
│   └── calculator.js # A calculator object with its methods lives here
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json
├── node_modules
│   └── ^^^ # Many node modules folders and files
```
## Installation

Run in your terminal:

```
git@github.com:VolodymyrPliuta/Cucumber.js.git
```

cd to Cucumber.js directory

Run in your terminal:

```
./node_modules/.bin/cucumber-js
```
