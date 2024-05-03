import template from '../templates/bank.js'

const updateBank = (key, value) => {
  if (!key) return
  const tab = document.querySelector("div[data-page=" + key + "]")
  const el = template(value)
  tab.innerHTML += el
}

export const initBanks = (data) => {
  const headers = data.shift()
  const pages = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  pages[0].forEach((page) => {updateBank(page.Bank, page) })
}