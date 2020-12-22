const apiKey = "12345678910123456789101234567891012-12345678-123456789"
const db = "abc123.database.secure.windows.net"

const pg = require('pg');
const pool = new pg.Pool();
const app = require('express')();

app.get("/category/:category",function(req,res){
  
   var qurey1 = "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY = '"
              + req.params.category + 
              "' ORDER BY PRICE";
   pool.query(query1, [], function(err, results){
    //process results
   
   });
});
