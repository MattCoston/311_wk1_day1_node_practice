const moment = require("moment")
const log = console.log

const today = () => {
  // write code for dates.today
  let todayDate = moment().format('dddd')
  return todayDate
}

const calendar = () => {
  // write code for dates.calendar
  let date = moment().format("MMM DD, YYYY")
  return date
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format("LTS")
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}