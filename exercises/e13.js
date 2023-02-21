
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let accountWithDepositsLess2000 = [];
  for (let i = 0; i < array.length; i++) {
    let depositSum = 0;
    if ((array[i].deposits)){
      for (let j = 0; j < (array[i].deposits).length; j++) {
        depositSum += array[i].deposits[j];
      }
    }
    if (depositSum < 2000 || !(array[i].deposits)) {
      accountWithDepositsLess2000.push(array[i]);
    }
  }
  return accountWithDepositsLess2000;
}







// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
