var theData2 = '{"Jane":{"age":"29", "degree":"MFA"}, "Jim":{"age":"49", "degree":"MA"}}';
var myObj = JSON.parse(theData2);
console.log(myObj);

// document.getElementById('message').innerHTML = myObj.Jim.age;
document.getElementById('message').innerHTML = myObj.Jane.age;