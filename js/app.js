import './tailwind.config.js'
import { getData } from './api/_content.js'
import { getLesson } from './api/_lesson.js'
import { getBanks } from './api/_bank.js'
import { getOverview } from './api/_overview.js'

const menu = document.getElementById('slideOutMenu')
const tl = gsap.timeline({ paused: true })

tl.fromTo(menu, { x: "100%" }, { duration: 0.5, x: 0, ease: "power2.out" })

const openSlideOutMenu = _ => tl.play()
const closeSlideOutMenu = _ => tl.reverse()

/**
 * Toggles between tabs and their corresponding contents.
 * @param {number} tab - The index of the tab to be toggled.
 * @returns {void}
 */
const toggleTab = (tab) => {
  const [tabs, contents] = ['.tab-label', '.tab-content > div'].map(selector => document.querySelectorAll(selector))
  localStorage.setItem('pop_ct', tab - 1)
  tabs.forEach((t, index) => t.classList.toggle('!border-emerald-300', index === tab - 1))
  contents.forEach((c, index) => c.classList.toggle('hidden', index !== tab - 1))
  document.getElementById('closeMenuBtn').click()
}

/**
 * Event listener for the DOMContentLoaded event.
 * Sets up the initial state / controls of the page when the DOM content is loaded.
 * @param {Event} event - The DOMContentLoaded event.
 * @returns {void}
 */
document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem('pop_ct', localStorage.getItem('pop_ct') ? localStorage.getItem('pop_ct') : 0)
  document.querySelectorAll('.tab-label')[localStorage.getItem('pop_ct')].classList.add('!border-emerald-300')
  document.querySelectorAll('.tab-label').forEach((tab) => { tab.addEventListener('click', () => toggleTab(tab.getAttribute('data-tab'))) })
  document.querySelectorAll('.tab')[localStorage.getItem('pop_ct')].classList.remove('hidden')
  document.getElementById('openMenuBtn').addEventListener('click', openSlideOutMenu)
  document.getElementById('closeMenuBtn').addEventListener('click', closeSlideOutMenu)
  getData();getLesson();getOverview();getBanks();
})