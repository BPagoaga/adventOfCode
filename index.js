const DIGITS = 1323465431;
const EXAMPLES = [
    1122,
    1111,
    1234,
    91212129
];

const EXAMPLE_ANSWERS = [
    3,
    4,
    0,
    9
]

EXAMPLES.map((ex, i) => test(ex, i))

function test(ex, i) {
    const answer = solveCaptcha(ex);
    console.log(answer === EXAMPLE_ANSWERS[i] ? 'pass' : 'fail')
}

function solveCaptcha(int) {
    // the algo to solve the captach is here
    result = 0
    return result;
}