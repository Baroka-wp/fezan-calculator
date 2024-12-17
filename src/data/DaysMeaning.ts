import { Sign } from "../types/signs";

export const FAA_SIGNS: Sign[] = [
    {
        name: "Ogbe ou Gbe-Medji",
        sexe: "Masculin",
        nature: "Eau bénéfique, légèrement défavorable",
        days: "Jeudi",
        astrologiqueMatching: { zodiaqueSign: "Cancer", planet: "Lune" },
        portrait: "Taille moyenne, corps épais, teint bronzé ou clair, dents petites, front moite",
        character: {
          moral: "Goûts simples, inconstance, imagination, timidité, inertie",
          intellectual: "Esprit léger, étourdi, capricieux, bavard",
        },
        profession: [
          "Fonctionnaires",
          "Politiciens",
          "Poètes",
          "Cultivateurs",
          "Acteurs",
        ],
        physicalRapport: "Intestins",
        deseases: ["Diarrhées", "Anémies", "Troubles oculaires"],
        comment:
          "Audacieux, autoritaire, guerrier, riche mais subira des pertes sentimentales",
        interdictions: [
          "Vin de palme",
          "Viande de chien",
          "Viande de coq",
          "Viande d'éléphant",
        ],
      },
      {
        name: "Yekou ou Yekou-Medji",
        sexe: "Féminin",
        nature: "Eau maléfique",
        days: "Lundi",
        astrologiqueMatching: { zodiaqueSign: "Cancer", planet: "Lune" },
        portrait: "Taille harmonieuse, visage beau, corps maigre, teint brun",
        character: {
          moral: "Versatilité, verbosité, moqueur, peu sentimental, discret",
          intellectual: "Sens des foules, calculateur",
        },
        profession: [
          "Commis voyageurs",
          "Marins",
          "Marchands",
          "Avocats",
          "Forains",
        ],
        physicalRapport: "Thorax",
        deseases: ["Rhumes", "Bronchites", "Poumons"],
        comment:
          "Intelligent, populaire, mais subira des déceptions sentimentales, longévité assurée",
        interdictions: [
          "Viande d'animaux morts",
          "Vin de palme",
          "Pagne noir",
          "Brûler des fourmis noires",
        ],
      },
      {
        name: "Woli ou Woli-Medji",
        sexe: "Masculin",
        nature: "Terre neutre favorable",
        days: "Mercredi",
        astrologiqueMatching: { zodiaqueSign: "Gémeaux", planet: "Mercure" },
        portrait: "Taille moyenne, corps équilibré, visage ovale, cheveux unis",
        character: {
          moral: "Honnête, obéissant, souple, savoir-faire",
          intellectual: "Esprit subtil, éloquence, jugement rapide",
        },
        profession: [
          "Journalistes",
          "Écrivains",
          "Philosophes",
          "Industriels",
          "Diplomates",
        ],
        physicalRapport: "Système nerveux et intestins",
        deseases: ["Voies respiratoires", "Nerveuses", "Morsures d'animaux"],
        comment:
          "Brillant dans ses projets, pratiquera diverses religions, respecté dans sa famille",
        interdictions: [
          "Animaux trouvés morts",
          "Vin de palme",
          "Viande de chien",
          "Viande d'éléphant",
        ],
      },
      {
        name: "Odi ou Di-Medji",
        sexe: "Féminin",
        nature: "Terre maléfique",
        days: "Samedi",
        astrologiqueMatching: { zodiaqueSign: "Capricorne", planet: "Saturne" },
        portrait:
          "Taille moyenne, grosse tête, bras courts, cheveux rudes, visage rond, yeux rouges",
        character: {
          moral: "Caractère dur, sévère, égoïste, avare",
          intellectual: "Réflexion, concentration, prudence, persévérance",
        },
        profession: [
          "Ingénieurs",
          "Mathématiciens",
          "Policiers",
          "Archivistes",
          "Astrologues",
        ],
        physicalRapport: "Estomac et rate",
        deseases: ["Rhumatismes", "Constipation", "Troubles cutanés"],
        comment:
          "Vie difficile au départ mais brillante plus tard, apprécié pour son professionnalisme",
        interdictions: [
          "Viande de lion",
          "Bœuf",
          "Hyène",
          "Singe",
        ],
      },
      {
        name: "Losso ou Losso-Medji",
        sexe: "Masculin",
        nature: "Feu peu favorable",
        days: "Dimanche",
        astrologiqueMatching: { zodiaqueSign: "Lion", planet: "Soleil" },
        portrait:
          "Petite taille, teint clair, visage rond, yeux baissés, nez fin, front large",
        character: {
          moral: "Égoïste, irascible, prodigue, jaloux, vindicatif",
          intellectual: "Connaissances superficielles souvent mal utilisées",
        },
        profession: [
          "Politiciens",
          "Directeurs",
          "Joailliers",
          "Pionniers",
          "Propagandistes",
        ],
        physicalRapport: "Vue et cerveau",
        deseases: ["Douleurs de la colonne", "Troubles mentaux", "Fatigue mentale"],
        comment:
          "Pauvre, audacieux, intuitif mais instable. Succès souvent suivi de revers",
        interdictions: [
          "Tout ce qui est rouge",
          "Fruits rouges",
          "Viande de singe",
          "Union avec une femme au teint clair",
        ],
      },
      {
        name: "Winlin ou Winlin-Medji",
        sexe: "Féminin",
        nature: "Feu bénéfique",
        days: "Dimanche",
        astrologiqueMatching: { zodiaqueSign: "Lion", planet: "Soleil" },
        portrait:
          "Taille moyenne, grands yeux, cheveux frisés, parties supérieures du corps plus grandes",
        character: {
          moral: "Généreuse, loyale, ambitieuse, vindicative",
          intellectual: "Intelligence, savoir-faire, esprit politique",
        },
        profession: [
          "Acteurs célèbres",
          "Haute fonction publique",
          "Antiquaires",
          "Hauts dignitaires",
          "Archéologues",
        ],
        physicalRapport: "Vue et cou",
        deseases: ["Conjonctivite", "Troubles circulatoires", "Strabisme"],
        comment:
          "Estime de l’entourage, souffrances au début mais succès et richesse plus tard",
        interdictions: [
          "Viande de pintade",
          "Vin de palme",
          "Mets grillés",
          "Union avec une féticheuse",
        ],
      },
      {
        name: "Abla ou Abla-Medji",
        sexe: "Masculin",
        nature: "Air bénéfique",
        days: "Vendredi",
        astrologiqueMatching: { zodiaqueSign: "Balance", planet: "Vénus" },
        portrait:
          "Grande taille, visage rond, grandes dents, cheveux rudes, larges épaules",
        character: {
          moral: "Paisible, bienveillant, enthousiaste, présomptueux",
          intellectual: "Esprit gai, opportuniste, aime la variété",
        },
        profession: [
          "Restaurateurs",
          "Sportifs",
          "Éditeurs",
          "Magistrats",
          "Organisateurs de fêtes",
        ],
        physicalRapport: "Ouïe, foie, poumons",
        deseases: ["Congestions pulmonaires", "Troubles circulatoires", "Maux infectieux"],
        comment:
          "Bon époux, triomphant dans de nombreux domaines mais malheureux en fin de vie",
        interdictions: [
          "Tortue",
          "Serpents",
          "Vêtements en raphia",
          "Fruit noir (Houa)",
        ],
      },
      {
        name: "Aklan ou Aklan-Medji",
        sexe: "Masculin",
        nature: "Terre maléfique",
        days: "Samedi",
        astrologiqueMatching: { zodiaqueSign: "Verseau", planet: "Saturne" },
        portrait:
          "Corps mince, dents longues, visage ovale, allure peu soignée, cheveux rudes",
        character: {
          moral: "Inquiet, mélancolique, avare, solitaire",
          intellectual: "Persévérant, mystique, aptitudes en recherche",
        },
        profession: [
          "Archéologues",
          "Policiers",
          "Agents secrets",
          "Métaphysiciens",
          "Mineurs",
        ],
        physicalRapport: "Toucher, système endocrinien",
        deseases: ["Rhumatismes", "Troubles glandulaires", "Paralysie"],
        comment:
          "Pondéré et tenace, afflictions diverses mais bonheur durable possible",
        interdictions: [
          "Viande de singe",
          "Haricots rouges",
          "Lianes",
          "Bois d’iroko",
        ],
      },
      {
        name: "Guda ou Guda-Medji",
        sexe: "Masculin",
        nature: "Terre maléfique",
        days: "Mardi et Samedi",
        astrologiqueMatching: { zodiaqueSign: "Taureau", planet: "Mars et Vénus" },
        portrait:
          "Visage allongé, menton pointu, jambes fortes, mâchoires larges",
        character: {
          moral: "Fourbe, envieux, porté aux querelles, prodigue",
          intellectual: "Goût pour l’occultisme, ruse, esprit dépravé",
        },
        profession: [
          "Chimistes",
          "Serruriers",
          "Espions",
          "Mineurs",
          "Proxénètes",
        ],
        physicalRapport: "Odorat, nez, organes virils",
        deseases: ["Maux vénériens", "Sinusites", "Hémorragies"],
        comment:
          "Caractère égoïste et belliqueux, ennemis nombreux mais force reconnue",
        interdictions: [
          "Crocodile",
          "Tortue",
          "Serpents",
          "Manioc",
        ],
      },
      {
        name: "Osa ou Osa-Medji",
        sexe: "Féminin",
        nature: "Air bénéfique",
        days: "Vendredi",
        astrologiqueMatching: { zodiaqueSign: "Gémeaux", planet: "Mercure" },
        portrait:
          "Beau visage, dents longues, taille moyenne, nombreux cheveux",
        character: {
          moral: "Paisible, honnête, prudent",
          intellectual: "Imaginatif, esprit inventif",
        },
        profession: [
          "Pharmaciens",
          "Aviateurs",
          "Architectes",
          "Entrepreneurs",
          "Pilotes",
        ],
        physicalRapport: "Foie et organes génitaux féminins",
        deseases: ["Fibromes", "Gastrites", "Infections hydriques"],
        comment:
          "Longévité et bonheur après des débuts difficiles, recherches fructueuses",
        interdictions: [
          "Viande de chien",
          "Chat",
          "Vin de palme",
          "Coton en feu",
        ],
      },
      {
        name: "Ka ou Ka-Medji",
        sexe: "Masculin",
        nature: "Feu maléfique",
        days: "Mardi",
        astrologiqueMatching: { zodiaqueSign: "Scorpion", planet: "Mars" },
        portrait:
          "Teint clair, visage anguleux, regard cruel, signes sur le corps",
        character: {
          moral: "Agressif, indiscipliné, luttes fréquentes",
          intellectual: "Rusé, manipulateur, critique",
        },
        profession: [
          "Céramistes",
          "Mécaniciens",
          "Ferronniers",
          "Officiers",
          "Souffleurs de verre",
        ],
        physicalRapport: "Vue et poitrine",
        deseases: ["Plaies", "Congestions", "Opérations chirurgicales"],
        comment:
          "Ambitieux mais irréfléchi, confronté à des heurts, souvent père de famille nombreuse",
        interdictions: [
          "Poissons fumés",
          "Escargots",
          "Serpents",
          "Galettes d’arachide",
        ],
      },
      {
        name: "Trukpin ou Trukpin-Medji",
        sexe: "Féminin",
        nature: "Eau peu favorable",
        days: "Mercredi",
        astrologiqueMatching: { zodiaqueSign: "Vierge", planet: "Mercure" },
        portrait:
          "Petits yeux, visage rond, peau épaisse, corps supérieur plus large",
        character: {
          moral: "Honnête, réservé, recherche de concorde",
          intellectual: "Studieux, chanceux au jeu, goût des arts",
        },
        profession: [
          "Écrivains",
          "Journalistes",
          "Notaires",
          "Libraires",
          "Horticulteurs",
        ],
        physicalRapport: "Gorge et intestins",
        deseases: ["Tumeurs", "Inflammations", "Rhumatismes"],
        comment:
          "Bon juge, intelligent, vie sentimentale difficile mais chef influent",
        interdictions: [
          "Papaye",
          "Gombo",
          "Viande de singe",
          "Viande de pintade",
        ],
      },
      {
        name: "Tula ou Tula-Medji",
        sexe: "Masculin",
        nature: "Eau bénéfique",
        days: "Vendredi",
        astrologiqueMatching: { zodiaqueSign: "Taureau", planet: "Vénus" },
        portrait:
          "Visage charmant, teint brun, petite taille, corps harmonieux",
        character: {
          moral: "Paisible, amoureux, moqueur",
          intellectual: "Sens artistique, talent administratif",
        },
        profession: [
          "Musiciens",
          "Couturiers",
          "Mannequins",
          "Esthéticiens",
          "Poètes",
        ],
        physicalRapport: "Visage, bras, reins",
        deseases: ["Maux vénériens", "Ganglions", "Troubles urinaires"],
        comment:
          "Voyageur fréquent, persévérant, administrateur talentueux",
        interdictions: [
          "Porc",
          "Tabac",
          "Igname pilée",
          "Coq",
        ],
      },
      {
        name: "Lete ou Lete-Medji",
        sexe: "Féminin",
        nature: "Feu peu défavorable",
        days: "Mardi",
        astrologiqueMatching: { zodiaqueSign: "Bélier", planet: "Mars" },
        portrait: "Taille moyenne, corps robuste, regard perçant, voix douce",
        character: {
          moral: "Querelleuse, audacieuse, passionnée",
          intellectual: "Subtilité, critique, esprit indépendant",
        },
        profession: [
          "Explorateurs",
          "Militaires",
          "Sportifs",
          "Armuriers",
          "Boxeurs",
        ],
        physicalRapport: "Tête, nuque, viscères",
        deseases: ["Congestion du foie", "Abcès", "Blessures à la tête"],
        comment:
          "Courageuse, énergique, parfois téméraire, difficulté sentimentale avec potentiel de veuvage",
        interdictions: [
          "Mil et sorgho",
          "Viande de singe",
          "Termitières",
          "Mets pilés avec feuilles de haricot",
        ],
      },
      {
        name: "Tche ou Tche-Medji",
        sexe: "Masculin",
        nature: "Air maléfique",
        days: "Jeudi",
        astrologiqueMatching: { zodiaqueSign: "Poisson", planet: "Jupiter" },
        portrait: "Taille petite, constitution solide, visage rond, chevelure abondante",
        character: {
          moral: "Vaniteux, inconstant, impulsif",
          intellectual: "Esprit brouillon, attirance pour des relations inférieures",
        },
        profession: [
          "Percepteurs",
          "Cordonniers",
          "Huissiers",
          "Tenanciers de maison de jeu",
          "Scribes",
        ],
        physicalRapport: "Système nerveux, reins, vue",
        deseases: ["Troubles psychiques", "Blessures à l'œil", "Affections rénales"],
        comment:
          "Instable, révolutionnaire, succès suivi de prodigalité, risque de mort subite",
        interdictions: [
          "Maïs grillé",
          "Viande de pintade",
          "Serpents",
          "Bois partiellement brûlé",
        ],
      },
      {
        name: "Fu ou Fu-Medji",
        sexe: "Féminin",
        nature: "Air bénéfique",
        days: "Jeudi",
        astrologiqueMatching: { zodiaqueSign: "Sagittaire", planet: "Jupiter" },
        portrait: "Taille moyenne, traits réguliers, visage plaisant, épaules étroites",
        character: {
          moral: "Sage, dépensière pour soi, avare envers les autres",
          intellectual: "Esprit lucide, dons d'organisateur, enrichissement intellectuel",
        },
        profession: [
          "Directeurs",
          "Commerçants en gros",
          "Banquiers",
          "Boursiers",
          "Gérants de galeries d'art",
        ],
        physicalRapport: "Vésicule biliaire, ventre, ouïe",
        deseases: ["Congestions", "Plaies suppurantes", "Obésité"],
        comment:
          "Vie rigoureuse mais intelligente et ambitieuse, succès dans l'ordre et la hiérarchie",
        interdictions: [
          "Vin de palme",
          "Coq",
          "Crocodile",
          "Maïs vanner",
        ],
      },
     
    ]
