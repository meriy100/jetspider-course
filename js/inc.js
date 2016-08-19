function f(){
  var i = 2;
  p(i++);
  p(i)
}
function d(i){
  p(i++);
  p(i)
}

f();
d(2)
j = 2;
p(j++);
p(j)
