
export const LEVEL_UP_BASE = 600;

export interface LevelInfo {
  level: number;
  xpForNextLevel: number;
  xpInCurrentLevel: number;
  progressPercentage: number;
}

export const calculateLevel = (totalXp: number): LevelInfo => {
  let level = 1;
  let requiredXp = LEVEL_UP_BASE;
  let accumulatedXp = 0;

  // Loop para encontrar o nível atual baseado no XP total
  while (totalXp >= accumulatedXp + requiredXp) {
    accumulatedXp += requiredXp;
    level++;
    // A cada nível, a dificuldade aumenta em 20% (fator 1.2 exponencial)
    requiredXp = Math.floor(LEVEL_UP_BASE * (Math.pow(level, 1.2)));
  }

  const xpInCurrentLevel = totalXp - accumulatedXp;
  const progressPercentage = requiredXp > 0 ? (xpInCurrentLevel / requiredXp) * 100 : 0;

  return {
    level,
    xpForNextLevel: requiredXp,
    xpInCurrentLevel,
    progressPercentage
  };
};
