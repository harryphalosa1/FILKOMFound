/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
    './storage/framework/views/*.php',
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        ['poppins']: ['Poppins', 'sans-serif'],
        ['inter']: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
