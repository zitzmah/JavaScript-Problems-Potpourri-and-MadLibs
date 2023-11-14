/************************************* */
//  SET ALARM
/************************************* */

function setAlarm(employed, vacationing) {
    if (employed === true && vacationing === false) {
        return true
    } else {
        return false
    }
}

/************************************* */
//  COUNT ODD NUMBERS
/************************************* */

const oddNumberCount = (number) => {
    if (number % 2 === 0) {
        return (number / 2)
    } else {
        return ((number - 1) / 2)
    }
}

/************************************* */
//  DISEMVOWELING TROLLS
/************************************* */

const trollsBeGone = (trollTalk) => {
    return (trollTalk.replace(/[aeiou]/g, ""))
}
