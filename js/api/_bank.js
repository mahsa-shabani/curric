const updateTab = (key, value) => {
  if (!key) return
  const tab = document.querySelector("div[data-page=" + key + "]")
  
  let content = `<div class="flex flex-col lg:flex-row border-2 border-b-0 last-of-type:border-b-2 border-black">`
  content += `
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-black">Name & Type</h2>
      <p class="text-gray-600 p-4">${value["Name & Type"]}</p>
    </div>
    <div class="bg-white flex-1">
    <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Description & Rubric</h2>
      <p class="text-gray-600 p-4">${value["Description & Rubric"]}</p>
    </div>
    <div class="bg-white flex-1">
    <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Suggested Differentiation</h2>
      <p class="text-gray-600 p-4">${value["Suggested Differentiation "]}</p>
    </div>
    <div class="bg-white flex-1">
    <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Teacher Guidance</h2>
      <p class="text-gray-600 p-4">${value["Teacher Guidance"]}</p>
    </div>
  `

  content += `</div>`
  tab.innerHTML += content
}


const initBanks = (data) => {
  const headers = data.shift()
  const pages = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  pages[0].forEach((page) => {updateTab(page.Bank, page) })
  document.querySelector(".loader").classList.add('hidden')
}

export const getBanks = async() => {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1y4K3KourqNWV8Lt_1NIRcn3LPJXrUEOdrspW6fDlOHI/values/banks?alt=json&key=AIzaSyCccIy5bxa3OYh3PKe8g5VUEICIiFLDHbE"
  fetch(url)
    .then(res => res.json())
    .then(res => res.values)
    .then(res => initBanks(res))
}