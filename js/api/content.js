const updateContent = (key, value) => {
  if(!key) return
  const tab = document.querySelector("div[data-page=" + key + "] .content")
  let el = `<div>`
  if(value.title) el += `<h3 class="text-2xl mb-6"> ${ value.title } </h3>`
  if(value.content) el += `<p class="mb-6 text-justify indent-8"> ${ value.content } </p>`
  el += `</div>`

  tab.innerHTML += el
}

export const initContent = (data) => {
  const headers = data.shift()
  const pages = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  pages[0].forEach((page) => {updateContent(page.page, page) })
}