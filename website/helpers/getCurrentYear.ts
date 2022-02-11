const getCurrentYear = (startYear: number) => {
  let currentYear = new Date().getFullYear()
  if (startYear < currentYear) {
    return ` - ${new Date().getFullYear()}`
  }
  return ``
}

export default getCurrentYear
