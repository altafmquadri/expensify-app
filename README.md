# basics-react

My own version and tutorial of how to use webpack and babel to create a back to basics react app.


# What is webpack

JavaScript is a functional programming language.  Coders solve problems. Usually you take a large problem and break it up into smaller manageable problems.  As coders we might use functions to do that. We are ‘modularizing’ our one big problem into many modules of smaller problems. 

This has benefits.  A smaller program can be tested or debugged more easily than a larger one can. This allows our code to be scalable, reusable, or interchangeable.  A good rule to follow is a function should be responsible for accomplishing just one thing.  In the end, all our functions have to come together to bring a solution to life.  Our functions are like many threads getting stitched together into fabric. A canvas for one to make art with a myriad of frameworks, packages, and available libraries.

One such library used in web development is the React library. You’ve probably used the create-react-app utility to get a site up and running quickly. We’ve heard of webpack or babel, but those terms are probably familiar solely because they are thrown around often, but do we really know what they are doing?  The create-react-app is a great sewing machine, but as developers we want to know how to take that thread and weave fabric. The writing of this piece intends for you to create your own sewing machine, while honing your skills to become a better developer, and helping you better understand how the threads are stitched together. 

When developing a web application, there are many moving parts, there’s markup languages like HTML; styles, applied via CSS; JavaScript, to give us dynamic websites; communication with servers. In order to function they have to be precisely bundled together.  Each part has to know of its relationship to the other.  On a small web app we may be able to keep track of these dependencies, but as apps become larger and do increasingly more, manually sustaining them would become next to impossible. 

Webpack solves this dilemma for us. We don’t have to worry about the myriad of dependencies in our app; rather, webpack will keep track of it like jigsaw pieces of a puzzle to render us a recognizable picture at the end.  All we have to do is tell webpack what we want by following a configuration standard with certain key elements of interest.  For our version of the create-react-app, those points of interest are entry, output, module, devtool, and devserver.  The module object will have a set of rules that are used to interpret files from loaders we will be installing.  One of those loaders is babel.

# What is Babel?
Today’s JavaScript  is an evolution of previous JavaScript versions.  The main place JavaScript runs is in browsers.  These browsers might understand previous versions of JavaScript syntax, but not the most recent.  As a developer, you might be using the most recent syntax, and you can do that because Babel, which is a compiler, allows your syntax to be converted into legacy syntax that the browser can understand. This is done via the *__babel/core__* module and *__babel/preset-env__* plugin. Babel has other converting capabilities, as well.

React uses JSX, which has an XML-like syntax, but it’s not understood nor implemented by any browser.  The only reason JSX exists is to facilitate writing tree structures with attributes, essentially HTML.  Babel can translate JSX to the browser, it does that by a plugin we install, *__babel/preset-react__*.  Another area where babel can help us is by allowing us to write easier syntax.

Writing classes in React can become cumbersome because we have to define a constructor method, call super, and finally bind methods within the constructor.  However, there is an experimental class plugin we can use to eliminate binding in the constructor and using an arrow function to have all methods have this bound to the instance of the class.  This results in a shorter syntax for declaring classes and methods in React.  It is not JavaScript, it’s syntactic sugar that the plugin *__babel/plugin-proposal-class-properties__* provides.


# Setup, Installation, and Configuration
Now that we have some basic idea of what webpack and babel are. We’ll jump in to creating our own version of create-react-app.

1. Make a directory with the name of the project you are creating `mkdir basics-react`

2. Run `npm init` in the terminal

You will see a series of prompts, this will create a package.json file, it will look somewhat like the below:
```javascript
{
  "name": "basics-react",
  "version": "1.0.0",
  "description": "A back to basics approach for creating a react app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Altaf Quadri",
  "license": "ISC"
}
```

3. Now we’ll install react and react dom via `npm i react react-dom`

4. Let’s make two additional directories src and public folder via `mkdir src public`

5. Let’s add a folder and an app.js file `mkdir src/components && touch src/app.js`

6. We’ll add an index.html file `touch public/index.html`

7. In our HTML file we will setup a template like below

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id='app'></div>
    <script src="bundle.js"></script>
</body>
</html>
```

8. Now in our components folder we’ll create a HelloWorld.js component and write up a simple hello world program `touch src/components/HelloWorld.js`

```javascript
import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        alert('I am clicked! Yay')
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}
export default HelloWorld;
```

9. And in app.js we’ll render the program like below:

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import HelloWorld from './components/HelloWorld'

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
```

10. Nothing will work as is we’ll have to install our babel and webpack utilities, here’s a list of the commands:

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack-dev-server webpack-cli webpack`

11. Let’s go to scripts and remove the test script, we’ll add two JSON key, value pairs

`"build": "webpack  --mode production"`, 

`"server": "webpack-dev-server --open"`

When we configure our webpack file, it is there that webpack will know what to do with these scripts.  Our package.json should now look like the below:

```javascript
{
  "name": "basics-react",
  "version": "1.0.0",
  "description": "A back to basics approach for creating a react app",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "server": "webpack-dev-server --open"
  },
  "author": "Altaf Quadri",
  "license": "ISC",
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@babel/core": "^7.10.1",
    "@babel/preset-env": "^7.10.1",
    "@babel/preset-react": "^7.10.1",
    "babel-loader": "^8.1.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  }
}
```

12. Let’s setup babel to use the presets, first we’ll create the .babelrc configuration file `touch .babelrc`

In the file we’ll create a JSON object to configure the presets as below:

```javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Now we can move on to configuring webpack, first create the file 

