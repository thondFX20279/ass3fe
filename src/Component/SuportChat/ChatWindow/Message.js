const Message = (props) => {
  return (
    <div className="d-flex">
      <div style={{ flex: "1" }}></div>
      <div
        style={{ textAlign: "right", marginBottom: "10px", color: "white", padding: "3px 5px", fontSize: "0.8rem", textTransform: "capitalize" }}
        className="bg-info fst-italic"
      >
        {props.message}
      </div>
    </div>
  );
};

export default Message;
