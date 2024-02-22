# EggFlix

## Description

This project is designed to rent online movies and the main features are renting movies, social logins and changing language.

## Getting Started

### Prerequisites

List all dependencies and their version needed by the project as :

* IDE used PhpStorm 2023.3 or Webstorm 2023.3
* Package manager npm
* OS supported Windows 10

### Configuration

All data are saved in a google sheet, and so there's no configuration to do on our side except for accesses in an .env file.

## Deployment

### On dev environment

How to get dependencies and build?
How to run the tests?

We are using [Jest](https://jestjs.io/) as a testing framework.

This command will run all the tests
```shell
npm test
```

### On integration environment

To deploy the project first copy the project to the proper folder then duplicate the .env.example to .env and 
update it with your environment's values.

## Directory structure

* Tip: try the tree bash command

```shell
├───Docs                            
└───src                                    
    ├───bin
    │   └───Debug
    └───obj
        └───Debug
├───test                      //test classes
```

## Collaborate

* Take time to read some readme and find the way you would like to help other developers collaborate with you.

* They need to know:
  * How to propose a new feature (issue, pull request)
  * [How to commit](https://www.conventionalcommits.org/en/v1.0.0/)
  * [How to use your workflow](https://nvie.com/posts/a-successful-git-branching-model/)

* Workflow
  * [Gitflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20est%20l'un%20des,les%20hotfix%20vers%20la%20production.)
  * [Commits](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
  * Propose a new feature in [icescrum](...) 
    * We only use technical stories
  * Pull requests are oppe to merge in the develop branch.
  * Release on the main branch we use GitFlow and not with GitHub release.
  * Issues are added to the [github issues page](https://github.com/JuilletMikael/RIA-EggFlix/issues)

## License

* [jetbrain](/docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/https://www.jetbrains.com/)

## Contact

* If needed you can create an issue on GitHub we will try to respond as quickly as possible.
