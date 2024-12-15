import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header"

function Disclaimer() {
    return (
      <div className="">


        <Header/>
        <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 text-lg max-w-7xl flex flex-col gap-6">

        <h1 className="text-3xl font-bold text-indigo-900 tracking-tight">Disclaimer</h1>
  
       
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-indigo-900 tracking-tight">Général</h2>
          <p>
            Le site <span className="text-indigo-700 underline">fezan.org</span>, ci-après dénommé <span className="text-indigo-700">fezan</span>, vous donne accès à son contenu disponible sur www.votresite.fr (le Site). Ce contenu, incluant des textes, images et autres matériaux, est fourni par <span className="text-indigo-700">fezan</span> ou par des tiers. <span className="text-indigo-700">fezan</span> se réserve le droit de modifier ou de supprimer à tout moment une partie du contenu sans notification préalable.
          </p>
          <p>
            Les informations présentes sur le Site sont fournies à titre indicatif et ne constituent en aucun cas une offre ferme ou un engagement contractuel.
          </p>
        </section>
  
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-indigo-900 tracking-tight">Limitation de responsabilité</h2>
          <p>
            Les matériaux disponibles sur le Site sont fournis sans aucune garantie, explicite ou implicite, quant à leur exactitude ou leur exhaustivité. Ces matériaux peuvent être modifiés à tout moment sans préavis.
          </p>
          <p>
            Le contenu du Site est partiellement automatisé. <span className="text-indigo-700">fezan</span> s’efforce de mettre à jour et de compléter les informations aussi fréquemment que possible. Toutefois, il se peut que certaines informations soient incomplètes, obsolètes ou incorrectes.
          </p>
        </section>
  
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-indigo-900 tracking-tight">Droits d'auteur</h2>
          <p>
            Tous les droits de propriété intellectuelle relatifs au contenu du Site appartiennent à <span className="text-indigo-700">fezan</span>. Toute reproduction, distribution ou utilisation des matériaux, sous quelque forme que ce soit, est interdite sans l'autorisation écrite préalable de <span className="text-indigo-700">fezan</span>, sauf dans les cas expressément prévus par la loi (par exemple, le droit de citation).
          </p>
          <p>
            L’utilisation de pages web ou d’éléments individuels du Site (images, vidéos ou applications interactives) sur un autre site, notamment via des cadres (frames) ou des liens directs (hotlinking), est interdite si cela peut créer une confusion quant à l’origine du matériel.
          </p>
        </section>
  
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-indigo-900 tracking-tight">Modifications</h2>
          <p>
            Ce disclaimer est susceptible d’être modifié à tout moment. Nous vous invitons à le consulter régulièrement afin de rester informé des éventuels changements.
          </p>
        </section>
        </section>

        <Footer/>
      </div>
    );
  }
  
  export default Disclaimer;
  