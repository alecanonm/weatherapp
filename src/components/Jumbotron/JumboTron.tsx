interface Props {
  text: string;
}

const JumboTron = ({ text }: Props) => (
  <h1 className="text-[52px]/[1.2] text-center font-bold">{text}</h1>
);

export default JumboTron;
