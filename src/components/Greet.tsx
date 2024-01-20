type GreetProps = {
  name: string;
  messageCount?: number; // by using ? , we make it optional and even though we dont pass it TS dont throw and error
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  // If messageCount is not passed then it will get 0 as default value
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! , You have ${messageCount} messages!!!`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;



