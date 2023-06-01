'use client';
import { useRouter } from 'next/navigation';
import { deleteItem } from './actions';

export default function DeleteItems({ product }) {
  const router = useRouter();

  return (
    <div>
      <button
        formAction={async () => {
          router.refresh();
          await deleteItem(product);
        }}
      >
        {' '}
        Delete
      </button>
    </div>
  );
}
