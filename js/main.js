var theData2 = '{"Jane":{"age":"29", "degree":{"AAS":"VMI", "BA":"UVA"}}, "Jim":{"age":"49", "degree":{"AAS":"VMI", "BA":"UVA"}}}';
var myObj = JSON.parse(theData2);
console.log(myObj);

// document.getElementById('message').innerHTML = myObj.Jim.age;
document.getElementById('message').innerHTML = myObj.Jane.degree.BA;