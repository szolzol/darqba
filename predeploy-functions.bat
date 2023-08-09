rmdir functions\nuxt /s /q
mkdir functions\nuxt
xcopy .nuxt functions\nuxt /e
del functions\nuxt.config.js
xcopy nuxt.config.js functions