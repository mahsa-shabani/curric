import template from '../templates/lessonplan.js'

/**
 * Adds a lesson plan to the lesson plan tab
 * @param {Object} lesson - The content to be added in the tab
 * @returns {void}
 */
const updateCalander = (lesson) => {
  const tab = document.querySelector("div[data-page='LessonPlans']")
  const el = template(lesson)
  tab.innerHTML += el
}

/**
 * Initializes content for lesson plans
 * @param {Array<Array<string>>} data - The data containing lesson plan content
 * @returns {void}
 */
const initLesson = (data) => {
  let currentItem = null

  const headers = data.shift()
  const lessons = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  lessons[0].forEach((lesson) => { updateCalander(lesson) })

  const items = gsap.utils.toArray(".item")
  items.forEach((e, i) => {
    const title = e.querySelector(".title")
    const content = e.querySelector(".content")
    const t = gsap.to(content, {
      height: "auto",
      paused: true
    })

    e._accordionTween = t

    title.addEventListener("click", () => {
      e.classList.toggle("active")
      if (e._accordionTween.time() > 0) {
        items[i]._accordionTween.reverse()
      } else {
        items[i]._accordionTween.play()
      }

      currentItem = currentItem === i ? null : i
    })
  })
}

/**
 * Fetches data from Google Sheets API and initializes tab content.
 * @returns {Promise<void>}
 */
export const getLesson = async() => {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1y4K3KourqNWV8Lt_1NIRcn3LPJXrUEOdrspW6fDlOHI/values/lessonplans?alt=json&key=AIzaSyCccIy5bxa3OYh3PKe8g5VUEICIiFLDHbE"
  fetch(url)
    .then(res => res.json())
    .then(res => res.values)
    .then(res => initLesson(res))
}