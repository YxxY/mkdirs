# mkdirs
make directory recursively and asynchronously in node.js

# Example
## example.js
```js
var mkdirs = require('utils-mkdirs')

mkdirs('/path/to/dir', (err, fp)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(fp)
    //do something else
})

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
    npm i https://github.com/YxxY/mkdirs.git --save

## import
    var mkdirs = require('utils-mkdirs')

## arguments
    mkdirs(dirpath [,mode] [,callback])
- dirpath: [required] {string|buffer} relative or absolute path 
- mode: [options]  {string|number} default 777 which will finally convert to an oct number
- callback: [options] {function} a function with two paras: `err`,`fp`. if everything is find. `err` will be `null` and `fp` refers to the dirpath you created.

# Test
    npm test

# Tips
make sure you have the permission to create the aimed directory. Once the directory exist already, nothing will happend.

