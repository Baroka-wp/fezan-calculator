import { EthnicGroup } from "../types/names";

export const NamesTable:{ [key: string]: EthnicGroup } = 
       { fon: {
          title: "Fon",
          description: "Les Fon constituent l'un des plus grands groupes ethniques du Bénin. Leurs prénoms sont étroitement liés aux jours de naissance, à la royauté, et aux circonstances de la naissance.",
          categories: {
            "Jours de naissance": [
              { name: "Adjovi/Codjo", meaning: "Né(e) un lundi" },
              { name: "Abla/Bla", meaning: "Né(e) un mardi" },
              { name: "Koku/Akouavi", meaning: "Né(e) un mercredi" },
              { name: "Yaovi/Yao", meaning: "Né(e) un jeudi" },
              { name: "Koffi/Affi", meaning: "Né(e) un vendredi" },
              { name: "Komla/Amla", meaning: "Né(e) un samedi" },
              { name: "Kossi/Akossiwa", meaning: "Né(e) un dimanche" }
            ],
            "Jumeaux": [
              { name: "Agossou", meaning: "Premier jumeau garçon" },
              { name: "Ahossou", meaning: "Deuxième jumeau garçon" },
              { name: "Hossou", meaning: "Jumeau(elle)" },
              { name: "Dossi", meaning: "Deuxième jumelle" },
              { name: "Dagossou", meaning: "Né après des jumeaux" }
            ],
            "Royauté et pouvoir": [
              { name: "Ahouansou", meaning: "Né roi" },
              { name: "Ahossi", meaning: "Née princesse" },
              { name: "Dada", meaning: "De sang royal" },
              { name: "Behanzin", meaning: "Fils du roi" },
              { name: "Kondo", meaning: "Prince guerrier" },
              { name: "Houessou", meaning: "Prince héritier" },
              { name: "Ayaba", meaning: "Reine" },
              { name: "Dako", meaning: "Chef guerrier" },
              { name: "Toffa", meaning: "Autorité royale" },
              { name: "Ghézo", meaning: "Nom royal" }
            ],
            "Circonstances": [
              { name: "Houénou", meaning: "La maison est bonne" },
              { name: "Akoha", meaning: "Premier enfant qui survit" },
              { name: "Midjo", meaning: "Je suis reconnaissant" },
              { name: "Sokoto", meaning: "Tout va bien" },
              { name: "Toyi", meaning: "Né pendant un voyage" },
              { name: "Sodji", meaning: "Né pendant l'orage" },
              { name: "Tohon", meaning: "Du monde des ancêtres" },
              { name: "Videgla", meaning: "L'enfant reviendra" },
              { name: "Zinhou", meaning: "Enfant de Dieu" },
              { name: "Zinsou", meaning: "Fils de Dieu" },
              { name: "Houngbedji", meaning: "Il y a espoir" },
              { name: "Azondekon", meaning: "La vie continue" },
              { name: "Gbaguidi", meaning: "Héritier du trône" },
              { name: "Amoussou", meaning: "Dans l'eau" },
              { name: "Segla", meaning: "Né dans la chance" }
            ]
          }
        },
        yoruba: {
          title: "Yoruba",
          description: "Les Yoruba ont une riche tradition de prénoms liés à la spiritualité, à la famille et aux circonstances de la naissance.",
          categories: {
            "Spiritualité": [
              { name: "Olusola", meaning: "Dieu a choisi la richesse" },
              { name: "Oluwaseun", meaning: "Grâce à Dieu" },
              { name: "Oluwadamilare", meaning: "Dieu m'a vengé" },
              { name: "Oludare", meaning: "Dieu est bon" },
              { name: "Olayinka", meaning: "La richesse m'entoure" },
              { name: "Oluwafemi", meaning: "Dieu m'aime" },
              { name: "Oluwanifemi", meaning: "Dieu m'aime" },
              { name: "Olamide", meaning: "Ma richesse est arrivée" },
              { name: "Oluwatosin", meaning: "Dieu est digne d'adoration" },
              { name: "Oluwadamilola", meaning: "Dieu m'a fait riche" }
            ],
            "Famille": [
              { name: "Babatunde", meaning: "Le père est revenu" },
              { name: "Yetunde", meaning: "La mère est revenue" },
              { name: "Iyabo", meaning: "La mère est revenue" },
              { name: "Babajide", meaning: "Le père est ressuscité" },
              { name: "Abimbola", meaning: "Né dans la richesse" },
              { name: "Afolabi", meaning: "Né dans la richesse" },
              { name: "Adebayo", meaning: "La royauté rencontre la joie" },
              { name: "Adewale", meaning: "La couronne est revenue" },
              { name: "Ayodele", meaning: "La joie est arrivée" },
              { name: "Temitope", meaning: "Remerciement" },
              { name: "Titilayo", meaning: "Joie éternelle" },
              { name: "Toluwani", meaning: "Dieu est à moi" },
              { name: "Tunde", meaning: "Est revenu" },
              { name: "Kehinde", meaning: "Le deuxième des jumeaux" },
              { name: "Taiwo", meaning: "Le premier des jumeaux" }
            ],
            "Autres": [
              { name: "Folami", meaning: "Respectez-moi" },
              { name: "Ifedayo", meaning: "L'amour devient joie" },
              { name: "Omolara", meaning: "L'enfant est famille" },
              { name: "Rotimi", meaning: "Restez avec moi" },
              { name: "Yewande", meaning: "La mère est recherchée" },
              { name: "Adebisi", meaning: "La couronne a augmenté" },
              { name: "Adeleke", meaning: "La couronne a le pouvoir" },
              { name: "Adeyemi", meaning: "La couronne me convient" },
              { name: "Akinwande", meaning: "Le guerrier est revenu" },
              { name: "Akinfenwa", meaning: "Le guerrier est aimé" }
            ]
          }
        },
        goun: {
          title: "Goun",
          description: "Les Goun accordent une importance particulière aux prénoms liés aux jours de naissance et à la paix.",
          categories: {
            "Jours": [
              { name: "Kodjovi", meaning: "Né un lundi" },
              { name: "Abla", meaning: "Née un mardi" },
              { name: "Kuassi", meaning: "Né un dimanche" },
              { name: "Komla", meaning: "Né un samedi" },
              { name: "Yawa", meaning: "Née un jeudi" }
            ],
            "Paix et bonheur": [
              { name: "Afiavi", meaning: "Née en paix" },
              { name: "Nutifafa", meaning: "Paix" },
              { name: "Dzifa", meaning: "Né(e) dans la paix" },
              { name: "Ameyo", meaning: "Dieu a fait" },
              { name: "Ayele", meaning: "Dieu existe" },
              { name: "Dela", meaning: "Sauvé(e)" },
              { name: "Dogbeda", meaning: "Le monde change" },
              { name: "Edem", meaning: "Sauvé par Dieu" },
              { name: "Efui", meaning: "Né(e) blanc/blanche" },
              { name: "Kosi", meaning: "Aucun trouble" },
              { name: "Mensah", meaning: "Troisième enfant" },
              { name: "Senanu", meaning: "Dieu a donné" },
              { name: "Sewa", meaning: "Dieu a écouté" },
              { name: "Tsatsu", meaning: "Aide" },
              { name: "Yayra", meaning: "C'est une bénédiction" },
              { name: "Mawuli", meaning: "Dieu existe" },
              { name: "Mawuna", meaning: "Dieu est grand" },
              { name: "Mawusi", meaning: "Dans la main de Dieu" },
              { name: "Mawuko", meaning: "Dieu seul" },
              { name: "Mawulom", meaning: "Dieu m'aime" }
            ]
          }
        },
        mina: {
          title: "Mina",
          description: "Les Mina ont une tradition de prénoms liés aux jours de la semaine et aux circonstances familiales.",
          categories: {
            "Jours": [
              { name: "Kodjo/Adjo", meaning: "Né(e) un lundi" },
              { name: "Komlan/Abla", meaning: "Né(e) un mardi" },
              { name: "Koukou/Akouwa", meaning: "Né(e) un mercredi" },
              { name: "Yawo/Yawa", meaning: "Né(e) un jeudi" },
              { name: "Kofi/Afiba", meaning: "Né(e) un vendredi" },
              { name: "Komi/Ama", meaning: "Né(e) un samedi" },
              { name: "Kossi/Esi", meaning: "Né(e) un dimanche" }
            ],
            "Famille et circonstances": [
              { name: "Amavi", meaning: "Né(e) dans la joie" },
              { name: "Ami", meaning: "Née dans le bonheur" },
              { name: "Fiavi", meaning: "Né(e) en paix" },
              { name: "Kafui", meaning: "Louange" },
              { name: "Kokoe", meaning: "Premier(e) né(e)" },
              { name: "Mawuli", meaning: "Dieu existe" },
              { name: "Dodji", meaning: "Né jumeau" },
              { name: "Dovi", meaning: "Né jumeau cadet" },
              { name: "Afi", meaning: "Né(e) en paix" },
              { name: "Afiwa", meaning: "Fille née en paix" },
              { name: "Afidu", meaning: "Garçon né en paix" },
              { name: "Dzidzom", meaning: "Né(e) dans la joie" },
              { name: "Elikplim", meaning: "Il y a de l'espoir" },
              { name: "Etse", meaning: "Écoute" },
              { name: "Fafa", meaning: "Fraîcheur/Paix" }
            ]
          }
        },
        adja: {
          title: "Adja",
          description: "Les Adja ont une riche tradition de prénoms qui reflètent leur héritage culturel et leurs valeurs spirituelles.",
          categories: {
            "Traditionnels": [
              { name: "Ablavi", meaning: "Fille née un mardi" },
              { name: "Adjalian", meaning: "Originaire d'Adja" },
              { name: "Adjaratou", meaning: "Beauté d'Adja" },
              { name: "Adjatin", meaning: "Racine d'Adja" },
              { name: "Ahoefa", meaning: "Paix à la maison" },
              { name: "Akuavi", meaning: "Née dans la mort" },
              { name: "Alodé", meaning: "Dieu est présent" },
              { name: "Ayaba", meaning: "Reine" },
              { name: "Djiman", meaning: "Dans la chance" },
              { name: "Ganye", meaning: "Le fer" },
              { name: "Hounsou", meaning: "Roi de la maison" },
              { name: "Messanvi", meaning: "Je fais confiance à Dieu" },
              { name: "Sessou", meaning: "Le destin" },
              { name: "Tchebe", meaning: "Le monde est grand" },
              { name: "Tossou", meaning: "Dieu donne" },
              { name: "Worou", meaning: "Le bonheur" },
              { name: "Zinhou", meaning: "Enfant de Dieu" },
              { name: "Avlessi", meaning: "Dans les mains de Dieu" },
              { name: "Dansou", meaning: "Serpent royal" },
              { name: "Hontongnon", meaning: "La porte du ventre" },
              { name: "Kuassi", meaning: "Né un dimanche" },
              { name: "Awesso", meaning: "La maison est calme" },
              { name: "Midohoungbe", meaning: "Je fais confiance à Dieu" },
              { name: "Togbedji", meaning: "Près des ancêtres" },
              { name: "Hounsa", meaning: "Dieu a répondu" }
            ],
            "Modernes": [
              { name: "Hounnon", meaning: "Chef spirituel" },
              { name: "Avossevou", meaning: "Les pieds dans l'eau" },
              { name: "Assogba", meaning: "La main qui sauve" },
              { name: "Degbey", meaning: "La terre est vaste" },
              { name: "Dansou", meaning: "Le serpent royal" },
              { name: "Gbaguidi", meaning: "L'héritier" },
              { name: "Hounton", meaning: "Le chef des cérémonies" },
              { name: "Kedji", meaning: "Gardien" },
              { name: "Kinhou", meaning: "Âme pure" },
              { name: "Lokossa", meaning: "Sous l'arbre iroko" }
            ]
          }
        }}
      
