export interface FezanDay {
  name: string;
  type: 'favorable' | 'défavorable';
  color: string;
  position: number;
  description: string;
  special?: string;
}

export interface FezanInfo extends FezanDay {
  jour: string;
  date: string;
  isSpecialDay: boolean;
  specialMessage: string;
  specialType?: 'ritual' | 'ceremony' | 'general';
}

export interface SpecialDayRule {
  dayName: string;
  weekDay: string;
  condition: (dayName: string, weekDay: string) => boolean;
  message: (dayName: string, weekDay: string) => string;
  type: 'ritual' | 'ceremony' | 'general';
}