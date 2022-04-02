import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-full flex-col flex flex-wrap items-center justify-center space-y-3">
      <h1 className="text-3xl">Aight, hey.</h1>
      <h2 className="text-xl">Welcome to my site.</h2>
    </div>
  );
}
