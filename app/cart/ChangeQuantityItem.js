'use client';
import { useRouter } from 'next/navigation';
import { addQuantity, deleteQuantity } from './actions';

export default function ChangeQuantityItem({ product }) {
  const router = useRouter();

  return (
    <div>
      <button
        formAction={async () => {
          router.refresh();
          await deleteQuantity(product);
        }}
      >
        -
      </button>
      {product.quantity}
      <button
        formAction={async () => {
          router.refresh();
          await addQuantity(product);
        }}
      >
        +
      </button>
    </div>
  );
}
