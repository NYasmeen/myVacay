var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req, res) {
  var db = req.db;
  var collection = db.get('user');
  console.log(collection);

  collection.insert(req.body, function(err, result){
    res.send((err === null) ? { msg: 'Success' } : { msg:'error: ' + err });
    
  });
 
});
router.post('/login', function(req, res) {
  var db = req.db;
  var collection = db.get('user');
  console.log(collection);

  collection.find({ email: req.body.email, password: req.body.password}).toArray(function (error, results) {
    if (error) {
      console.log(err)
    } else {
      if (empty(results)) {
        res.status(400);
        res.send("Invalid username or password");
      }
      else {
        res.send("Welcome");
      }
    }
  })
    
  });
 


//  router.post('/login', function(req, res) {   
//   var getdata = {}
//   getdata.email = req.body.email
//   getdata.password = req.body.password

//   console.log(getdata.email);
//   var db = req.db;

// var collection = db.get('user',function(req,res){
//   console.log(res);

// });





//   var cursor = db.collection('user').find({ email: getdata.email, password: getdata.password}).toArray(function (error, results) {
//     if (error) {
//       console.log(err)
//     } else {
//       if (empty(results)) {
//         res.status(400);
//         res.send("Invalid username or password");
//       }
//       else {
//         res.send("Welcome");
//       }
//     }
//   })
// })
//  router.post('/login', function(req, res){
//   var db = req.db;

//   console.log(db.collection('user'));
//   // if(!req.body.email|| !req.body.password){
//   //    res.render('login', {message: "Please enter both id and password"});
//   // } else {
//   //    Users.filter(function(user){
//   //       if(user.email === req.body.email && user.password === req.body.password){
//   //          req.session.user = user;
//   //          res.redirect('/');
//   //       }
//   //    });
//   //    res.render('login', {message: "Invalid credentials!"});
//   // }

//   db.collection('user').findOne({ email }, (err, result) => {
//     if (err) {
//         console.log(err)
//         res.json({
//             message: err,
//             status: false
//         })
//     } else {
//         console.log(result)
//         if (!empty(result)) {
            
//                 if (password === result.password) {
//                   console.log("password match : ")
//                     res.redirect('/index');

//                 } else {
//                     console.log("*Password is invalid")
//                     res.redirect('/error');
//                 }
            
//         } else {
//             console.log("*Username is invalid.")
//             res.redirect('/error');
//         }
//     }
// })
// });







module.exports = router;
