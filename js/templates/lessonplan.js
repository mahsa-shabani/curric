/**
 * Generates HTML for a lesson card.
 * @param {Object} lesson - The lesson object containing all lesson information
 * @returns {string} The HTML code for the lesson card.
 */
export default function (lesson) {
  const classes = `border-b border-${lesson.color}-500 box-border p-4 min-h-16 flex flex-col justify-center`
  const hclasses = 'text-xs italic text-gray-500'

  return `
    <div class="w-full border border-${lesson.color}-500 box-border mb-6 rounded-lg item overflow-hidden group">
      <div class="title ${classes} border-none title group-hover:bg-gradient-to-br group-hover:from-${lesson.color}-400 group-hover:to-${lesson.color}-500 cursor-pointer">
        <h3 class="group-hover:text-black text-xl font-bold">Lesson: ${lesson.title}</h3>
        <span class="${hclasses} group-hover:text-white">Week ${lesson.week}, Lesson ${lesson.class}
      </div>

      <div class="content h-0 overflow-hidden">
        <div class="${classes} border-t">
          <h3 class="text-lg">Prior Learning/Experiences:</h3>
          <span class="${hclasses} mb-4">What past knowledge and experience will the students bring to this lesson?</span>
          <p>${lesson.prior_learning_experiences}</p>
        </div>

        <div class="${classes}">
          <h3 class="text-lg mb-4">Lesson Objectives:</h3>
          <p>${lesson.lesson_objectives}</p>
        </div>

        <div class="${classes}">
          <h3 class="text-lg">Essential Elements:</h3>
          <span class="${hclasses} mb-4">What skills or knowledge must be addressed or modeled to enable childlren to meet the objectives?</span>
          <p>${lesson.essential_elements}</p>
        </div>

        <div class="${classes}">
          <h3 class="text-lg">Misconceptions:</h3>
          <span class="${hclasses} mb-4">What common errors or misconceptions do I need to be aware of while teaching?</span>
          <p>${lesson.misconceptions}</p>
        </div>

        <div class="${classes} bg-gradient-to-br from-${lesson.color}-400 to-${lesson.color}-500"></div>

        <div class="${classes} md:!flex-row flex-wrap">
          <p class="w-full text-right text-xs italic text-gray-500 px-4">Approx. timings</p>
          <h3 class="md:w-1/6 p-4 text-lg">Lesson Introduction</h3>
          <div class="md:w-4/6 p-4">${lesson.intro}</div>
          <div class="md:w-1/6 p-4 text-right">${lesson.intro_time}</div>
          <div class="w-full h-1 border-b border-${lesson.color}-500 box-border border-dashed"></div>
          <h3 class="md:w-1/6 p-4 text-lg">Main Lesson</h3>
          <div class="md:w-4/6 p-4">${lesson.main}</div>
          <div class="md:w-1/6 p-4 text-right">${lesson.main_time}</div>
        </div>

        <div class="${classes} md:!flex-row !p-0 flex-wrap">
          <div class="md:w-1/2 border-b md:border-r md:border-b-0 border-${lesson.color}-500 box-border">
            <h3 class="text-lg p-4 text-center">How can you support students who need it?</h3>
            <p class="p-4">${lesson.student_support}</p>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-lg p-4 text-center">How can you challenge those who need it?</h3>
            <p class="p-4">${lesson.challenge}</p>
          </div>
        </div>

        <div class="${classes}">
          <h3 class="text-lg p-4">Materials:</h3>
          <p class="p-4">${lesson.materials}</p>
        </div>

        <div class="${classes} border-none">
          <h3 class="text-lg p-4">Resources:</h3>
          <p class="p-4">${lesson.resources}</p>
        </div>
      </div>
    </div>
  `  
}