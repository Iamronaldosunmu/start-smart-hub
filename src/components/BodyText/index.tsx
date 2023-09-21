interface Props {
  heading: string;
  paragraphs: string[];
}

const TextSection = ({ heading, paragraphs }: Props) => {
  return (
    <div className="px-10 large:px-20 py-10 ">
      <h2 className="font-semibold mb-7 text-3xl">{heading}</h2>
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className={`text-gray-400 ${index === 2 ? 'pb-0' : 'pb-10'} text-1xl`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSection;
