// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("code your future"))
/*
 SyntaxError will be diplayed  because of str varibale redecaration. it is declared twice one as parameter and another one as variable in side function.
*/