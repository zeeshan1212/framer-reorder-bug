import dynamic from 'next/dynamic';

// Dynamically import CardsComponent to disable SSR
const CardsComponent = dynamic(() => import('./cards'), { ssr: false });

export default function CardsPage() {
  return (
    <>
      <h1>Cards Page</h1>
      <CardsComponent />
    </>
  );
}
