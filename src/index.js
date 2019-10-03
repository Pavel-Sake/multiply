module.exports = function multiply(first, second) {
  const firstNumber = getLineFlipping(first);
  const secondNumber = getLineFlipping(second);
  const result = [];

  for (let i = 0; i < firstNumber.length; i++) {
    for (let j = 0; j < secondNumber.length; j++) {
      const firstCurrentNumber = firstNumber[i];
      const secondCurrentNumber = secondNumber[j];
      const compositionCurrentNumbers = firstCurrentNumber * secondCurrentNumber;

      if (compositionCurrentNumbers >= 10) {
        const units = compositionCurrentNumbers % 10;
        const numberInMind = Math.trunc(compositionCurrentNumbers / 10);

        if (result[i + j] === undefined) {
          result[i + j] = units;
        } else {
          result[i + j] = units + result[i + j];
        }

        if (result[i + j + 1] === undefined) {
          result[i + j + 1] = numberInMind;
        } else {
          result[i + j + 1] = numberInMind + result[i + j + 1];
        }
      } else {
        if (result[i + j] === undefined) {
          result[i + j] = compositionCurrentNumbers;
        } else {
          result[i + j] = compositionCurrentNumbers + result[i + j];
        }
      }
    }
  }

  recountNumberArray(result);

  const resultNumber = result.reverse().join("");

  return resultNumber
};

function getLineFlipping(numbers) {
  return String(numbers).split("").reverse().join("")
}

function recountNumberArray(result) {
  for (let i = 0; i < result.length; i++) {

    if (result[i] >= 10) {
      const units = result[i] % 10;
      const numberInMind = Math.trunc(result[i] / 10);

      result[i] = units;
      result[i + 1]= numberInMind + result[i + 1];

      if (result[i + 1] === undefined) {
        result[i + 1] = numberInMind;
      }
    }
  }
}
