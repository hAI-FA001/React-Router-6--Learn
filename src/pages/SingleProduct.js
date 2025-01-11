import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productID } = useParams()
  const product = products.find((p) => p.id === productID)
  const {image, name} = product
  
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h2>{name} - {productID}</h2>
      <Link to='/products'>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
