#!/bin/bash
npx tailwindcss -i ./src/css/import-tailwind.css -o ./src/css/tailwind.css
minify ./src/css/tailwind.css > ./static/css/tailwind.min.css

