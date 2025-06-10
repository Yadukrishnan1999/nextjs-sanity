const ComponentTwo = ({ data }: any) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>{data?.content}</div>
      <div>{data?.title}</div>
    </div>
  );
};

export default ComponentTwo;
