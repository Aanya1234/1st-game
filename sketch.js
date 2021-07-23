

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');
function setup(){
  var b2 = createButton("Click here to swap");
  b2.mousePressed(swap)
  }


function draw()
{
}
function swap()
{ [a,b]=[b,a]
  console.log('the value a after swaping: '+a)
  console.log('the value a after swaping: '+b)
}