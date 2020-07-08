import React from 'react'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddSubCategory = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Typography
              variant="contained"
              component="h2"
            >
              Add Sub Category
            </Typography>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <TextField label="Category" fullWidth />
            </div>
            <TextField label="Name" fullWidth style={{ marginTop: "20px" }} />
          </div>
          <div
            style={{
              width: "45%",
              marginLeft: "5%",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <TextField label="Language" />
          </div>
        </div>

        <div style={{ display: "flex", margin: "40px 0" }}>
          <Button
            style={{
              fontWeight: "bold",
              color: "#fff",
              borderRadius: "0px",
              background: "#3c4252",
              marginRight: "10px",
              padding: "10px 40px",
            }}
          >
            Submit
          </Button>
          <Button
            style={{
              fontWeight: "bold",
              color: "#fff",
              borderRadius: "0px",
              background: "#2c2c2c",
              padding: "10px 40px",
            }}
          >
            Back
          </Button>
        </div>
      </div>
    );
}

export default AddSubCategory
