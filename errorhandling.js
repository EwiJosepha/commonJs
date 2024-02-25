// typeofErrorsInNode
/* there are basically fouur types of errors
Standard JavaScript errors such as <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, and <URIError>.
System errors triggered by underlying operating system constraints such as attempting to open a file that does not exist or attempting to send data over a closed socket.
User-specified errors triggered by application code.
AssertionErrors are a special class of error that can be triggered when Node.js detects an exceptional logic violation that should never occur. These are raised typically by the node:assert module.


*/

// ErrowpropagationUsingTheStandardjsThroMechanism

// Throws with a ReferenceError because z is not defined.
try {
  const m = 1;
  const n = m + z;
} catch (err) {
  // Handle the error here.
  console.log(err);
}

//error handling for how the process will react to an unhandled promise rejection.

const fs = require('fs/promises');

(async () => {
  let data;
  try {
    data = await fs.readFile('a file that does not exist');
  } catch (err) {
    console.error('There was an error reading the file!', err);
    return;
  }
  // Otherwise handle the data
})();

//example of syntax error

try {
  require('node:vm').runInThisContext('binary ! isNotOk');
} catch (err) {
  // 'err' will be a SyntaxError.
}

//system errors
// Node.js generates system errors when exceptions occur within its runtime environment. These usually occur when an application violates an operating system constraint. For example, a system error will occur if an application attempts to read a file that does not exist.


//typre error
// Indicates that a provided argument is not an allowable type. For example, passing a function to a parameter which expects a string would be a TypeError.

require('node:url').parse(() => { });
// Throws TypeError, since it expected a string.