// Your code here.
const getFirstName = function(person) {
  return person.firstName;
}

const getLastName = function(person) {
  return person.lastName;
}

const getFullName = function(person) {
  return person.firstName + ' ' + person.lastName
}

const setFirstName = function(person, newFirstName) {
  person.firstName = newFirstName; 
}

const setAge = function(person, age) {
  person.age = age;
}

const giveBirthday = function(person) {
  if('age' in person === false) {
    person.age = 1;
  }
  else {
    person.age +=1;
  }
}

const marry = function(person1, person2) {
  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
  person1.married = true;
  person2.married = true;
}

const divorce = function(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
