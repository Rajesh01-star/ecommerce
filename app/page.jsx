import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConcertTable from '@/components/ConcertTable';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero page={"home"}/>
      <ConcertTable />
      <Footer />
    </>
  );
}
