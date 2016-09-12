module.exports=function(dirname,ext,cb){
  var fs = require( 'fs');
  fs.readdir(dirname,function(err,data){
    if(err)return cb(err);
    var list=[];
    var path=require('path');
    data.forEach(function(e,i){
      if(path.extname(e)==='.'+ext)
        list.push(e);
    });
    return cb(null,list);
  });
}
