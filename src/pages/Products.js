import { Link } from "react-router-dom";
import products from '../data'

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        
        <div className="products">
          {products.map((p) =>
            <article key={p.id}>
              <h5>{p.name}</h5>
              <Link to={`/products/${p.id}`}>More Info</Link>
          </article>)}
        </div>
      </section>
    </>
  );
};

export default Products;
