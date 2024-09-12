## how to setup Tailwind CSS


Step 1 : run the commands
--> npm  install -D tailwindcss 

```
 npx tailwindcss init
```


step 2: install extention (tailwind)
 
 
step 3: update tailwind.conf.js file to include  line in content --  
```
 content: ["./src/**/*.{html,js}"] 
 ```
 --> it apply the file to html and js files or u want to apply on only html file use this 
 ```
 content: ["*.{html}"],
```

step 4 : create src/input.css to include : 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


step 5:  Run the following command :
``` 
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```