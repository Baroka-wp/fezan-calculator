export type LunarPhase = {
  name: string;
  emoji: string;
};

export function getLunarPhase(lunarDay: number): LunarPhase {
  // Lunar phases based on traditional 30-day lunar month
  if (lunarDay === 1) {
    return { name: 'Nouvelle Lune', emoji: '🌑' };
  } else if (lunarDay >= 2 && lunarDay <= 7) {
    return { name: 'Premier Croissant', emoji: '🌒' };
  } else if (lunarDay >= 8 && lunarDay <= 14) {
    return { name: 'Premier Quartier', emoji: '🌓' };
  } else if (lunarDay === 15) {
    return { name: 'Pleine Lune', emoji: '🌕' };
  } else if (lunarDay >= 16 && lunarDay <= 22) {
    return { name: 'Dernier Quartier', emoji: '🌗' };
  } else if (lunarDay >= 23 && lunarDay <= 29) {
    return { name: 'Dernier Croissant', emoji: '🌘' };
  } else {
    return { name: 'Nouvelle Lune', emoji: '🌑' };
  }
}

export function formatLunarDay(lunarDay: number, lunarMonth: number, isLeap: boolean): string {
  const phase = getLunarPhase(lunarDay);
  const leapIndicator = isLeap ? '(闰)' : '';
  return `${phase.emoji} Jour ${lunarDay} - Mois ${lunarMonth}${leapIndicator}`;
}
