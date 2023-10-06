interface Props {
  text: string;
}

const ListText = ({ text }: Props) => {
  return (
    <div className="">
      <div className="flex gap-[10px] items-start mb-[10px]">
        <img src="/src/assets/checkIcon.png" alt="" className="h-[30px]" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ListText;
