export const timeConvert = num => {
  if (Array.isArray(num)) num = num[0]

  let hours = Math.floor(num / 60)
  let minutes = num % 60
  return `${hours ? hours : ""}${hours ? "h" : ""} ${minutes ? minutes : ""}${minutes ? "m" : ""}`
}

export const yearOnly = date => {
   return date.slice(0, 4)
}

export const findDirector = crew => {
    return crew.filter((el) => el.job === "Director")
}