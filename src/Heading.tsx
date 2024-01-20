type headingProps = {
  children: string;
};

// children is an inbuilt keyword ,we ahve use it only...

const Heading = (props: headingProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};

export default Heading;
