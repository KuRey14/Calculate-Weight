// Calculator for tips!

function tipCalculator (quality, total) {
  if (quality === 'bad') {
    return total / 20;
  } else if (quality === 'ok') {
    return total / 20 * 3;
  } else if (quality === 'good') {
    return total / 5;
  } else if (quality === 'excellent') {
    return total / 20 * 6;
  } else {
    return total * 0.18;
  }
}

//Return the tip, as a number, based on the following:
// ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%

 console.log(tipCalculator('ok', 100)) // Enter value!
