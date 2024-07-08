/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
         'hero-pattern': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhEj925aVwWUbVC8dQXRs8wwDyBweTOD76Q&s')",
      }
    },
  },
  plugins: [],
}

