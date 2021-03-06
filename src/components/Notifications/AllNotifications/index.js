import React from "react";
import Box from "@material-ui/core/Box";
import Table from './notificationsTable'

const AllNotifications = () => {

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
