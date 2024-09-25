const ShopAndCartBanner = ({ title }) => {
  return (
    <div className="bg-light p-5 d-flex justify-content-between fst-italic align-items-center mb-5">
      <h3 className="text-uppercase ">{title}</h3>
      <span className="text-muted text-uppercase">{title}</span>
    </div>
  );
};
export default ShopAndCartBanner;
