interface Props {
  text: string;
}

const ListText = ({ text }: Props) => {
  return (
    <div className="">
      <div className="flex gap-[15px] items-start mb-[25px]">
        <img src="/src/assets/ellipse.png" alt="" className="h-[30px]" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ListText;
