// import Image from "next/image";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Blogs from '@/components/home/Blogs';
import Investors from '@/components/home/Investors';
import Services from '@/components/home/Services';
import Services2 from '@/components/home/Services2';
import Trusted from '@/components/home/Trusted';
import Vision from '@/components/home/Vision';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className='border-b border-gray-800'>
          <Vision />
        </section>
        <section className='border-b border-gray-800'>
          <Investors />
        </section>
        <section className='border-b border-gray-800'>
          <Services />
        </section>
        <section className='border-b border-gray-800'>
          <Services2 />
        </section>
        <section className='border-b border-gray-800'>
          <Trusted />
        </section>
        <section className='border-b border-gray-800'>
          <Blogs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
