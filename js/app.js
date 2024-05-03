import './tailwind.config.js'
import { initContent } from './api/content.js'
import { initLesson } from './api/lesson.js'
import { initBanks } from './api/bank.js'
import { initOverview } from './api/overview.js'

const menu = document.getElementById('slideOutMenu')
const tl = gsap.timeline({ paused: true })

tl.fromTo(menu, { x: "100%" }, { duration: 0.5, x: 0, ease: "power2.out" })

const openSlideOutMenu = _ => tl.play()
const closeSlideOutMenu = _ => tl.reverse()

const toggleTab = (tab) => {
  const [tabs, contents] = ['.tab-label', '.tab-content > div'].map(selector => document.querySelectorAll(selector))
  localStorage.setItem('pop_ct', tab - 1)
  tabs.forEach((t, index) => t.classList.toggle('!border-emerald-300', index === tab - 1))
  contents.forEach((c, index) => c.classList.toggle('hidden', index !== tab - 1))
  document.getElementById('closeMenuBtn').click()
}

const getData = async() => {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1y4K3KourqNWV8Lt_1NIRcn3LPJXrUEOdrspW6fDlOHI/values:batchGet?alt=json&ranges=main&ranges=lessonplans&ranges=banks&ranges=overview&key=AIzaSyCccIy5bxa3OYh3PKe8g5VUEICIiFLDHbE"
  fetch(url)
    .then(res => res.json())
    .then(res => res.valueRanges)
    .then(res => {
      [initContent, initLesson, initBanks, initOverview].forEach((initFunc, index) => initFunc(res[index].values))
      document.querySelector(".loader").classList.add('hidden')
    })
}

document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem('pop_ct', localStorage.getItem('pop_ct') ? localStorage.getItem('pop_ct') : 0)
  document.querySelectorAll('.tab-label')[localStorage.getItem('pop_ct')].classList.add('!border-emerald-300')
  document.querySelectorAll('.tab-label').forEach((tab) => { tab.addEventListener('click', () => toggleTab(tab.getAttribute('data-tab'))) })
  document.querySelectorAll('.tab')[localStorage.getItem('pop_ct')].classList.remove('hidden')
  document.getElementById('openMenuBtn').addEventListener('click', openSlideOutMenu)
  document.getElementById('closeMenuBtn').addEventListener('click', closeSlideOutMenu)
  getData()
})