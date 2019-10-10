var a = require("a.js") ;

console.log("这里是common.js哟");
function sayHello(str) {
  console.log('common say hello : ' + str) ;
}

module.exports = {
  sayHello : sayHello,
}