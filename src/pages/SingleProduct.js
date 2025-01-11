import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productID } = useParams()
  
  return (
    <section className='section product'>
      <h2>single product - {productID}</h2>
      <Link to='/products'>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
