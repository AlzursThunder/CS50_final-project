// const click = (displayState, questionState) => {
//     displayState(prev => !prev)
//     questionState(getApi)
// }

async function getApi(link, setState, text) {
    const res = await fetch(link)
    const data = await res.json()
    setState(() => data[text])
}

const randNum = (min, max) => Math.floor(Math.random() * (max - min) + min)

function shuffleArr(arr) {
    // for (let i = arr.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [arr[i], arr[j]] = [arr[j], arr[i]];
    // }
    arr.sort(() => Math.random() - 0.5);
}

export { getApi, randNum, shuffleArr }