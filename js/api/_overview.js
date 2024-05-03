const updateOverview = (value) => {
  const tab = document.querySelector("div[data-page='ContentOverview']")
  
  let content = `<div class="flex flex-col lg:flex-row border-2 border-b-0 last-of-type:border-b-2 border-black">`
  content += `
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-black">Dates</h2>
      <p class="text-gray-600 p-4">${value["Dates"]}</p>
    </div>
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Lesson Title & Context</h2>
      <p class="text-gray-600 p-4">${value["Lesson Title & Context"]}</p>
    </div>
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Content</h2>
      <p class="text-gray-600 p-4">${value["Content"]}</p>
    </div>
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Key Skills</h2>
      <p class="text-gray-600 p-4">${value["Key Skills"]}</p>
    </div>
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Key Knowledge</h2>
      <p class="text-gray-600 p-4">${value["Key Knowledge"]}</p>
    </div>
    <div class="bg-white flex-1">
      <h2 class="text-lg font-semibold mb-2 p-4 min-h-24 flex items-end border-b-2 border-t-2 lg:border-t-0 border-black">Essential Questions</h2>
      <p class="text-gray-600 p-4">${value["Essential Questions"]}</p>
    </div>
  `

  content += `</div>`
  tab.innerHTML += content
}


const initOverview = (data) => {
  const headers = data.shift()
  const lessons = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  lessons[0].forEach((lesson) => { updateOverview(lesson) })
}

export const getOverview = async() => {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1y4K3KourqNWV8Lt_1NIRcn3LPJXrUEOdrspW6fDlOHI/values/banks?alt=json&key=AIzaSyCccIy5bxa3OYh3PKe8g5VUEICIiFLDHbE"
  fetch(url)
    .then(res => res.json())
    .then(res => res.values)
    .then(res => initOverview(res))
}