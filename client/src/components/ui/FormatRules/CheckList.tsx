<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Interactive Checklist</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen p-4">

  <section class="max-w-md p-9 bg-white border rounded shadow">
    <h2 class="text-2xl font-bold mb-6">Bring-on-the-day Checklist</h2>
    <ul class="space-y-4 text-neutral-900">
      <li class="flex items-center gap-4 cursor-pointer" onclick="toggleCheck(this)">
        <div class="w-7 h-7 border-2 border-gray-500 rounded flex items-center justify-center transition-colors">
          <!-- Checkmark SVG will be inserted here -->
        </div>
        <span class="select-none">&lt250g, fully enclosed guard drone</span>
      </li>
      <li class="flex items-center gap-4 cursor-pointer" onclick="toggleCheck(this)">
        <div class="w-7 h-7 border-2 border-gray-500 rounded flex items-center justify-center transition-colors"></div>
        <span class="select-none">Your teammate</span>
      </li>
      <li class="flex items-center gap-4 cursor-pointer" onclick="toggleCheck(this)">
        <div class="w-7 h-7 border-2 border-gray-500 rounded flex items-center justify-center transition-colors"></div>
        <span class="select-none">Team identification</span>
      </li>
      <li class="flex items-center gap-4 cursor-pointer" onclick="toggleCheck(this)">
        <div class="w-7 h-7 border-2 border-gray-500 rounded flex items-center justify-center transition-colors"></div>
        <span class="select-none">Water bottle</span>
      </li>
    </ul>
  </section>

  <script>
    // SVG for checkmark
    const checkmarkSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    `;

    function toggleCheck(listItem) {
      const box = listItem.querySelector("div");
      const text = listItem.querySelector("span");

      if (box.classList.contains("bg-blue-600")) {
        // Uncheck
        box.classList.remove("bg-blue-600", "border-blue-600");
        box.innerHTML = "";
        text.classList.remove("line-through", "text-gray-500");
      } else {
        // Check
        box.classList.add("bg-blue-600", "border-blue-600");
        box.innerHTML = checkmarkSVG;
        text.classList.add("line-through", "text-gray-500");
      }
    }
  </script>

</body>
</html>