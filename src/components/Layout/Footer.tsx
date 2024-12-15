import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-gray-600">
        Source : CERCLE NATIONAL DES PRETRES DU FA
      </p>
      <p className="text-gray-500 mt-2 text-lg">
        "La géomancie ne ment jamais pour quelqu'un qui sait interpréter"
      </p>
  
      {/* Footer Navigation */}
      <nav className="flex justify-center space-x-6 mt-6">
        <Link to={"/disclaimer"} className="text-gray-700 hover:text-gray-900 text-sm font-medium">

          Disclaimer
        </Link>
        <Link
          to={"/privacy-policy"}
          className="text-gray-700 hover:text-gray-900 text-sm font-medium"
        >
          Politique de Confidentialité
        </Link>
        <Link
          to={"/contact"}
          className="text-gray-700 hover:text-gray-900 text-sm font-medium"
        >
          Contact
        </Link>
      </nav>
     
      <p className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} FEZAN. Tous droits réservés.
      </p>
    </div>
  </footer>
  
  )
}

export default Footer