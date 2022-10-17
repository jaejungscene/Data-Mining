const express = require('express');
// const cors = require('cors');
// const models = require('./models'); // import SQLite
const app = express();
app.use(express.json());
// app.use(cors());
app.use("/upload", express.static("upload"));
const port = 8080;
// const multer = require('multer'); // Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files


/*********** Storage server **********/
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function(req, file, cb){
//             cb(null, "upload/") // setting destination folder
//         },
//         filename: function(req,file,cb){
//             cb(null, file.originalname); // make name of image file as original name
//         },
//     })
// }); // designate where the file to be upload

// app.post('/images', upload.single('image'), (req,res)=>{
//     const file = req.file;
//     console.log(file);
//     res.send({
//         imageUrl : file.path
//     })
// });
/***********************************/



/*********** API server ************/
app.listen(port, ()=>{
    console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다");
    // models.sequelize.sync()
    // .then(()=>{
    //     console.log('DB 연결 성공!');
    // })
    // .catch((err)=>{
    //     console.error(err);
    //     console.log('DB 연결 에러');
    //     process.exit();
    // });
})

// import main from "../react-prac/build/static/js/main.06eb681b"
// app.get("/", (req,res)=>{
//     res.send("/Users/jaejungscene/Projects/react-prac/build/static/js/main.06eb681b.js")
// })

// get all products
app.get("/korean", (req, res)=>{
    url = req.url
    console.log(`come in ${url}`)
    res.send({
        "name":"jaejung"
    })
});
