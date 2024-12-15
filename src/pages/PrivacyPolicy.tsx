import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
        <Header/>
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 text-lg max-w-7xl flex flex-col gap-6">

      <h1 className="text-3xl font-bold text-indigo-900 tracking-tight">Déclaration de Confidentialité & Politique en Matière de Cookies</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-indigo-900 tracking-tight">Déclaration de Confidentialité</h2>
        <p>
          Nous respectons la vie privée des visiteurs de notre site web et veillons à ce que les informations personnelles que vous nous fournissez soient traitées avec la plus grande confidentialité. Le traitement des données personnelles est effectué conformément aux exigences de la loi sur la protection des données personnelles.
        </p>
        <h3 className="text-xl font-bold text-indigo-900 tracking-tight">Données Personnelles traitées</h3>
        <p>
          Vos données personnelles sont utilisées pour conclure et exécuter des accords relatifs à nos services, ainsi que pour gérer les relations qui en découlent, notamment pour des activités visant à élargir notre clientèle.
        </p>
        <p>
          Si vous remplissez un formulaire de contact ou d'inscription sur le site web, ou si vous nous envoyez un e-mail, les informations que vous nous transmettez seront conservées aussi longtemps que nécessaire pour répondre à votre demande ou y donner suite.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2  className="text-2xl font-bold text-indigo-900 tracking-tight">Comportement de Navigation et Données de Visite</h2>
        <p>
          Des données générales des visiteurs sont collectées sur le site, telles que l'heure de la visite et les informations sur le navigateur utilisé. Ces informations servent à analyser de manière statistique le comportement des visiteurs et à optimiser le fonctionnement du site web.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2  className="text-2xl font-bold text-indigo-900 tracking-tight">Politique en Matière de Cookies</h2>

        <h3 className="text-xl font-bold text-indigo-900 tracking-tight">Qu'est-ce qu'un Cookie ?</h3>
        <p>
          Un cookie est un petit fichier texte qu'un site web enregistre sur votre ordinateur ou appareil mobile lorsque vous le visitez. Il permet au site de mémoriser vos actions et préférences pendant un certain temps.
        </p>

        <h3 className="text-xl font-bold text-indigo-900 tracking-tight">Comment Utilisons-nous les Cookies ?</h3>
        <h4 className="text-lg font-bold text-indigo-900 tracking-tight">Google Analytics</h4>
        <p>
          Nous utilisons Google Analytics pour analyser la manière dont les utilisateurs naviguent sur notre site. Les informations collectées par Google sont anonymisées autant que possible et stockées sur des serveurs situés aux États-Unis. Pour plus de détails, consultez la <a href="https://policies.google.com/privacy">Politique de Confidentialité de Google</a>.
        </p>

        <h4 className="text-lg font-bold text-indigo-900 tracking-tight">Réseaux Publicitaires</h4>
        <p>
          Des réseaux publicitaires externes, y compris Google Adsense, utilisent des cookies et des balises web pour afficher des annonces pertinentes. Nous n'avons aucun contrôle sur ces cookies. Consultez la <a href="https://www.google.com/adsense">Politique de Confidentialité de Google Adsense</a> pour en savoir plus.
        </p>

        <h3 className="text-xl font-bold text-indigo-900 tracking-tight">Comment Gérer vos Cookies ?</h3>
        <p>
          Vous pouvez gérer les cookies via les paramètres de votre navigateur. Pour contrôler les cookies publicitaires, vous pouvez également utiliser des outils comme la page <a href="https://www.aboutads.info/choices">US-based choices</a> ou la page <a href="https://www.youronlinechoices.com/">Vos Choix en Ligne</a>. Notez que la suppression des cookies doit être effectuée manuellement via votre navigateur.
        </p>
      </section>
        </div>
        <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
