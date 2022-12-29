import Display from "../atoms/Display/Display";
import Panel from "../molecules/Panel";
import soundsOne from "../../audios/one.json";
import soundsTwo from "../../audios/two.json";
import { ISound } from "../../utils/types/intefaces";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { Android12Switch } from "../atoms/Android12Switch/Android12Switch";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
type DrumProps = {
  id: string;
  className: string;
};

const Drum = ({ id, className }: DrumProps) => {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [hits, setHits] = useState<Array<ISound>>(soundsOne);
  const [displayLabel, setDisplayLabel] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const clickedAudio = document.getElementById(
      e.key.toUpperCase()
    ) as HTMLAudioElement | null;
    if (clickedAudio) clickedAudio.currentTime = 0;
    clickedAudio?.play();
    const playedHit = hits.find(
      (hit) => hit.keyTrigger === e.key.toUpperCase()
    );
    if (playedHit) {
      setDisplayLabel(playedHit.id);
    }
  }, []);

  const onChangePower = () => {
    if (power) {
      window.removeEventListener("keydown", handleKeyDown, true);
    } else {
      window.addEventListener("keydown", handleKeyDown, true);
    }
    setPower(!power);
  };

  const onChangeBank = () => {
    if (!bank) {
      setHits(soundsTwo);
    } else {
      setHits(soundsOne);
    }
    setBank(!bank);
  };

  return (
    <div id={id} className={className}>
      <div className='right'>
        <FormControl component='fieldset'>
          <FormGroup
            aria-label='position'
            row
            sx={{
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              value='top'
              control={
                <Android12Switch
                  color='primary'
                  checked={power}
                  onChange={onChangePower}
                />
              }
              label='Power'
              labelPlacement='top'
              sx={{
                marginBottom: "1.5rem",
              }}
            />
            <Display label={displayLabel} />
            <FormControlLabel
              value='top'
              control={
                <Android12Switch
                  color='primary'
                  checked={bank}
                  onChange={onChangeBank}
                />
              }
              label='Bank'
              labelPlacement='top'
              sx={{
                marginTop: "1.5rem",
              }}
            />
          </FormGroup>
        </FormControl>
        {/* <Android12Switch value={true} />
        <Display label={displayLabel} />
        <Android12Switch checked={false} /> */}
      </div>
      <Panel
        id='panel'
        className='pnl'
        label='panelcito'
        data={hits}
        setDisplayLabel={setDisplayLabel}
        power={power}
      />
    </div>
  );
};

export default Drum;
