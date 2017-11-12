var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/ponder9');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/calculateRate', function(request, response) {
  
    var result = 0;
  
    //get the operation....
    var operation = request.param('operation');
    
    //get the numbers.. 
    var mailType = request.param('mailType'); //said to be deprecated?
        
    var w = request.param('weight');
    var w = parseInt(w);
  
    console.log(mailType);
    console.log(w);
    
    //perform the operation  
    if (mailType == 'LS'){
      if(w <= 1){
        result = 0.49;
      }
      else if(w > 1 && w <=2){
        result = 0.70;
      }
      else if(w > 2 && w <= 3){
        result = 0.91;
      }
      else if(w > 3 && w <=3.5){
        result = 1.12;
      }
    }
    
    
    if (mailType == 'LM'){
      if(w <= 1){
        result = 0.46;
      }
      else if(w > 1 && w <=2){
        result = 0.67;
      }
      else if(w > 2 && w <= 3){
        result = 0.88;
      }
      else if(w > 3 && w <=3.5){
        result = 1.09;
      }
    }
    
    
    if (mailType == 'PC'){
      result = (0.34 * w);
    }
    
    
    if(mailType =='LE'){
      if(w <= 1){
        result = 0.98;
      }
      else if(w > 1 && w <=2){
        result = 1.19;
      }
      else if(w > 2 && w <= 3){
        result = 1.40;
      }
      else if(w > 3 && w <= 4){
        result = 1.61;
      
      }else if(w > 4 && w <= 5){
        result = 1.82;
      }
      else if(w > 5 && w <= 6){
        result = 2.03;
      }
      else if(w > 6 && w <= 7){
        result = 2.24;
      }
      else if(w > 7 && w <= 8){
        result = 2.45;
      }
      else if(w > 8 && w <= 9){
        result = 2.66;
      }
      else if(w > 9 && w <= 10){
        result = 2.87;
      }
      else if(w > 10 && w <= 11){
        result = 3.08;
      }
      else if(w > 11 && w <= 12){
        result = 3.29;
      }
      else if(w > 12 && w <=13){
        result = 3.50;
      }
    }
    
    if(mailType =='FCPS'){
      if(w <= 4){
        result = 3.00;
      }else if(w > 4 && w <= 5){
        result = 3.16;
      }
      else if(w > 5 && w <= 6){
        result = 3.32;
      }
      else if(w > 6 && w <= 7){
        result = 3.48;
      }
      else if(w > 7 && w <= 8){
        result = 3.64;
      }
      else if(w > 8 && w <= 9){
        result = 3.80;
      }
      else if(w > 9 && w <= 10){
        result = 3.96;
      }
      else if(w > 10 && w <= 11){
        result = 4.19;
      }
      else if(w > 11 && w <= 12){
        result = 4.36;
      }
      else if(w > 12 && w <=13){
        result = 4.53;
      }
    }
    
    console.log(result);
    response.render('pages/getRate', { result: result });
  
});