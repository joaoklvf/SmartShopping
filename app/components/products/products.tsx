import products from '../../data/products.json';
import categories from '../../data/categories.json';
import { CategoryProductsSession } from './CategoryProductsSession/CategoryProductsSession';
import type { CategoryProducts } from '~/models/CategoryProducts';

export function Products() {
  const categoryProducts: CategoryProducts[] = categories.map(category => ({
    category: { ...category },
    products: products.filter(product => product.categoryId === category.id)
  }));

  return (
    <div>
      {categoryProducts.map(categoryProduct => (
        <CategoryProductsSession
          key={categoryProduct.category.id}
          categoryProducts={categoryProduct}
        />
      ))}
    </div>
  );
}