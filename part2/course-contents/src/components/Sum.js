const Sum = ({ sum }) => {
  const total = sum.reduce((x, y) => x + y);
  return (
    <div>
      <strong>total of {total} exercises</strong>
    </div>
  );
};

export default Sum;
