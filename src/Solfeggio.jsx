import React from "react";
import { IconButton } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import { sounds } from "../sounds";

const Solfeggio = () => {
  const playHandler = () => {
    new Audio(sounds[8].src).play();
  };
  return (
    <div>
      <IconButton variant="contained" aria-label="play" onClick={playHandler}>
        <PlayArrowRoundedIcon sx={{ color: "#FFDB60", fontSize: 72 }} />
      </IconButton>
    </div>
  );
};

export default Solfeggio;
