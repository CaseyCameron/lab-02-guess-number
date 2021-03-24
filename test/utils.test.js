// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('check values of compareNumbers', (expect) => {

    const actualHigh = compareNumbers(10, 1);
    const actualLow = compareNumbers(1, 10);
    const actualMatch = compareNumbers(1, 1);

    expect.equal(actualHigh, 'Too high', 'The number guessed is higher');
    expect.equal(actualLow, 'Too low', 'The number guessed is lower');
    expect.equal(actualMatch, 'You win!', 'You guessed the number');
});
