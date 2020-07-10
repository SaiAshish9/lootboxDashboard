import React from "react";
import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";
// import SerialNumber from "./serialNumber";
// import Option2 from "./option2";
// import Option3 from "./option3";
import Table from './notificationsTable'

const AllNotifications = () => {
  // const [value, setValue] = useState(0);

  // const options = ["Serial Number", "Option 2", "Option 3"];

  // const getComponent = () => {
  //   switch (value) {
  //     case 0:
  //       return <SerialNumber />;
  //     case 1:
  //       return <Option2 />;
  //     case 2:
  //       return <Option3 />;
  //     default:
  //       return;
  //   }
  // };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "30vh",
            background: "#303542",
            padding: "2rem",
          }}
        ></Box>

        <Box
          style={{
            width: "70vw",
            margin: "auto",
            position: "relative",
            bottom: "9rem",
          }}
        >
          <Table />
        </Box>

        {/* 
        <Paper
          style={{
            width: "70vw",
            // height: "50vh",
            margin: "auto",
            position: "relative",
            bottom: "2rem",
          }}
        >
          <Box display="flex" alignItems="center">
            {options.map((i, k) => (
              <Button
                onClick={() => {
                  setValue(k);
                }}
                style={{
                  padding: 15,
                  color: value === k ? "#8dd2f3 " : "#c5c9cc",
                  fontSize: 13,
                  lineHeight: "23px",
                  borderRadius: 0,
                  borderBottom: value === k && "solid 2px #8dd2f3",
                  fontWeight: 600,
                }}
                key={k}
                color="primary"
              >
                {i}
              </Button>
            ))}
          </Box>
          <Divider light />
          <Paper elevation={0} style={{ minHeight: "65vh" }}>
             {getComponent()} 
          </Paper>
        </Paper> */}
      </Box>
    </div>
  );
};

export default AllNotifications;
