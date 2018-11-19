export default function(date) {
  if (!(date instanceof Date)) {
    return date
  }
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? `0${m}` : m
  let d = date.getDate()
  d = d < 10 ? `0${d}` : d
  // let h = date.getHours()
  // h = h < 10 ? `0${h}` : h
  // let minute = date.getMinutes()
  // minute = minute < 10 ? `0${minute}` : minute
  // let second = date.getSeconds()
  // second = minute < 10 ? `0${second}` : second
  return `${y}-${m}-${d}`
}
