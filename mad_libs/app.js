let words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

const startMadLib = () => {
    const num = prompt("Give me a number");
    words.number = num
    const adj = prompt("Give me an adjective");
    words.adjective = adj
    const plurNoun = prompt("Give me a plural noun")
    words.pluralNoun = plurNoun
    const adv = prompt("Give me an adverb")
    words.adverb = adv
    const anotherAdj = prompt("Give me another adjective")
    words.anotherAdjective = anotherAdj
}

const techStartupStory = () => {
    alert(
        `Once upon a time a group of ${words.number} General Assembly graduates 
        got together and made a startup called ${words.adjective} Technologies.
        Their goal was to create smart ${words.pluralNoun}.
        They approached the challenge ${words.adverb}
        which ultimately led them to ${words.anotherAdjective} fame.
        `
    )
}

startMadLib()
techStartupStory()
