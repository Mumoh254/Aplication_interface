

const  http   =  require('http');
const fs =  require('fs');
const url = require('url');

http.createServer(( req ,  res)=>{

      let  parsedUrl = url.parse(req.url, true);
      let   jsFile =  fs.readFileSync("./products.json", "utf-8");

    if (parsedUrl.pathname=== '/products'  &&  req.method == 'GET'  && parsedUrl.query.id==undefined) {

       let data =  fs.readFile("./products.json", 
       "utf-8", (err, data)=>{
        
        if (err==null) {

            res.end(data);
        } else {

            res.end ("error handling  data")
        }

       })
    } else if  (parsedUrl.pathname=== '/products'  &&  req.method == 'GET'  && parsedUrl.query.id!=undefined) {
        
        let query  =  JSON.parse(jsFile);
        let  product  =   query.find((jsFile)=>{
                      
                   return product.id==parsedUrl.query.id;
                   res.end(product);


        })
        
    }

}).listen(5000)


