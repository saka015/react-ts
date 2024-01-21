type InputProps = {
    value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>  void ;
};


// destructing the props

// We can remove the 'props.' thing from our code

const Input = ({value,handleChange}: InputProps) => {

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
