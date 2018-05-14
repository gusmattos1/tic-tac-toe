var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')
var message = document.getElementById('message')
var turn = document.getElementById('player')
var th=document.querySelectorAll('th')
var count = 0

var player = function (x) {
  turn.innerText='\"' + x + '\" is your turn'
}

var error = function () {
  message.innerText = 'Please select a empty field!'
  message.style.color='red'
}

var normalize = function () {
  message.innerText = ''
}
th.forEach(function (element) {

element.addEventListener('click', function (e) {
  if (count%2 === 0 ) {
      if (e.target.innerText=='O' || e.target.innerText=='X') {
        error()
      } else {
        e.target.innerText='X'
        count ++
        normalize()
        player('O')
      }
    } else{
      if (e.target.innerText=='X' || e.target.innerText=='O') {
        error()
      } else {
        e.target.innerText='O'
        count ++
        normalize()
        player('X')
      }
    };


    resu = []
    resu.push(one.innerText + two.innerText + three.innerText)
    resu.push(four.innerText + five.innerText + six.innerText)
    resu.push(seven.innerText + eight.innerText + nine.innerText)
    resu.push(one.innerText + five.innerText + nine.innerText)
    resu.push(three.innerText + five.innerText + seven.innerText)
    resu.push(one.innerText + four.innerText + seven.innerText)
    resu.push(two.innerText + five.innerText + eight.innerText)
    resu.push(three.innerText + six.innerText + nine.innerText)


  if (resu.includes('XXX')) {
    turn.innerText = '\"X\" you WIN!!!'
  } else if (resu.includes('OOO')) {
    turn.innerText = '\"O\" you WIN!!!'
  }

});
})
