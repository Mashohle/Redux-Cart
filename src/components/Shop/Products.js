import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  { id: 'p1', 
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote'
  },
  { id: 'p2', 
    price: 4,
    title: 'My Second Book',
    description: 'The Second book I ever wrote'
  },
  { id: 'p3', 
    price: 16,
    title: 'My Third Book',
    description: 'The Third book I ever wrote'
  },
  { id: 'p4', 
    price: 10,
    title: 'My Fourth Book',
    description: 'The Fourth book I ever wrote'
  },
  { id: 'p5', 
    price: 9,
    title: 'My Fifth Book',
    description: 'The Fifth book I ever wrote'
  },
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
