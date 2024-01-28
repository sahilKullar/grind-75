/* eslint-disable no-console */
/* eslint-disable no-plusplus */

/*
 * Time - O(max(n,m))
 * Space - O(max(n,m))
 */

function addBinary(str1, str2) {
  const result = []; // To store the binary sum
  let carry = 0; // To keep track of the carry during addition

  // Initialize pointers to the end of the binary strings
  let pointerOne = str1.length - 1;
  let pointerTwo = str2.length - 1;

  // Iterate through the binary strings from right to left
  while (pointerOne >= 0 || pointerTwo >= 0) {
    // Get digits (0 or 1) from strings at pointer positions,
    // if either pointer goes beyond the string's length, then 0 is used.
    const digitOne = pointerOne >= 0 ? parseInt(str1[pointerOne], 10) : 0;
    const digitTwo = pointerTwo >= 0 ? parseInt(str2[pointerTwo], 10) : 0;

    // Calculate the sum of current digits and carry
    const totalSum = digitOne + digitTwo + carry;

    // Calculate the current digit value (0 or 1)
    const currentDigit = totalSum % 2;

    // Update the carry for the next iteration
    carry = Math.floor(totalSum / 2);

    // Add the current digit to the result
    result.push(currentDigit);

    // Move the pointers to the left
    pointerOne--;
    pointerTwo--;
  }

  // If there's still a carry left, add it to the result
  if (carry) {
    result.push(carry);
  }

  // Reverse the result array
  // Convert each digit in the result array to a string and join them
  return result.reverse().join('');
}

// Driver code
function main() {
  const strOneList = ['1100', '1010100', '10101', '1111', '10101100110010101'];
  const strTwoList = [
    '0011',
    '0100011',
    '01010',
    '11111',
    '1011001010110010100',
  ];

  for (let i = 0; i < strOneList.length; i++) {
    console.log(`${i + 1}.\tFirst input string:  ${strOneList[i]}`);
    console.log(`\tSecond input string: ${strTwoList[i]}`);

    console.log(`\tBinary Sum: ${addBinary(strOneList[i], strTwoList[i])}`);
    console.log('-'.repeat(100));
  }
}

main();
