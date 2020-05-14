//Single Level JSON Data
 var theDatal = '{"first":"Paul", "last":"Cheney", "city":"Salem"}';
 var myObj = JSON.parse(theDatal);
 console.log(myObj);
 
//  document.getElementById('message').innerHTML = myObj.last;
 document.getElementById('message').innerHTML = myObj.city;