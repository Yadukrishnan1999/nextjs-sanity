const ComponentOne = ({ data }: any) => {
  return data?.items?.map((item: any, index: number) => {
    return (
      <div className="bg-gray-400 p-4 my-2" key={index}>
        <div>{item?.question}</div>
        <div>{item?.answer}</div>
      </div>
    );
  });
};

export default ComponentOne;
