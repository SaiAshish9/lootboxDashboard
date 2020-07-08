import React from 'react'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddCategories = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          <Typography variant="contained" component="h2">
            Add Category
          </Typography>
          <TextField
            label="Name"
            fullWidth
            style={{ margin: "20px 0" }}
            // variant="outlined"
          />
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <TextField label="Category Image" fullWidth />
            <input
              accept="image/*"
              style={{
                display: "none",
              }}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  borderRadius: "0px",
                  background: "#2c2c2c",
                }}
                variant="contained"
                component="span"
              >
                Upload
              </Button>
            </label>
          </div>
        </div>

        <div
          style={{
            width: "45%",
            marginLeft: "5%",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <TextField label="Type" />
        </div>
      </div>
    );
}

export default AddCategories
