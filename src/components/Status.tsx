type StatusProps = {
  // string krnege toh App me koi bhi string aa jega but error nhi ayega isse code me dikat hota h so options hi likh dete hain isme
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched done!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
