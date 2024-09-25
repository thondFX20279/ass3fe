const Contact = () => {
  return (
    <div className="contact mb-5">
      <div className="d-flex bg-light justify-content-between p-4 mb-4">
        <div className="text-center">
          <p className="text-uppercase">Free shipping</p>
          <p className="text-muted">Free shipping worldwide</p>
        </div>
        <div className="text-center">
          <p className="text-uppercase">24 x 7 service</p>
          <p className="text-muted">Free shipping worldwide</p>
        </div>
        <div className="text-center">
          <p className="text-uppercase">festival offer</p>
          <p className="text-muted">Free shipping worldwide</p>
        </div>
      </div>
      <div className="d-flex align-item-center justify-content-between">
        <div style={{ flex: 1 }}>
          <p className="text-uppercase mb-0">Let's be friends!</p>
          <p className="text-muted mb-0">Please contact us to join ours group</p>
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          <input type="text" placeholder="Enter your email address" className="d-inline w-100" />
          <button className="btn btn-dark rounded-0">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
