var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let address = 'mongodb://127.0.0.1:27017/cake';

router.get('/',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let index_top = db.collection('index_top');
    if(err) throw err;
    index_top.find().toArray(function(err,result){
      if(err) throw err;
        res.send(result);
    })
  });
});

router.get('/index_middle',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let index_middle = db.collection('index_middle');
    if(err) throw err;
    index_middle.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});

router.get('/index_bottom',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let index_bottom = db.collection('index_bottom');
    if(err) throw err;
    index_bottom.find().toArray(function(err,result){

      if(err) throw err;
      res.send(result);
    })
  });
});


router.get('/index_bottom',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let index_bottom = db.collection('index_bottom');
    if(err) throw err;
    index_bottom.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});




router.get('/block',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let block = db.collection('block');
    if(err) throw err;
    block.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});


router.get('/spxq',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let spxq = db.collection('spxq');
    if(err) throw err;
    spxq.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});

router.get('/allgoods',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let allgoods = db.collection('allgoods');
    if(err) throw err;
    allgoods.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});



router.get('/mydg',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let mydg = db.collection('mydg');
    if(err) throw err;
    mydg.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});



router.get('/mygroup',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let mygroup = db.collection('mygroup');
    if(err) throw err;
    mygroup.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});
//
router.get('/user',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let user = db.collection('user');
    if(err) throw err;
    user.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});
// router.post('/reg', function(req, res, next) {
//   let username = req.body['username'];
//   let password = req.body['password'];
//   let nikename = req.body['nikename'];
//   let data={username,password,nikename};
//   mongoCt.connect(address,function(err,db){
//     if(err) throw err;
//     let user = db.collection('user');
//     user.find({username}).toArray(function(err,result){
//       if(result.length>0){
//         res.send('用户名已存在');
//       }else{
//         user.insertOne(data,function(err,result){
//           if(err) throw err;
//           res.send('注册成功');
//         });
//       }
//     });
//   });
// });
//
// router.post('/login', function(req, res, next) {
//   let username = req.body['username'];
//   let password = req.body['password'];
//   let data={username,password};
//   mongoCt.connect(address,function(err,db){
//     if(err) throw err;
//     let user = db.collection('user');
//     user.find(data).toArray(function(err,result){
//       // console.log(result);
//       if(result.length>0){
//         req.session['user']=result[0].username;//保存session_id
//         res.redirect('/users');
//       }else{
//         res.send('登录失败');
//       }
//     });
//   });
// });

router.post('/regist', function(req, res, next) {
  let username = req.body['username'];
  let password = req.body['password'];
  let data={username,password};
  mongoCt.connect(address,function(err,db){
    if(err) throw err;
    let user = db.collection('user');
    user.find({username}).toArray(function(err,result){
      if(result.length>0){
        res.send('用户名已存在');
      }else{
        user.insertOne(data,function(err,result){
          if(err) throw err;
          res.send('注册成功');
        });
      }
    });
  });
});

router.post('/login', function(req, res, next) {
  let username = req.body['username'];
  let password = req.body['password'];
  let data={username};
  mongoCt.connect(address,function(err,db){
    if(err) throw err;
    let user = db.collection('user');
    user.find(data).toArray(function(err,result){
      if(result.length > 0){
        if(result[0].username == username && result[0].password == password){
          res.send('success'+ result[0].username);
        }else{
          res.send('forget');
        }
      }else{
          res.send('error');
      }
    });
  });
});



router.post('/zhmm', function(req, res, next) {
  let username = req.body['username'];
  let password = req.body['password'];
  let data={username};
  mongoCt.connect(address,function(err,db){
    if(err) throw err;
    let user = db.collection('user');
    user.find(data).toArray(function(err,result){

      if(result.length > 0){
        if(result[0].username == username && result[0].password == password){
          res.send('success' + result[0].username);
        }else{
          res.send(result[0].password)
        }
      }else{
        res.send('error');
      }
    });
  });
});

module.exports = router;


