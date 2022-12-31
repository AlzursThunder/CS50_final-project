const allAnswers = () => 'Please choose all answers. Don\'t worry there is no penalty for wrong answers'

const questionsNumber = (min, max) => {
    return (`Please pass numbers from range ${min} to ${max}`);
    // return (`Please pass numbers from range ${min} to ${max}`)
}
questionsNumber(5, 10)
export {
    allAnswers,
    questionsNumber
}