var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* POST users listing. */
router.post('/user-reg', function(req, res) {
    var uid=req.body.uid;
    var upwd=req.body.upwd;
    var email=req.body.email;
    var phone=req.body.phone;

    var con=mysql.createConnection({
      host:'localhost',
      database:'auth',
      user:'root',
      password:'root'
    });
    con.connect(function(e,s){
        if(e){
          res.send('db conn error');
        }
    })

    var q="insert into users(uid,upwd,email,phone) values('"+uid+"','"+upwd+"','"+email+"',"+phone+")";
    con.query(q,function(e,r){
      if(e){
        res.send(e)
      }else{
        res.send(r)
      }
    })
});

router.post('/login-check',function(req,res){
  var uid=   req.body.uid;
  var upwd=   req.body.upwd;

  var con=mysql.createConnection({
   host:'localhost',
   database:'auth',
   user:'root',
   password:'root'
 });

 con.connect(function(e,s){
     if(e){
       res.send('db conn error');
     }
 });

 var q="select * from users where uid='"+uid+"' and upwd='"+upwd+"'";

 con.query(q,function(e,r){
     if(e){
       res.send(e);
     }else{
       res.send(r);
     }
 });
})

router.get('/get-user',function(req,res){
  var con=mysql.createConnection({
    host:'localhost',
    database:'auth',
    user:'root',
    password:'root'
  });
 
  con.connect(function(e,s){
      if(e){
        res.send('db conn error');
      }
  });
 
  var q="select * from users";
 
  con.query(q,function(e,r){
      if(e){
        res.send(e);
      }else{
        res.send(r);
      }
  });
})

module.exports = router;
