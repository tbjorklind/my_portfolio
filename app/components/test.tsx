// testing
type MyComponentProps = {
  name: string;
};
//testing testing testing
const MyComponent = ({ name }: MyComponentProps) => {
  return (
    <div className="ml-10 bg-blue-500 text-white p-4 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
    </div>
    <div className="ml-10 bg-blue-500 text-white p-4 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
    </div>
    <div className="ml-10 bg-blue-500 text-white p-4 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
    </div>
    <div className="ml-10 bg-blue-500 text-white p-4 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
    </div>
  );
};

export default MyComponent;
