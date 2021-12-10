## SRC Directory

The `src` directory is not part of the typical Hugo directory structure. It is however, part of webdev tooling such as Svelte, etc. So, `raw` source is put here and then other tooling copies, moves, transpiles, or whatever on an as needed basis.

The raw tailwindcss files are put here and then ran through `minify` to produce `tailwind.min.css` that is used by LambdaStack.
