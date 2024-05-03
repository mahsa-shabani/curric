import template from '../templates/lessonplan.js'

const updateLesson = (lesson) => {
  const tab = document.querySelector("div[data-page='LessonPlans']")
  const el = template(lesson)
  tab.innerHTML += el
}

export const initLesson = (data) => {
  const headers = data.shift()
  const lessons = [data.map(row => Object.fromEntries(headers.map((header, index) => [header, row[index]])))]
  lessons[0].forEach((lesson) => { updateLesson(lesson) })
  const items = gsap.utils.toArray(".item")

  items.forEach((e, i) => {
    const timeline = gsap.to(e.querySelector(".content"), { height: "auto", paused: true })
    e._accordionTween = timeline

    e.querySelector(".title").addEventListener("click", () => {
      e.classList.toggle("active")
      e.querySelectorAll('.accButton').forEach((accordianButton, index) => { accordianButton.classList.toggle("hidden")})
      if (e._accordionTween.time() > 0) items[i]._accordionTween.reverse()
      else items[i]._accordionTween.play()
    })
  })
}