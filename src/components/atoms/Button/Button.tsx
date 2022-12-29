import "./style.css";
type ButtonProps = {
  id: string;
  className: string;
  src: string;
  label: string;
  power: boolean;
  setDisplayLabel: (pre: string) => void;
};
const Button = ({
  id,
  className,
  src,
  label,
  power,
  setDisplayLabel,
}: ButtonProps) => {
  const handleClick = () => {
    if (!power) return;
    const clickedAudio = document.getElementById(
      label
    ) as HTMLAudioElement | null;
    if (clickedAudio) clickedAudio.currentTime = 0;
    clickedAudio?.play();
    setDisplayLabel(id);
  };
  return (
    <div
      id={`btn-${label}`}
      className={`btn ${className}`}
      onClick={handleClick}
    >
      <audio id={label} className='clip' src={src}></audio>
      {label}
    </div>
  );
};

export default Button;
