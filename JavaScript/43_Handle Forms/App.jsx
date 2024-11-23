import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors , isSubmitting },
  } = useForm();

 

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  } 


  const onSubmit= async (data) => {
    // await delay(2) //simulating network delay
    let r =  await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    // ye send krega user and pass to backeend
    // hum pass and user backened mai send kr rhe hai 
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "shubham"){
    //   setError("myform" , {message: "Invalid username "})
    //   // ye overall form ke errors ko lega 
    // }
    // if (data.username === "rohan") {
    //   setError("blocked" , {message: "the user is blocked "})
    // }
  }


  return (
    <>
      {isSubmitting && <div>Loading.... </div> }
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} >


          <input placeholder="username" {...register("username", {required: {value:true , message: " field required" } ,
             minLength: {value: 3 , message: "min length is 3" } , maxLength:{value: 8 , message: "max  length is 8" }})}   type="text"   />
          {errors.username && <div className="error"> {errors.username.message} </div>} 
          {/* error show krega jb max se km hoga */}
          <br/>

          <input placeholder="password" {...register("password", {required: {value:true , message: " field required" } ,minLength: {value:5 , message: "in  length is 4" }  } )} type="password"  />
          {errors.password && <div className="error"> {errors.password.message} </div>} 
          <br/>

          <input disabled={isSubmitting} type="submit" value="submit" />

          {/* type="submit": Triggers the form's onSubmit function. */}
          {errors.myform && <div className="error"> {errors.myform.message} </div>} 
          {errors.blocked && <div className="error"> {errors.blocked.message} </div>} 
        </form>
      </div>
    </>
  )
}

export default App  