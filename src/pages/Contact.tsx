import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";


const ContactPage = () => {
  return (
    <div className="contact-page bg-gradient-to-br from-indigo-50 via-white to-purple-50">

        <Header/>
      <section className="container mx-auto px-4 py-8 md:px-6 lg:px-8 text-lg max-w-5xl flex flex-col gap-6 border-2 mt-10 border-gray-200 rounded-lg">
        <p className="text-xl text-center font-bold tracking-tight">
          Une question, une suggestion ou besoin d'assistance ?
          Nous sommes à votre écoute ! Remplissez le formulaire ci-dessous
        </p>

     <section className=" w-[800px] ">
        <h2 className="text-2xl font-bold text-center mt-4 text-indigo-900 tracking-tight mb-4">Formulaire de Contact</h2>
        <form action="/submit-contact" method="POST">
          <div className="form-group">
            <label htmlFor="name">Votre Nom </label>
            <input type="text" id="name" name="name" required placeholder="Entrez votre nom" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Votre E-mail <span className="text-red-500 text-lg" >*</span></label>
            <input type="email" id="email" name="email" required placeholder="Votre adresse e-mail" />
          </div>


          <div className="form-group">
            <label htmlFor="message">Votre Question <span className="text-red-500 text-lg" >*</span></label>
            <textarea id="message" name="message"  required placeholder="Décrivez votre demande ici..."></textarea>
          </div>
          <div className="flex items-center gap-4">

            <button type="reset" className="border-2 border-gray-300 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Annuler</button>
          <button type="submit" className="btn btn-primary">Envoyer</button>
          </div>
        </form>
      </section>

      </section>

 
      <Footer/>

    </div>
  );
};

export default ContactPage;
