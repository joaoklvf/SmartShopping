import { ProductCard } from "../product-card/product-card";
import type { ProductSessionProps } from "./interfaces";

export function ProductSession({ categoryProducts }: ProductSessionProps) {
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