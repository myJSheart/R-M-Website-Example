# Web Site for Interviewing
## Overview

This web site is a demo for interview examiners.

It is a website of an information technologies tranning organization. Please note that this organization does not exists and this website is totally for interviewing.

## Packages

All packages that I used can be found in [init.sh](init.sh)

Server side is based on [Meteor](https://www.meteor.com).
The front-end follows Google's [Material Design Standard](https://material.google.com) and is based on [ReactJS](http://reactjs.com). Therefore, several UI libraries are used:
* [material-ui](http://www.material-ui.com/#/)
* [react-mdl](https://react-mdl.github.io/react-mdl/)
* [react toolbox](http://react-toolbox.com/#/)
* [Ant Design](https://ant.design)

The animation part are developed on [Ant Motion](https://github.com/ant-design/ant-motion/) and [react-motion](https://github.com/chenglou/react-motion).

* Internationlization: [TAPi18n](https://atmospherejs.com/tap/i18n)
* Time Format: [Moment.js](http://momentjs.com/)
* Code Styles: [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

Router:
[react-router](https://github.com/ReactTraining/react-router)

Markdown Editor: [showdown](https://github.com/showdownjs/showdown)

Email Object:
[Meteor Email](https://atmospherejs.com/meteor/email)

Email Template:
[Mjml](https://mjml.io/)

Schema Process:
* [mongo](https://atmospherejs.com/meteor/mongo)
* [aldeed/collection2](https://github.com/aldeed/meteor-collection2)

User Account Management:
* [accounts-password](https://atmospherejs.com/meteor/accounts-password)
* [alanning:roles](https://atmospherejs.com/alanning/roles)

Password Verification and Validation:
* [zxcvbn](https://github.com/dropbox/zxcvbn)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

lint
* [Eslint](http://eslint.org/)
* [Airbnb Config File](https://www.npmjs.com/package/eslint-config-airbnb)

## Homepage

![Homepage](https://media.giphy.com/media/l2Jhuu6xaT5uHD91C/giphy.gif)

The home page are made up by 6 parts -- Header, Introduction (From the blog), Get Started(Guides), Subjects, Register/subscribe and Footer.

![Drawer](https://media.giphy.com/media/l2JhHezn1znLIzV0k/giphy.gif)

Besides, A drawer is design to provide uses an alternative way to access webpages.

## Subjects Page

![Subjects Page](https://media.giphy.com/media/l0MYyaY1JkSNKiQXS/giphy.gif)

Subjects page contain courses that the organization carries out.

## React Page

![React Page](https://media.giphy.com/media/l3vRmvnsTLGEFEkmc/giphy.gif)

The react page give a brief introduction to this course. It is compatible any size of screen.

## Guide Page

![Guide Page](https://media.giphy.com/media/3oriOc4TjckTVgKuT6/giphy.gif)

The Guide page has a navigation section with checkbox in it.

## Email

![Email Verification](https://media.giphy.com/media/3oz8xMmnk8RwKO1xHW/giphy.gif)

Register as a new student user, system will send an email to verify. Click the verification button, it will jump to a page with a token in URL.
