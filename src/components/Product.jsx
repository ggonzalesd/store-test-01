import propTypes from "prop-types";

export const Product = ({ product }) => {
  const { nombre: name } = product;

  return <div className="p-1 bg-slate-300">{name}</div>;
};

Product.propTypes = {
  product: propTypes.shape({
    nombre: propTypes.string.isRequired,
  }).isRequired,
};
