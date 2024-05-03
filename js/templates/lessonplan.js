export default function (value) {
  return `
    <div class="w-full border border-${value.color}-500 box-border mb-6 rounded-lg item overflow-hidden group">
      <div class="title border-b border-${value.color}-500 box-border p-4 pr-20 min-h-16 flex flex-col justify-center border-none title group-hover:bg-gradient-to-br group-hover:from-${value.color}-400 group-hover:to-${value.color}-500 cursor-pointer relative">
        <h3 class="group-hover:text-black text-xl font-bold">${value.title}</h3>
        <h4 class="group-hover:text-black text-xl font-bold">Author: ${value.author}</h4>
        <span class="text-xs italic text-gray-500 group-hover:text-white">Week ${value.week}, Lesson ${value.class}</span>

        <div class="absolute right-6">
          <div class="w-10 h-10 flex items-center justify-center bg-white rounded-full ring-2 ring-${value.color}-400">
            <div class="accButton text-${value.color}-400 font-bold text-2xl">+</div>
            <div class="accButton text-${value.color}-400 font-bold text-2xl hidden">-</div>
          </div>
        </div>
      </div>

      <div class="content h-0 overflow-hidden">
        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center border-t">
          <h3 class="text-lg">Prior Learning/Experiences:</h3>
          <span class="text-xs italic text-gray-500 mb-4">What past knowledge and experience will the students bring to this lesson?</span>
          <p>${value.prior_learning_experiences}</p>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center">
          <h3 class="text-lg mb-4">Lesson Objectives:</h3>
          <p>${value.lesson_objectives}</p>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center">
          <h3 class="text-lg">Essential Elements:</h3>
          <span class="text-xs italic text-gray-500 mb-4">What skills or knowledge must be addressed or modeled to enable childlren to meet the objectives?</span>
          <p>${value.essential_elements}</p>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center">
          <h3 class="text-lg">Misconceptions:</h3>
          <span class="text-xs italic text-gray-500 mb-4">What common errors or misconceptions do I need to be aware of while teaching?</span>
          <p>${value.misconceptions}</p>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center bg-gradient-to-br from-${value.color}-400 to-${value.color}-500"></div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center md:!flex-row flex-wrap">
          <p class="w-full text-right text-xs italic text-gray-500 px-4">Approx. timings</p>
          <h3 class="md:w-1/6 p-4 text-lg">Lesson Introduction</h3>
          <div class="md:w-4/6 p-4">${value.intro}</div>
          <div class="md:w-1/6 p-4 text-right">${value.intro_time}</div>
          <div class="w-full h-1 border-b border-${value.color}-500 box-border border-dashed"></div>
          <h3 class="md:w-1/6 p-4 text-lg">Main Lesson</h3>
          <div class="md:w-4/6 p-4">${value.main}</div>
          <div class="md:w-1/6 p-4 text-right">${value.main_time}</div>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center md:!flex-row !p-0 flex-wrap">
          <div class="md:w-1/2 border-b md:border-r md:border-b-0 border-${value.color}-500 box-border">
            <h3 class="text-lg p-4 text-center">How can you support students who need it?</h3>
            <p class="p-4">${value.student_support}</p>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-lg p-4 text-center">How can you challenge those who need it?</h3>
            <p class="p-4">${value.challenge}</p>
          </div>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center">
          <h3 class="text-lg p-4">Materials:</h3>
          <p class="p-4">${value.materials}</p>
        </div>

        <div class="border-b border-${value.color}-500 box-border p-4 min-h-16 flex flex-col justify-center border-none">
          <h3 class="text-lg p-4">Resources:</h3>
          <p class="p-4">${value.resources}</p>
        </div>
      </div>
    </div>
  `  
}