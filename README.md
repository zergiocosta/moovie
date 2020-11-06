# moovie app

Information about upcoming movies

## Summary

- [Intro](#intro)
- [Requirements](#requirements)
- [Init](#init)
- [Builds](#builds)
- [Project sctructure](#project-structure)
- [Good practices](#good-practices)
- [Versioning](#versioning)


## [Intro](#intro)

This document has every needed information in order to get the local environment working properly

> **IMPORTANT:** Read the [Rules](#rules) of the development.

> **IMPORTANT:** This app connects to a third party API. It's really important for it to be working properly so the app could show its functionalities. Postman collection and environment available in `./misc/postman-config/`


## [Requirements](#requirements)

To fully run the project on both iOS and Android you must have the following installed:

- [XCode & CocoaPods]()
- [Android Studio]()
- [NodeJS]()
- [Watchman]()


## [Init](#init)

The first step is to clone the repo from GitHub:

- **Clone it**: `$ git clone https://github.com/zergiocosta/moovie.git`
- **cd into it:** `$ cd moovie`

Now it's time to install the dependencies:

- **Installing dependencies**: `$ yarn`

Everything setup. Enjoy:

- Running on iOS: `$ make run-ios`
- Running on Android: `$ make run-android`
- Running release build on Android: `$ make run-android-release`

## [Builds](#builds)

In order to release make release builds please use the following commands:
- **Build Android release binary**: `$ make build-android`
- **Build iOS release xcode project**: `$ make build-ios`


## [Project sctructure](#project-structure)

```
.
└── src/
    ├── __tests__/
    ├── android/
    ├── ios/
    ├── misc/
    │   └── postman-config/ 
    └── src/
        ├── components/
        │   ├── BounceInUpAnim/
        │   ├── CardMovie/
        │   ├── CardMovieInfo/
        │   ├── FadeInUpAnim/
        │   ├── ImageWithEffect/
        │   ├── ProductionCompany/
        │   ├── SingleHeading/
        │   ├── Tag/
        │   ├── TextLg/
        │   ├── TextMd/
        │   └── TextSm/
        ├── helpers/
        ├── interfaces/
        ├── pages/
        │   ├── Feed/
        │   └── Single/
        └── services
```


## [Good practices](#good-practices)

- Avoid unecessary comments. They are bad! Make your names and code clean so you don't need them everywhere!

The project uses:

- **Prettier**
- **EditorConfig**


## [Versioning](#versioning)

**Branch definitions**

- `develop` is the main branch
- `master` is the production mirror

**Versioning rules**

- Always clone the `develop` branch to your local environment.
- For each new `feature` or `hotfix`, create a new branch from `develop` and as it is done, send a merge request back to `develop`
- If you are implementing new features/resources, create your branch by following the pattern: `feature/<feature_name>`
- If you are fixing a bug or adjusting something, create your branch by following the pattern: `hotfix/<bug_name>`

**Version release**

`$ git checkout -b release/v1.0.1 && git push origin release/v1.0.1`

- **After it is done, we create a "versioned" tag:** `$ git tag -a v1.0.1 -m "Awesome release"`
- **We register the tag:** $ git tag v1.0.1
- **We check whether the tag was created or not and push to the remote repository:** `$ git show v1.0.1 && git push origin v1.0.1`
- **Now we finally merge it into _master_** `$ git checkout master && git merge --no-ff release/v1.0.1 && git push origin master`


***

> It was built for a take-home ReactNative assignment
