[![npm](https://img.shields.io/npm/v/util-mkdirs.svg)](https://www.npmjs.com/package/util-mkdirs)
[![npm](https://img.shields.io/npm/dt/util-mkdirs.svg)](https://www.npmjs.com/package/util-mkdirs)
[![Travis](https://img.shields.io/travis/YxxY/mkdirs.svg?label=linux)](https://www.travis-ci.org/YxxY/mkdirs)
[![AppVeyor](https://img.shields.io/appveyor/ci/YxxY/mkdirs.svg?label=windows)](https://ci.appveyor.com/project/YxxY/mkdirs)
[![Coveralls](https://img.shields.io/coveralls/YxxY/mkdirs.svg)](https://coveralls.io/github/YxxY/mkdirs)

# mkdirs
a lightweight package to make directory recursively and asynchronously in node.js

# Example
## example.js
```js
var mkdirs = require('util-mkdirs')
//absolute path
mkdirs('/path/to/dir', (err, fp)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(fp)
    //do something else
})

//relative path
mkdirs('./path/to/dir', (err, fp)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(fp)
    //do something else
})
```
# Usage
## install
    npm i util-mkdirs --save

## import
    var mkdirs = require('util-mkdirs')

## arguments
    mkdirs(dirpath [,mode] [,callback])
- dirpath: [required] {string|buffer} relative or absolute path 
- mode: [options]  {string|number} default 777 which will finally convert to an oct number
- callback: [options] {function} a function with two paras: `err`,`fp`. if everything is fine, `err` will be `null` and `fp` refers to the dirpath you created.

# Test
    npm install
    npm test

# Tips
make sure you have the permission to create the aimed directory. Once the directory exist already, nothing will happen.

## License
  [MIT](LICENSE)


