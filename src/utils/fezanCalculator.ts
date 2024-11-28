import { FezanInfo } from '../types/fezan';
import { FEZAN_CYCLE } from '../data/fezanCycle';
import { checkSpecialDay } from './specialDays';

export const calculateFezanDay = (date: Date): FezanInfo => {
  const baseDate = new Date(2022, 10, 3); // 1er novembre 2022 (Hin/Fo, position 8)
  const diffTime = date.getTime() - baseDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  let position = (diffDays % 9 + 9) % 9;
  const fezanDay = FEZAN_CYCLE[position];

  const dayName = date.toLocaleDateString('fr-FR', { weekday: 'long' });
  const formattedDate = date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const { isSpecialDay, specialMessage, specialType } = checkSpecialDay(fezanDay.name, dayName);

  return {
    ...fezanDay,
    jour: dayName,
    date: formattedDate,
    isSpecialDay,
    specialMessage,
    specialType
  };
};