
import './Home.css';
interface product{
  id:number,
  name:string,
  description:string,
  price:number
}
const products:product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High quality wireless headphones with noise cancellation.',
    price: 99.99,

  },
  {
    id: 2,
    name: 'Smartwatch',
    description: 'Stay connected and track your fitness with this smartwatch.',
    price: 149.99,
  
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with excellent sound quality.',
    price: 59.99,
 
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    description: 'Ergonomic gaming mouse with customizable buttons.',
    price: 39.99,
  
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <h1>Product Listing</h1>
      <div className="product-grid">
        {products.map(({ id, name, description, price }) => (
          <div key={id} className="product-card">
        
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
