let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

// ab hum ek empty string le lenge jisme aapna result store karenge aur input me dikhayenge
let string = ''

// ab hme sare buttons chaiye to hum array bana lete he buttons ka

let arr = Array.from(buttons) // he hme array bana ke de dega buttons ka jiska nam hamne rakha he arr

arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') 
    {
      string = eval(string) // eval is a inbuild function in js , which evaluates whaterewar the contenct present in the string
      input.value = string
    } 
    
    else if (e.target.innerHTML == 'AC') 
    {
      string = '' // agar koi all clear button ko press karega to hamari string empty ho jayegi aur iss string ki value ko hum aapni input tag me show kardenge
      input.value = string;
    }

    else if (e.target.innerHTML == 'DEL'){ 
      // aagar koi ispe click karta hai to hum aapni string me se last vala jo v digit he use  hme remove karna he  , uske lia hum substring function use karenge (jo hme sub string return karke degi)
      string = string.substring(0,string.length-1); // 0 se lekar ek digit kam yani ki last wala gayab
      input.value = string;
    }
    
    else{
      // agar clicked button =  nhi he to hum string me add karte chale jayenge  aur o string hme input box me dikhegi
      string += e.target.innerHTML
      input.value = string // jub v aap press karoge o input me dikhega
    }
  })
})
