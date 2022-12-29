import { Box } from "@mui/material";
import { ISound } from "../../utils/types/intefaces";
import Button from "../atoms/Button/Button";

type PanelProps = {
  id: string;
  className: string;
  src?: string;
  label: string;
  power: boolean;
  data: Array<ISound>;
  setDisplayLabel: (pre: string) => void;
};

const Panel = ({ id, className, data, power, setDisplayLabel }: PanelProps) => {
  return (
    <Box
      id={id}
      className={className}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: ".5rem",
      }}
    >
      {data.map((sound, idx) => (
        <Button
          key={idx}
          id={sound.id}
          className='drum-pad'
          label={sound.keyTrigger}
          src={sound.url}
          power={power}
          setDisplayLabel={setDisplayLabel}
        />
      ))}
    </Box>
  );
};

export default Panel;
