type OscarProps = {
  children: React.ReactNode;  //best, it accepts every type that react can render
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
