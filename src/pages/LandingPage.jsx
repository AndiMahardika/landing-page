import ContactUs from "../components/share/ContactUs.jsx";
import FeatureCard from "../components/share/FeatureCard.jsx";
import Footer from "../components/share/Footer.jsx";
import Hero from "../components/share/HeroSection.jsx";
import ListBenefits from "../components/share/ListBenefits.jsx";
import Navbar from "../components/share/Navbar.jsx";
import images from "../assets/images.js";

export default function Landingpage() {
  return (
    <>
      <Navbar />

      <Hero />

      <ListBenefits />
      
      <section className=" md:w-3/4 mx-auto py-10 px-6 md:px-32 text-center font-roboto">
        <p className="font-normal text-slate-500">
          Industry&#39;s HomeSpace is your
          ultimate online destination for discovering your dream home. We
          specialize in offering a curated selection of modern residential
          properties designed for comfort and convenience. Our user-friendly
          platform provides comprehensive listings featuring stunning designs,
          complete amenities, and secure environments. With competitive pricing
          and flexible payment options, HomeSpace makes homeownership accessible
          and hassle-free. Explore our diverse range of homes and start your
          journey to finding the perfect space for you and your family today!
        </p>
      </section>

      <section className="container mx-auto space-y-24 my-24 font-roboto">
        <FeatureCard
          title="Modern House"
          description="Experience the beauty of modern design that seamlessly blends functionality with aesthetics. Each home at HomeSpace is crafted with meticulous attention to detail, maximizing space and natural light, allowing you to enjoy a stylish and comfortable living environment."
          img={images.modernDesign}
          imgPosition="right"
        />
        <FeatureCard
          title="Complete Amenities"
          description="HomeSpace offers more than just houses; it offers a lifestyle. Enjoy access to complete amenities such as lush green parks, children's play areas, fitness centers, and swimming pools, all designed to meet the needs of you and your family."
          img={images.completeAmenities}
          imgPosition="left"
        />
        <FeatureCard
          title="Competitive Pricing and Flexible Payment"
          description="Realizing your dream of homeownership is now easier with competitive pricing and flexible payment plans. At HomeSpace, we offer financial solutions that fit your budget, ensuring your investment is secure and valuable."
          img={images.transaction}
          imgPosition="right"
        />
      </section>

      <ContactUs />

      <Footer />
    </>
  );
}
