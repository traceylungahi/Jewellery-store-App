// import React, { useState }from "react";
// import "../App.css";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

// function EditDescription() {
//   const url = "http://localhost:9292/products";

//   const [description, setDescription] = useState("");
  

//   function handleClick(event) {
//     event.preventDefault()
//     const newProd = {
//       description,
//     } 
    
//     fetch(url, {
//       method: "PATCH",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newProd),
//   })
//       .then((r) => r.json())
//       .then((data) => {
//         window.location = '/'
//         console.log(data)
//       })}
  


//   return (
//     <div>
//       <div className="App">
//         <header className="App-header">
//           <div className="Login">

//             <TextField
//               variant="standard"
//               placeholder="Description"
//               margin="normal"
//               required onChange={(event) => setDescription(event.target.value)}
//               type="text"
//             />

//             <div className="Button">
//               <Button onClick={(event) => handleClick(event)}
//                 variant="contained"
//                 color="secondary"
//               >
//                 Edit Description
//               </Button>
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   )
// }

// export default EditDescription;