import template from '../templates/overview.js'

const updateOverview = (value) => {
  const tab = document.querySelector("div[data-page='ContentOverview']")
  const el = template(value)
  tab.innerHTML += el
}

export const initOverview = (data) => {
  const headers = data.shift()
  const overviews = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  overviews[0].forEach((overview) => { updateOverview(overview) })
}