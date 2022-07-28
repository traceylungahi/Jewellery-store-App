import React, { useState }from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function AddProduct() {
  const url = "http://localhost:3000/products";

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleClick(event) {
    event.preventDefault()
    const newProd = {
      title,
      price, 
      description,
      image,
      "category": "jewelery",
    } 
    
    fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newProd),
  })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      })}
    


  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="Login">

            <TextField
              variant="standard"
              placeholder="Title"
              margin="normal"
              required onChange={(event) => setTitle(event.target.value)}
              type="text"
            />
            <TextField
              variant="standard"
              placeholder="Description"
              margin="normal"
              required onChange={(event) => setDescription(event.target.value)}
              type="text"
            />

            <TextField
              variant="standard"
              placeholder="Price"
              margin="normal"
              required onChange={(event) => setPrice(event.target.value)}
              type="number"
            />

            <TextField
              variant="standard"
              placeholder="Image"
              margin="normal"
              required onChange={(event) => setImage(event.target.value)}
              type="text"
            />

            <div className="Button">
              <Button onClick={(event) => handleClick(event)}
                variant="contained"
                color="secondary"
              >
                Register Product
              </Button>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default AddProduct;