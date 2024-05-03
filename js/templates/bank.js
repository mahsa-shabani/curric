export default function (value) {
  return `
    <div class="flex flex-col lg:flex-row border-2 border-b-0 last-of-type:border-b-2 border-black">
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
    </div>
  `
}