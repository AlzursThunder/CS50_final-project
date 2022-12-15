const click = (state) => state(prev => !prev)

async function getApi(link, setState, text) {
    const res = await fetch(link)
    const data = await res.json()
    setState(() => data[text])
}

const randNum = (max, min) => Math.floor(Math.random() * (max - min) + min)

export { click, getApi, randNum }