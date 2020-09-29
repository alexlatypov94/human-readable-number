module.exports = function toReadable (number) {
    let zeroToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
  let otherNum = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if(number < 21){
      return `${zeroToTwenty[number]}`
  }

  if(number > 20 && number < 100) {
      if(number % 10 === 0) {
          return `${otherNum[(number / 10) - 1]}`
      }
      return `${otherNum[parseInt(number / 10) - 1]}` + ` ${zeroToTwenty[number % 10]}`
  }

  if(number >= 100 && number < 1000) {
    let dec = number % 100
      if(number % 100 === 0) {
          return `${zeroToTwenty[number / 100]} hundred`
      }
      if(number % 10 === 0) {
        return `${zeroToTwenty[parseInt(number / 100)]} hundred` + ` ${otherNum[parseInt(dec / 10) - 1]}`
      }else if(number % 10 !== 0 && dec < 20) {
        return `${zeroToTwenty[parseInt(number / 100)]} hundred` + ` ${zeroToTwenty[dec]}`
      } else {
        return `${zeroToTwenty[parseInt(number / 100)]} hundred` + ` ${otherNum[parseInt(dec / 10) - 1]}` + ` ${zeroToTwenty[dec % 10]}`
      }
     
  }

}
