### installs

npm create vite@latest . -- --template react
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install react-icons
npm install framer-motion

### config

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

### directives

@tailwind base;
@tailwind components;
@tailwind utilities;
