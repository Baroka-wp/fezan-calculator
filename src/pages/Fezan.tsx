import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { motion } from 'framer-motion';
import { FAA_SIGNS } from "../data/DaysMeaning";
import imageFAA from "../assets/imgfaa.jpeg"



const Fezan: React.FC = () => {
  return (
    <div className="faa-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header/>
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

    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="faa-intro mb-12"
    >
      <p className="text-lg leading-relaxed text-gray-700">
        Le FAA, également connu sous le nom d'IFA, est une géomancie divinatoire originaire d'Afrique de l'Ouest.
        Introduit au Bénin au 17ᵉ siècle, il joue un rôle central dans la spiritualité et les traditions culturelles.
        Reconnu par l'UNESCO, il est bien plus qu'une technique divinatoire : c'est une science, une voie
        spirituelle et une philosophie de vie.
      </p>
    </motion.section>

    {/* Section Significations et Détails */}
    <section className="faa-significations mb-12">
      <h2 className="text-3xl font-bold text-[#FF4500] mb-8 text-center">
        Significations et Détails des Signes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FAA_SIGNS.map((sign, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="faa-sign bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3"
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

    
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="faa-applications mb-12"
    >
      <h2 className="text-3xl font-bold text-[#FF4500] mb-6 text-center">
        Applications Pratiques du FAA
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 my-4">Vous pouvez vous servir du FAA pour:</p>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Analyser le destin et guider les décisions importantes.</li>
        <li>Offrir des conseils spirituels à travers des lectures divinatoires.</li>
        <li>Fournir une sagesse pratique pour surmonter les défis quotidiens.</li>
      </ul>
    </motion.section>

    <Footer/>
  </div>
  );
};

export default Fezan;
