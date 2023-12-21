'use client'
import { useState, useEffect, Suspense } from 'react';
import Loading from '@/components/Loading';
import { MenuBar } from '@/components/MenuBar';
import { Hero } from '@/components/Hero';
import Encryption from '@/components/Encryption';
import { Services } from '@/components/Services';
import { Modal } from '@/components/Modal';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual data loading)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout based on your needs

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex flex-col justify-center gap-8 lg:gap-16 min-h-screen'>
          {/*HERO*/}
          <MenuBar />
          <Hero ref={undefined}/>
          <Encryption />
          <Services ref={undefined} />
          <Modal />
          <About />
          <Footer />
        </div>
      )}
    </Suspense>
  );
}
