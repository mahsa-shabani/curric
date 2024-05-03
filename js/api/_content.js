/**
 * Updates the content of a tab.
 * @param {string} key - The key or identifier of the tab.
 * @param {Object} value - The content to be updated in the tab, includes title and content
 * @returns {void}
 */
const updateTab = (key, value) => {
  if(!key) return
  const tab = document.querySelector("div[data-page=" + key + "] .content")
  let el = `<div>`
  if(value.title) el += `<h3 class="text-2xl mb-6"> ${ value.title } </h3>`
  if(value.content) el += `<p class="mb-6 text-justify indent-8"> ${ value.content } </p>`
  el += `</div>`

  tab.innerHTML += el
}

/**
 * Initializes content for the tabs.
 * @param {Array<Array<string>>} data - The data containing tab content.
 * @returns {void}
 */
const initContent = (data) => {
  const headers = data.shift()
  const pages = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  pages[0].forEach((page) => {updateTab(page.page, page) })
}

/**
 * Fetches data from Google Sheets API and initializes tab content.
 * @returns {Promise<void>}
 */
export const getData = async() => {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1y4K3KourqNWV8Lt_1NIRcn3LPJXrUEOdrspW6fDlOHI/values/main?alt=json&key=AIzaSyCccIy5bxa3OYh3PKe8g5VUEICIiFLDHbE"
  fetch(url)
    .then(res => res.json())
    .then(res => res.values)
    .then(res => initContent(res))
}