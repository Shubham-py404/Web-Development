import path from "path"
import fs from "fs/promises"
import fs1 from "fs"

const basepath = "C:\\Users\\bHUMI\\Desktop\\Web Dev\\JavaScript\\07_exercise"
let files =  await fs.readdir(basepath)


for (const element of files) {
    let ext= element.split(".")[element.split(".").length-1]
    if (ext!="js" && ext!="json" && element.split(".").length > 1) {
        if (fs1.existsSync(path.join(basepath, ext))) {
            //   checks the json folder exist or not 
                fs.rename(path.join(basepath,element) , path.join(basepath, ext, element))
        }
        else{
                fs.mkdir(ext)
                fs.rename(path.join(basepath,element) , path.join(basepath, ext, element))
                // if not it make one 
        }  
    }
    
}