// Chapter 1 - Q1
let a = "Harry"
let b = 6
console.log(a + b) // due to this we can concatenate two strings (concatenation means joining two strings)

// Chapter 1 - Q2
console.log(typeof (a + b))

// Chapter 1 - Q3
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45 // we can't change the value of const so a1 can't hold a number later.
// a1 = {}

// Chapter 1 - Q4
a1['friend'] = "Shubham" // 
a1['name'] = "Lovish"
console.log(a1)

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
  aver: "to assert or affirm with confidence",
  telluric: "of or proceeding from the earth or soil."
}

console.log(dict['yakka'])
