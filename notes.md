# 1.- Hello World

### Install requirements
```bash
$ npm install -g create-react-app
```

### Create app
```bash
$ create-react-app my-app
```

### Create Hello World app
```bash
$ cd my-app
$ rm -f src/*
$ touch src/index.css
$ touch src/index.js
```
Open your editor and paste this
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```

### Run the app
```bash
$ npm start
```
Check your 'Hello World' on localhost:3000