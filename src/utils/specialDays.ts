import type { SpecialDayRule } from '../types/fezan';

export const SPECIAL_DAY_RULES: SpecialDayRule[] = [
  {
    dayName: 'Medjo',
    weekDay: 'jeudi',
    condition: (dayName: string, weekDay: string) => 
      dayName === 'Medjo' && weekDay === 'jeudi',
    message: (dayName: string, weekDay: string) => 
      `Jour particulièrement propice (${dayName} un ${weekDay}) - Idéal pour les nouvelles entreprises`,
    type: 'general'
  },
  {
    dayName: 'Vodoun',
    weekDay: 'dimanche',
    condition: (dayName: string, weekDay: string) => 
      dayName === 'Vodoun' && weekDay === 'dimanche',
    message: (dayName: string, weekDay: string) => 
      `Jour sacré exceptionnel (${dayName} un ${weekDay}) - Parfait pour les cérémonies spirituelles`,
    type: 'ceremony'
  },
  {
    dayName: 'Bo',
    weekDay: 'mardi',
    condition: (dayName: string, weekDay: string) => 
      dayName === 'Bo' && weekDay === 'mardi',
    message: (dayName: string, weekDay: string) => 
      `Jour mystique puissant (${dayName} un ${weekDay}) - Favorable aux rituels`,
    type: 'ritual'
  }
];

export const checkSpecialDay = (dayName: string, weekDay: string) => {
  for (const rule of SPECIAL_DAY_RULES) {
    if (rule.condition(dayName, weekDay)) {
      return {
        isSpecialDay: true,
        specialMessage: rule.message(dayName, weekDay),
        specialType: rule.type
      };
    }
  }
  
  return {
    isSpecialDay: false,
    specialMessage: '',
    specialType: undefined
  };
};