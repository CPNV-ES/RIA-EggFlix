# EggFlix

## Description

This project is designed to rent online movies and the main features are renting movies, social logins and changing language.

## Getting Started

### Prerequisites

List all dependencies and their version needed by the project as :

* IDE used [PhpStorm 2023.3](https://www.jetbrains.com/phpstorm/) or [Webstorm 2023.3](https://www.jetbrains.com/fr-fr/webstorm/)
* npm 10.4.0 ou ultérieure [official doc](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
* node v20.11.0 ou ultérieure [official doc](https://nodejs.org/en/download)
* git version 2.43.0.windows ou ultérieure [official doc](https://git-scm.com/)
* OS supported Windows 10

### Configuration

All data are saved in a google sheet, and so there's no configuration to do on our side except for accesses in an .env file.

### Naming conventions

We use the [W3Schools Naming Conventions](https://www.w3schools.com/js/js_conventions.asp) for all our code base.

## Deployment

### On dev environment
Install packages
```shell
npm install
```

We are using [Sass](https://sass-lang.com/) for the site styling. 
The Scss files in the scss/pigga folder should not be modify ! 
All overrides should be applied in a scss file and import the file inside app.scss.
```
npm run sass
```

### Tests
We are using [Jest](https://jestjs.io/) as a testing framework.

This command will run all the tests
```shell
npm test
```

You can also choose to run a single test using the following command example :
```shell
jest -t 'login_WithFaceBook_isConnected'
```

### On integration environment

To deploy the project first copy the project to the proper folder then duplicate the .env.example to .env and 
update it with your environment's values.

## Directory structure
```shell
├───doc                     //Documentation
├───public                  //Web files (including the index.html at root)
│   ├───css
│   ├───imgs
│   ├───js                  //Our JS source files
│       ├───locales         //Our JS localization files (name following the ISO 639-1 standard)
│   └───vendors             //Third party JS
├───test                    //Test classes
├───package.json            //Describe the project dependendies
├───README.md               //This file (must be at root)
```

## Collaborate

* Workflow
  * [Gitflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20est%20l'un%20des,les%20hotfix%20vers%20la%20production.)
  * [How to commit](https://www.conventionalcommits.org/en/v1.0.0/)
  * [How to use your workflow](https://nvie.com/posts/a-successful-git-branching-model/)

  * Propose a new feature in [icescrum](https://icescrum.cpnv.ch/p/RIAEGGFLIX/#/planning) 
    * We only use technical stories
  * Pull requests are open to merge in the develop branch.
  * Release on the main branch we use GitFlow and not with GitHub release.
  * Issues are added to the [github issues page](https://github.com/JuilletMikael/RIA-EggFlix/issues)

### Branching strategy
We use [Gitflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow) branching strategy with snake_case naming based on the names of stories in IceScrum.
Example : Story is named 'BDD_Localization' so the branch will be 'bdd_localization'.

### Naming conventions
We are using [JavaScript Style Guide from W3Scools](https://www.w3schools.com/js/js_conventions.asp)

### Tests naming conventions
We are using [A guide to unit testing in JavaScript](https://github.com/mawrkus/js-unit-testing-guide) using Jest.
We try to stick to 'given when then' approach with the 'it()' method' provided by Jest.

Example :
```javascript
describe("The Gallery instance", () => {
  describe("when initialized", () => {
    it("calculates the thumb size", () => {});
    it("calculates the thumbs count", () => {});
  
    // ...
    });
});
```

## License
[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)

You are free to copy and redistribute the material in any medium or format for any purpose, even commercially. You can also adapt it, transform it or remit it.
You just need to give the appropriate credit.
```markdown
Example in markdown
[EggFlix](https://github.com/CPNV-RIA1/RIA-EggFlix)
```

## Credits
### CC-BY
[Login Form V05 - Colorlib](https://colorlib.com/wp/template/login-form-05/)
### MIT
[PIGGA FREE CSS TEMPLATE - Free CSS](https://www.free-css.com/free-css-templates/page277/pigga)

## Contact

* If needed you can create an issue on GitHub we will try to respond as quickly as possible.
