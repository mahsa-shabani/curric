import './tailwind.config.js'
import { initContent } from './api/content.js'
import { initLesson } from './api/lesson.js'
import { initBanks } from './api/bank.js'
import { initOverview } from './api/overview.js'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const colors = ["red", "cyan", "green", "blue", "purple"]
const shapes = [
  "M480.25 156.355c0 161.24-224.25 324.43-224.25 324.43S31.75 317.595 31.75 156.355c0-91.41 70.63-125.13 107.77-125.13 77.65 0 116.48 65.72 116.48 65.72s38.83-65.73 116.48-65.73c37.14.01 107.77 33.72 107.77 125.14z",
  "M234.72 26.594c-.753-.008-1.514.01-2.282.03-5.09.147-10.548.97-16.375 2.532-62.162 16.66-38.924 89.862-13.97 94.72 4.963.964 15.1 29.773 5.407 47.968L102.25 200.03l28.063 104.75c-4.66 18.956-34.61 21.788-51.438 8-13.04-10.692-68.983 9.403-54.78 62.408 14.2 53.004 76.607 33.183 80.75 11.906 1.016-5.245 28.51-24.732 45.405-7.844l28.125 104.938 114.594-30.72c29.46-14.44 5.724-35.85-14.376-43.437-15.9-5.987-26.554-64.91 26.844-79.217 5.005-1.342 9.676-1.97 14-2.032 41.79-.61 51.995 53.516 37.062 66.5-4.135 3.595-13.396 43.19 15.844 36.876l5.312-1.5c-.927.323-1.822.6-2.687.844l118.186-31.656-30.344-113.313c-14.378-18.138-42.185-4.923-49.687 15-5.993 15.91-50.688 24.518-65-28.874-14.312-53.39 32.484-60.992 49.25-47 14.26 11.905 51.205 11.807 40.375-30.47l5.438 18.095-26.157-97.593-138.75 37.188c-19.11-8.485-25.912-31.455-10.405-44.438 27.632-23.133 14.2-81.373-33.156-81.843zm137.624 405.562-3.844 1.094 6.28-1.688c-.837.233-1.653.425-2.436.594zm63.437-243.562a91.447 91.447 0 0 1 1.97 6.562l-1.97-6.562z",
  "M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05z",
  "M246.92,187.032c-6.793-0.003-12.844-4.331-15.057-10.771c-2.08-6.06-7.779-10.128-14.188-10.128c-0.002,0-0.004,0-0.006,0   l-9.392,0.004c-4.642,0.002-9.021,2.152-11.86,5.824s-3.818,8.451-2.652,12.944c6.283,24.208,28.137,41.12,53.151,41.127   c35.137-0.009,63.725-28.604,63.73-63.748c-0.006-41.243-33.562-74.797-74.807-74.797c-48.867,0.002-88.625,39.761-88.625,88.631   c0.007,58.39,47.517,105.899,105.912,105.905c70.303-0.006,127.502-57.207,127.508-127.51c0-41.271-16.072-80.073-45.256-109.256   C306.198,16.071,267.399-0.001,226.125,0C122.316,0,37.86,84.455,37.86,188.264c0,61.557,23.972,119.429,67.499,162.956   c40.768,40.77,94.847,64.655,152.276,67.262c0.228,0.011,0.453,0.016,0.681,0.016c3.853,0,7.565-1.482,10.362-4.155   c2.961-2.83,4.637-6.748,4.637-10.845v-9.013c0-8.005-6.285-14.601-14.281-14.982C156.88,374.608,76.86,290.607,76.86,188.265   c0-82.305,66.96-149.264,149.266-149.264c30.854-0.001,59.859,12.015,81.678,33.832c21.818,21.818,33.834,50.827,33.834,81.68   c-0.002,48.801-39.707,88.506-88.506,88.512c-36.893-0.006-66.908-30.021-66.914-66.909c0-27.363,22.263-49.626,49.626-49.628   c19.738,0,35.801,16.061,35.805,35.797C271.647,175.928,260.549,187.029,246.92,187.032z",
  "M312.07 194.46A56.07 56.07 0 1 1 256 138.39a56.07 56.07 0 0 1 56.07 56.07zM406 418.01H106v60h300v-60zM282.33 261.52a71.81 71.81 0 0 1-52.15.2c-.73 58.91-62.35 114.06-96.75 140.28H378.9c-34.09-26.33-95.44-81.78-96.57-140.48z"
]

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

const generateShape = (i) => {
  let shape = document.createElement("div")
  shape.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-24 h-24">
      <path d="${shapes[i]}" class="fill-${colors[i]}-500 opacity-50"/>
    </svg>
  `

  shape.className = `relative w-24 h-24 animate-float`
  shape.style.top = `${random(10, 70)}%`
  return shape
}

const floatingShapes = document.getElementById("floatingShapes");
for (let i = 0; i < colors.length; i++) {
    const shape = generateShape(i);
    floatingShapes.appendChild(shape);
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