// var admin = require("firebase-admin");

// var serviceAccount = require("../../configs/c-school-apps-firebase-adminsdk-z3osd-9b5c9dbae7.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://c-school-apps.firebaseio.com"
// });
var firebase=require('firebase')

//listenFirebase();
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const insertfirebase = async function (data) {

  var _id = makeid(15);
  var dbRef = firebase.database().ref();
  var dbNoti = dbRef
  
      .child("notifications/" + data.nguoiTao + "/" + _id);
  dbNoti.set({
      _id:_id,
      ngaytao: data.gioTao,
      nguoiTao: data.nguoiTao,
      hinh: data.hinh,
      noiDung: data.noiDung,
      chuDe:data.chuDe,
      IsBadge: false,

  });
  return{
    idFirebase :_id
  }
 
}
const updatefirebase = async function (data) {


  var dbRef = firebase.database().ref();
  var dbNoti = dbRef
  
      .child("notifications/" + data.nguoiTao + "/" + data.idfirebase);
  dbNoti.set({
      _id:data.idfirebase,
      ngaytao: data.gioTao,
      noiDung: data.noiDung,
      chuDe:data.chuDe,
      IsBadge: false,
      nguoiTao: data.nguoiTao,
      hinh: data.hinh,
  });
  return{
    idFirebase :data.idfirebase
  }
 
}
const deletefirebase = async function (user,id) {

  var dbRef = firebase.database().ref();
  dbRef .child("notifications/" +   user.id + "/"+ id).remove();
}
module.exports = {
  insertfirebase:insertfirebase,
  updatefirebase:updatefirebase,
  deletefirebase:deletefirebase
}