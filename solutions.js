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

/************************************* */
//  BANK ACCOUNT SUMMARY
/************************************* */

const bankInfo = {
    savings: 500,
    checking: 500,
    moneyMarket: 500,
    creditCard: 500
}

const bankAccountSummary = (bankAccounts) => {
    let sum = 0
    const accounts = Object.values(bankAccounts)
    accounts.forEach(account => { sum += account })
    return sum
}

let bankTotal = bankAccountSummary(bankInfo)

const inTheRed = (total) => {
    if (total < 0) {
        return true
    } else {
        return false
    }
}

