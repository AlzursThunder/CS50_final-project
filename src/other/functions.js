// mostly for Button component
// allows to show / hide specific components 
const click = (displayState) => {
    displayState(prev => !prev)
}

// connects to API and fetch for data
async function getApi(link, setState, text) {
    const res = await fetch(link)
    const data = await res.json()
    setState(() => data[text])
}

// returns random integer from range <min, max)
const randNum = (min, max) => Math.floor(Math.random() * (max - min) + min)

// shuffles order of the array
// used to change order of the answers so correct one is not always leftmost one
function shuffleArr(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// updates state using data from inputs
function handleChanges(event, state) {
    state(prevOptions => ({
        ...prevOptions, 
        [event.target.name]: event.target.value
    }))
}

// checks if user specified amount of options
function validateOptions(minRange, maxRange, questionsAmount, validateQuestions, renderPlayground) {
    validateQuestions(() => {
        if (isNaN(questionsAmount)) {
            return false
        }
        if (questionsAmount >= minRange && questionsAmount <= maxRange) {
            renderPlayground()
            return true
        }
        return false
    })
}

export {
    click,
    getApi, 
    randNum, 
    shuffleArr, 
    handleChanges,
    validateOptions
}