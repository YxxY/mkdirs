
/**
 * Creates a directory and all its parent directories in a
 * asynchronous way with a optional callback
 *
 * var mkdirs = require('utils-mkdirs')
 * mkdirs('absolute/or/relative/path/to/dir', (err, fp)={
 *     if(err){
 *         console.log(err)
 *         return
 *     }
 *     console.log(fp)
 * })
 *
 * Parameters:
 *  - dirs <string|buffer>
 *  - [optionals] mode <number|string> 
 *  - [optionals] callback <function>
 *  
 * return:
 *     undefined
 * 
 */


var fs = require('fs')
var path = require('path')

module.exports = mkdirs

function mkdirs(dirpath, mode, callback){
    var cb, cmode
    if(mode && typeof mode === 'function'){
        cb = mode
        mode = 777
    }
    if(!cb)
        cb = callback

    cmode = mode?parseInt(mode, 8):parseInt(777, 8)
    if(Object.prototype.toString.call(dirpath) !== '[object String]' && !Buffer.isBuffer(dirpath)){
        var err = new TypeError('dirpath must be a string or Buffer')
        if(!cb)
            throw err
        else
            return cb(err)
    }
    cb = cb? cb: new Function()

    fs.stat(dirpath, function(err, stat){
        if(err) {
            mkdirs(path.dirname(dirpath), function(){
                try{
                    fs.mkdir(dirpath, cmode, function(err){
                        if(err)
                            return cb(err)
                        cb(null, dirpath)
                    })
                }catch(err){
                    return cb(err)
                }
            })
        }else
            cb(null, dirpath)
    })
}

