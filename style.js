




var mydata = JSON.parse(data);
var x,y,a;
y=0;


// console.log(x);
//   var list = document.getElementsByClassName("post-preview1")[0];
//   list.getElementsByClassName("title")[x].innerHTML = mydata[x].title;

for  (x=0; x<=4; x++){


  var list = document.getElementsByClassName("post-preview1")[0];
  list.getElementsByClassName("title")[x].innerHTML = mydata[x].title;
  list.getElementsByClassName("subtitle")[x].innerHTML = mydata[x].subtitle;
  list.getElementsByClassName("name")[x].innerHTML = mydata[x].name;
  list.getElementsByClassName("date")[x].innerHTML = mydata[x].date;

console.log(x);




}






console.log('a');
