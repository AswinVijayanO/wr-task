import { Avatar, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Parameter } from "./parameter";
const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "col",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 12,
    maxWidth: 500,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 8,
    padding: "16px",
    transitionDuration:1000
  },
});
export const Card = ({ user }) => {
  const classes = useStyle();
  const [expanded, expand] = useState(false);
  return (
    <Paper
      variant={"outlined"}
      sx={{backgroundColor:expanded?"#ececec":"#fff"}}
      className={classes.card}
    //   elevation={expanded?3:0}
      onClick={() => expand((lastState) => !lastState)}
    >

    
      <div className={classes.container} >
        {!expanded&&<Typography
          color="GrayText"
          variant="caption"
          sx={{ width: "100%", textAlign: "left", pl: 1 }}
        >
          Click for more details
        </Typography>}

        <Parameter
          title={"Name"}
          value={`${user.name.title} ${user.name.first} ${user.name.last}`}
        />
        <Parameter title={"Email"} value={user.email} />
        {expanded ? (
          <>
            <Parameter title={"Phone"} value={user.phone} />
            <Parameter title={"Username"} value={`@${user.username}`} />
            {
                user.location &&
                <Parameter
                title={"Location"}
                value={`${user.location.city} ${user.location.state}`}
              />
            }
           
          </>
        ) : (
          <></>
        )}
      </div>
    </Paper>
  );
};
