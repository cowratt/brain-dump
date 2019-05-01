const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('scotty', () => {
  expect(validateEmail('@scotty.thotty')).toBeFalsy();
});

test('grandma', () => {
  expect(validateEmail('Hello, my grandson set up an email for me, is this the @google mail? please send me to the google mail thank you. Nathan. Show Nathan. Google, show me pictures of my grandson Nathan please. Hello?')).toBeTruthy();
});

test('coolzone1992@hotmail.com', () => {
  expect(validateEmail('cool.zone1992@hotmail.com')).toBeTruthy();
});