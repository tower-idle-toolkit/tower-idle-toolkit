export const damageFormula = ({
  damagePercent,
  damage,
  critFactor,
  critChance,
  superCritMult,
  superCritChance,
}: {
  damagePercent: number;
  damage: number;
  critFactor: number;
  critChance: number;
  superCritMult: number;
  superCritChance: number;
}) =>
  (damagePercent / 100) *
  damage *
  (1 + (critFactor * critChance) / 100) *
  (1 + (((superCritMult * critChance) / 100) * superCritChance) / 100);
