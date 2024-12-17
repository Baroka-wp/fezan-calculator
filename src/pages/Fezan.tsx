import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { FAA_SIGNS } from "../data/DaysMeaning";
import imageFAA from "../assets/imgfaa.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Fezan: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".faa-sign");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          controls.start("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="faa-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <img
          src={imageFAA}
          alt="Illustration du FAA"
          className="w-full h-96 object-cover rounded-lg mt-10"
        />
        <h1 className="text-4xl font-bold mt-6 text-[#FF4500]">
          Le FAA : Une Géomancie Divinatoire Unique
        </h1>
      </motion.div>

      <section className="faa-significations mb-12">
        <h2 className="text-3xl font-bold text-[#FF4500] mb-8 text-center">
          Significations et Détails des Signes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAA_SIGNS.map((sign, index) => (
            <motion.div
              key={index}
              className="faa-sign bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3"
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              custom={index}
            >
              <h3 className="text-xl font-semibold text-[#FF4500] mb-4">
                {sign.name}
              </h3>
              <p><strong>Sexe :</strong> {sign.sexe}</p>
              <p><strong>Nature :</strong> {sign.nature}</p>
              <p><strong>Jour associé :</strong> {sign.days}</p>
              <p><strong>Portrait :</strong> {sign.portrait}</p>
              <p><strong>Caractère moral :</strong> {sign.character.moral}</p>
              <p><strong>Caractère intellectuel :</strong> {sign.character.intellectual}</p>
              <p><strong>Professions associées :</strong> {sign.profession.join(", ")}</p>
              <p><strong>Correspondance physique :</strong> {sign.physicalRapport}</p>
              <p><strong>Maladies associées :</strong> {sign.deseases.join(", ")}</p>
              <p><strong>Interdictions :</strong> {sign.interdictions.join(", ")}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fezan;
