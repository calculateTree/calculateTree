var ravno = document.querySelector(".ravno")
var sbros = document.querySelector(".sbros")

var nine = document.querySelector(".nine")
var eight = document.querySelector(".eight")
var seven = document.querySelector(".seven")
var six = document.querySelector(".six")
var five = document.querySelector(".five")
var four = document.querySelector(".four")
var three = document.querySelector(".three")
var two = document.querySelector(".two")
var one = document.querySelector(".one")
var zero = document.querySelector(".zero")
var tochka = document.querySelector(".tochka")


var plus = document.querySelector(".plus")
var minus = document.querySelector(".minus")
var multiple = document.querySelector(".multiple")
var divide = document.querySelector(".divide")

var tablo = document.querySelector(".display")

nineVal = nine.value
var y
var znak



nine.addEventListener("click", function() {
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
  tablo.textContent += nineVal
  y = parseFloat(tablo.textContent)
  return tablo.textContent
})
eight.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += eight.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
seven.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += seven.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
six.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
    tablo.textContent += six.value
    y = parseFloat(tablo.textContent)
    return tablo.textContent
})
five.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += five.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
four.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += four.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
three.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += three.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
two.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += two.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
one.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += one.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
zero.addEventListener("click", function(){
	if (tablo.textContent == "+" || tablo.textContent == "-" || tablo.textContent == "/" || tablo.textContent == "X") {
		znak = tablo.textContent
		tablo.textContent = ""
	}
	tablo.textContent += zero.value
	y = parseFloat(tablo.textContent)
	return tablo.textContent
})
tochka.addEventListener("click", function(){
	tablo.textContent += tochka.value
	return tablo.textContent
})

plus.addEventListener("click", function(){
	x = parseFloat(tablo.textContent)
	tablo.textContent = plus.value
	var pls = tablo.textContent
	return pls
})
minus.addEventListener("click", function(){
	x = parseFloat(tablo.textContent)
	tablo.textContent = minus.value
	var mns = tablo.textContent
	return mns
})
multiple.addEventListener("click", function(){
	x = parseFloat(tablo.textContent)
	tablo.textContent = multiple.value
	var mltp = tablo.textContent
	return mltp
})
divide.addEventListener("click", function(){
	x = parseFloat(tablo.textContent)
	tablo.textContent = divide.value
	var div = tablo.textContent
	return div
})
ravno.addEventListener("click", function(){
  console.log(typeof x)
  console.log(typeof y)
  if (znak === "+") {
  	tablo.textContent = x + y
  }
  else if (znak === "-") {
  	tablo.textContent = x - y
  }
  else if (znak === "X") {
  	tablo.textContent = x * y
  }
  else if (znak === "/") {
  	tablo.textContent = x / y
  }
})
sbros.addEventListener("click", function(){
	tablo.textContent = ""
})