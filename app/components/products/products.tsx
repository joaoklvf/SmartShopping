import products from '../../data/products.json';
import categories from '../../data/categories.json';
import { ProductCard } from './product-card/product-card';

export function Products() {
  return (
    <div>
      {categories.map((category, index) => (
        <div>
          <h2 className='text-2xl mb-2'>{category.name}</h2>
          <div className='flex flex-wrap gap-6'>
            {products.filter(product => product.categoryId === category.id).map(product => (
              <ProductCard
                product={product}
                key={product.id}
              />
            ))}
          </div>
          {index !== categories.length -1 && <hr className='my-4' />}
        </div>
      ))}
    </div>
  );
}