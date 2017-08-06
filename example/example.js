 var mkdirs = require('utils-mkdirs')

 mkdirs('/path/to/dir', (err, fp)={
      if(err){
          console.log(err)
      return
      }
      console.log(fp)
 })

 mkdirs('./path/to/dir', (err, fp)={
      if(err){
          console.log(err)
      return
      }
      console.log(fp)
 })
