var express = require('express');
var router = express.Router();
var mysql= require('mysql');
router.post('/user-reg',function(req,res){
         var u= req.body.uid;
         var p=req.body.pwd;
         var e=req.body.email;
         var m=req.body.phone;

    var con=mysql.createConnection({
      host:'localhost',
      database:'auth',
      user:'root',
      password:''
    });

    con.connect(function(e,s){
        if(e){
          res.send('db conn error');
        }
    })

  var q="insert into users(uid,pwd,email,phone) values('"+u+"','"+p+"','"+e+"','"+m+"')";
  con.query(q,function(e,r){
       if(e){
         res.send(e);
       }else{
         res.send(r);
       }
  })
})


router.post('/login-check',function(req,res){
     var u=   req.body.uid;
     var p=   req.body.pwd;

     var con=mysql.createConnection({
      host:'localhost',
      database:'auth',
      user:'root',
      password:''
    });

    con.connect(function(e,s){
        if(e){
          res.send('db conn error');
        }
    });

    var q="select * from users where uid='"+u+"' and pwd='"+p+"'";

    con.query(q,function(e,r){
        if(e){
          res.send(e);
        }else{
          res.send(r);
        }
    });
})

router.get('/users-list',function(req,res){
  var con=mysql.createConnection({
    host:'localhost',
    database:'auth',
    user:'root',
    password:''
  });

  con.connect(function(e,s){
      if(e){
        res.send('db conn error');
      }
  });

  var q="select *from users";

  con.query(q,function(e,r){
      if(e){
        res.send(e);
      }else{
        res.send(r);
      }
  })
})

router.get('/user-info',function(req,res){
    var uid=req.query.uid;
    var con=mysql.createConnection({
      host:'localhost',
      database:'auth',
      user:'root',
      password:''
    });
  
    con.connect(function(e,s){
        if(e){
          res.send('db conn error');
        }
    });

    var q="select *from users where uid='"+uid+"'";

    con.query(q,function(e,r){
      if(e){
        res.send(e);
      }else{
        res.send(r);
      }
    })

})


router.post('/update-user',function(req,res){
     var uid=req.body.uid;
     var pwd=req.body.pwd;
     var email=req.body.email;
     var phone=req.body.phone;
  
     var con=mysql.createConnection({
      host:'localhost',
      database:'auth',
      user:'root',
      password:''
    });
  
    con.connect(function(e,s){
        if(e){
          res.send('db conn error');
        }
    });

    var q="update users set pwd='"+pwd+"', email='"+email+"', phone='"+phone+"' where uid='"+uid+"'";
    con.query(q,function(e,r){
        if(e){
          res.send(e);
        }else{
          res.send(r);
        }
    });
})
module.exports = router;
