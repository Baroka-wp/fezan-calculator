import { FezanDay } from '../types/fezan';

export const FEZAN_CYCLE: FezanDay[] = [
  { 
    name: 'Medjo',
    type: 'favorable',
    color: 'text-green-600',
    position: 1,
    description: "Premier jour lunaire, naissance de l'être humain. Particulièrement favorable le jeudi pour entreprendre quelque chose d'important.",
    special: "Jeudi"
  },
  { 
    name: 'Mekou',
    type: 'défavorable',
    color: 'text-red-600',
    position: 2,
    description: "Deuxième jour lunaire, symbolise la mort. Adapté uniquement pour les enterrements ou sacrifices aux défunts.",
    special: "Enterrements"
  },
  { 
    name: 'Vodoun',
    type: 'favorable',
    color: 'text-green-600',
    position: 3,
    description: "Jour du sacré, particulièrement recommandé pour les cérémonies cultuelles le dimanche.",
    special: "Dimanche"
  },
  { 
    name: 'Azon',
    type: 'défavorable',
    color: 'text-red-600',
    position: 4,
    description: "Jour de maladie. La mort incarnée peut hanter et apporter malédiction."
  },
  { 
    name: 'Vo',
    type: 'favorable',
    color: 'text-green-600',
    position: 5,
    description: "Jour du sacrifice, propice pour conjurer le mauvais sort ou rompre un maléfice."
  },
  { 
    name: 'Akoue/Houe',
    type: 'défavorable',
    color: 'text-red-600',
    position: 6,
    description: "Jour du jugement. Risque de disputes, conflits et menaces."
  },
  { 
    name: 'Bo',
    type: 'favorable',
    color: 'text-green-600',
    position: 7,
    description: "Jour propice pour jeter des sorts, particulièrement le mardi.",
    special: "Mardi"
  },
  { 
    name: 'Hin/Fo',
    type: 'défavorable',
    color: 'text-red-600',
    position: 8,
    description: "Jour de la misère. Déconseillé pour entreprendre quelque chose d'important."
  },
  { 
    name: 'Fa',
    type: 'favorable',
    color: 'text-green-600',
    position: 9,
    description: "Jour parfait pour consulter l'oracle et combattre les malheurs."
  }
];