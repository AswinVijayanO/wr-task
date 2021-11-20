import { Paper, Typography } from "@mui/material";
import React from "react";

export const Parameter = ({ title, value }) => {
    return (
        <Paper
            style={{ textAlign: "left", padding: 8, margin: 2 }}
            variant="outlined"
        >
            <Typography color="GrayText" variant="caption">
                {title}
            </Typography>
            <Typography variant="subtitle2">{value}</Typography>
        </Paper>
    );
};
