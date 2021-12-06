// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/runoob';
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     var dbase = db.db("my1");
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("my1");
//     var myobj = { name: "2", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = {
    name: String,
    age:Number,
    health:String,
    hobby:String
}
const mydata = mongoose.model('cats',schema);

// const kitty = new mydata({ name1:'testZildjian2'});
// kitty.save().then(() => console.log('testmeow1'));
// const kitty1 = new mydata({name:"zhang3",age:1,health:"good",})
// kitty1.save().then(() => console.log("new schema writed"));
mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})