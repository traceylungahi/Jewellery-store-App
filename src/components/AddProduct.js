import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function AddProduct() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="Login">

            <TextField
              variant="standard"
              placeholder="Title"
              margin="normal"
              required
            />
            <TextField
              variant="standard"
              placeholder="Description"
              margin="normal"
              required
              type="password"
            />

            <TextField
              variant="standard"
              placeholder="Price"
              margin="normal"
              required
              type="number"
            />

            <TextField
              variant="standard"
              placeholder="Image"
              margin="normal"
              required
              type="text"
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
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