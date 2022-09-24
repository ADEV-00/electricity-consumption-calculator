const mjernoMjestoDomacinstva = 4.8;

export const homeGroupFirstTarif = (aktivnaEnergija: number) => {
  if (aktivnaEnergija) {
    const obnovljiviIzvori = aktivnaEnergija * 0.0042;
    const result = mjernoMjestoDomacinstva + aktivnaEnergija + obnovljiviIzvori;
    console.log(Number(result).toFixed(2));
    return Number(result).toFixed(2);
  }
  return;
};

export const homeGroupSecoundTarif = (
  aktivnaEnergijaVeca: number,
  aktivnaEnergijaManja: number
): number => {
  const obnovljiviIzvori =
    (aktivnaEnergijaVeca + aktivnaEnergijaManja) * 0.0042;
  const aktivnaEnergijaVecaTarifa = aktivnaEnergijaVeca * 0.1682;
  const aktivnaEnergijaManjaTarifa = aktivnaEnergijaManja * 0.0841;
  const result =
    mjernoMjestoDomacinstva +
    obnovljiviIzvori +
    aktivnaEnergijaVecaTarifa +
    aktivnaEnergijaManjaTarifa;
  return Number(result.toFixed(2));
};