`touch webpack.config.js`

Then we’ll type the below into the file:

```javascript
const path = require('path')
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    }
}
```


The entry point in our file tells webpack where the app should kick off.  This is where the bundling will start.  Once webpack builds our dependency graph, it needs a place to output our files.  The output object requires the path and filename to be given.  The path key does not work with any special characters like we used for entry, so we use a built in method by setting a variable `const path = require('path')` and then use one of its methods, `join`, to add it to the folder where we want the output.  We use `__dirname` to get the absolute path of the folder, this will be specific to the computer you’re on.  The filename will be placed in the path provided.

The next argument in our object is the module object, this tells webpack how a particular module in your application should be dealt with, and these are governed by rules which is an array. The contents of a rule are an object, and they’re broken into three parts: conditions; results; and nested rules.  

What we have above is a check for all files that end in .js which is brought forth by our test, a regex that is looking for all files ending with the .js extension.  Part of our condition is that we are excluding the node modules with .js files.  The result of those conditions are then passed to the babel-loader which will tell webpack how it should deal with our JavaScript modules.  Later we’ll add CSS or SCSS to the rules array, so weback knows how to bundle them into our project.

The devtool key assists us in debugging, by providing source maps of our code.  When you have an error in your application, you can open the Dev tools and the console will tell you where the error took place; however, if you didn’t add the devtool key it will direct you to the compiled file, bundle.js, which will not look like the code you’ve written because this is the file that’s used to communicate with the browser. What we want is the exact component and line where the error has occurred to assist us with debugging. Adding ‘cheap-module-source-map’ to the devtool key will accomplish exactly that.  

Now we want to serve up that data using the key devServer, where we have an object with contentBase as a key in an object telling webpack where we want to serve the data from, and we included another key to tell it to serve the contents on port 3000. We will run our script: `npm run server`.  The webpage will launch with Hello World being displayed.  Let’s begin tweaking our application by adding the experimental class syntax to our project as well as the ability to compile CSS/SCSS.  

__Note__: You can close the server to make any other installations by pressing Ctrl + C in the terminal.  __You will have to close the server any time it is open, and an installation is required.__

13. We will `run npm install --save-dev @babel/plugin-proposal-class-properties`

14. Then we’ll add the plugin to our .babelrc file using the syntax below:

```javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

Let’s amend our HelloWorld component to:

```javascript
import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {}
    handleClick = () => {
        alert('I am clicked! Yay')
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}
export default HelloWorld;
```

Now we have a much shorter syntax using our experimental class plugin which eliminates the use of a constructor, and binding this to the instance of the class by using the shorter arrow function syntax.  Let’s proceed to adding our CSS/SCSS loader.

15. First we’ll install our packages:

`npm install style-loader css-loader sass-loader node-sass --save-dev `

Then we will modify our rules array by adding in an object that tells webpack what to do if it encounters a file with either .css or .scss extension by using the regex expression /\.s?css$/ , and use the loaders in the following order [‘style-loader’, ‘css-loader’, ‘sass-loader’] by converting any .scss file types, to css, and then take that css and inject it into the style loader for bundling it into our code. Our webpack.config.js now looks like this: 

```javascript
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, 
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    }
}
```

16. We’ll create a styles directory by `mkdir src/styles`

17. Then we’ll add a HelloWorld.css file `touch src/styles/HelloWorld.css`

```css
.title {
  color: green;
}
```

18. Next we’ll add a HelloWorld.scss file `touch src/styles/HelloWorld.scss`

```css
.button {
  color: red;
}
```

We will then amend our HelloWorld component to add the classNames we’ve created as well as import both our .css and .scss files into the component.

```javascript
import React, { Component } from 'react';
import '../styles/HelloWorld.css'
import '../styles/HelloWorld.scss'

class HelloWorld extends Component {
    state = {}
    handleClick = () => {
        alert('I am clicked! Yay')
    }
    render() {
        return (
            <div>
                <h1 className='title'>Hello World</h1>
                <button className='button'
                    onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}
export default HelloWorld;
```

Let’s run our server and verify that this works. You can run `npm run server` in the terminal.  

Our final tweak to the application is to use the HtmlWebpackPlugin so that our HTML files will be generated for us.  We will however, add a template just in case we want to add any script tags to our HTML file.  

19. We will take our initial index.html file which is in our public folder and move it to our src folder

20. Let’s install the plugin 

`npm install --save-dev html-webpack-plugin`

21. Amend our webpack.config.js file as per below:

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}
```

We will require the html-webpack-plugin, and we will add a plugins key which has a value of an array, in that array we will create an instance of HtmlWebpack plugin and pass an object of template pointing to the source index.html file.  

When we run our script `npm run build`, we will see all the files including the html file being served up by webpack.

## *__Bonus__*
I really like the ESLint from the create react app, so I am installing it as a package to do so you will have to install:

1. eslint-loader `npm install eslint-loader --save-dev` 

2. Then the following from the package of create react app

```javascript
npm install --save-dev eslint-config-react-app babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@4.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@2.x
```

3. Create an .eslintrc file touch .eslintrc

```javascript
{
  "extends": "react-app"
}
```

4. Then configure webpack.config.js file to use the eslint-loader.  Note: We converted *use*  value to an array. Our final module exports looks like the below:

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}
```

You now have your tailored version of a basic react app using webpack and babel.  It’s a lot we take for granted when we use a tool like create-react-app, but hopefully after reading this you have a better understanding of what’s going on under the hood.  Now it’s your turn to implement the basics-react app in your favorite editor.