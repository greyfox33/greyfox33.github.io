##  Environment Setup

Must have [Node.js](http://www.nodejs.org), `npm` , and Jekyll installed on your machine. 

#### Installing Node.js and npm
You can download the installer directly from the [web site](http://www.nodejs.org). 

Using **Homebrew**:

    brew install node

Using **MacPorts**:

    port install nodejs

#### [Installing Jekyll](https://jekyllrb.com/docs/installation/) 
*Ruby (v2 or above for Jekyll 3)*

    gem install jekyll

#### Install other env dependencies

[Gulp.js](http://www.gulpjs.com) to automate workflow and [Bower](http://www.bower.io) to manage packages.

To install globally, in terminal run:

    npm install -g gulp gulp-cli bower


## Project Development

1. From the root of the project you will need run `bundle install`, `npm install` and `bower install` to install project dependencies.
2. To run project in development run `gulp`