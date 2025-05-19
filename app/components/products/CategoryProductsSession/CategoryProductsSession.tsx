import { ProductCard } from "../ProductCard/ProductCard";
import type { CategoryProductsSessionProps } from "./CategoryProductsSessionProps";

export function CategoryProductsSession({ categoryProducts }: CategoryProductsSessionProps) {
  const { category, products } = categoryProducts;
  const sectionId = `category-${category.id}`;

  return (
    <section aria-labelledby={sectionId} className="border-b last:border-b-0 pb-4 mb-4">
      <h2 className='text-2xl mb-2'>{category.name}</h2>
      <div className='flex flex-wrap gap-6'>
        {products.filter(product => product.categoryId === category.id).map(product => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
}