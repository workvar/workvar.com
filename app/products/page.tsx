import ProductHeader from '@/components/Products/ProductHeader';
import ProductDetail from '@/components/Products/ProductDetail';
import { PRODUCTS } from '@/constants';

export default function Products() {
  return (
    <>
      <ProductHeader />
      {PRODUCTS.map((product, index) => (
        <ProductDetail key={product.id} product={product} index={index} />
      ))}
    </>
  );
}


