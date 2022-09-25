const mjernoMjestoDomacinstva = 4.8;

export const homeGroupFirstTarif = (aktivnaEnergija: number): number => {
  if (aktivnaEnergija) {
    const obnovljiviIzvori = aktivnaEnergija * 0.0042;
    const cijenaAktivneEnergije = aktivnaEnergija * 0.1346;
    const result =
      mjernoMjestoDomacinstva + cijenaAktivneEnergije + obnovljiviIzvori;
    return Number(result.toFixed(2));
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

export const otherGroupFirstTarif = (
  obracunSnage: number,
  aktivnaEnergijaVecaTarifa: number,
  aktivnaEnergijaManjaTarifa: number,
  prekomjernaReaktivnaEnergija: number
): number => {
  const mjernoMjesto = 9.65;
  const obracunSnageIznos = obracunSnage * 16.52;
  const aktivnaEnergijaVecaTarifaIznos = aktivnaEnergijaVecaTarifa * 0.1489;
  const aktivnaEnergijaManjaTarifaIzons = aktivnaEnergijaManjaTarifa * 0.0745;
  const prekomjernaReaktivnaEnergijaIznos =
    prekomjernaReaktivnaEnergija * 0.0322;
  const obnovljiviIzvori =
    (aktivnaEnergijaVecaTarifa + aktivnaEnergijaManjaTarifa) * 0.0042;
  const result =
    mjernoMjesto +
    obracunSnageIznos +
    aktivnaEnergijaVecaTarifaIznos +
    aktivnaEnergijaManjaTarifaIzons +
    prekomjernaReaktivnaEnergijaIznos +
    obnovljiviIzvori;
  return Number(result.toFixed(2));
};

export const otherGroupSecoundTarif = (
  aktivnaEnergijaVecaTarifa: number,
  aktivnaEnergijaManjaTarifa: number
): number => {
  const mjernoMjesto = 6.9;
  const aktivnaEnergijaVecaTarifaIznos = aktivnaEnergijaVecaTarifa * 0.2391;
  const aktvinaEnergijaManjaTarifaIzons = aktivnaEnergijaManjaTarifa * 0.1195;
  const obnovljiviIzvori =
    (aktivnaEnergijaVecaTarifa + aktivnaEnergijaManjaTarifa) * 0.0042;
  const result =
    mjernoMjesto +
    aktivnaEnergijaVecaTarifaIznos +
    aktvinaEnergijaManjaTarifaIzons +
    obnovljiviIzvori;

  return Number(result.toFixed(2));
};

export const otherGroupThirdTarif = (aktivnaEnergija: number): number => {
  const mjernoMjesto = 4.8;
  const aktivnaEnergijaIznos = aktivnaEnergija * 0.1346;
  const obnovljiviIzvori = aktivnaEnergija * 0.0042;
  const result = mjernoMjesto + aktivnaEnergijaIznos + obnovljiviIzvori;

  return Number(result.toFixed(2));
};

export const otherGroupFourthTarif = (
  aktivnaEnergijaVeca: number,
  aktivnaEnergijaManja: number
) => {
  const mjernoMjesto = 4.8;
  const aktivnaEnergijaVecaTarifaIznos = aktivnaEnergijaVeca * 0.1682;
  const aktivnaEnergijaManjaTarifaIzons = aktivnaEnergijaManja * 0.0841;
  const obnovljiviIzvori =
    (aktivnaEnergijaVeca + aktivnaEnergijaManja) * 0.0042;
  const result =
    mjernoMjesto +
    aktivnaEnergijaVecaTarifaIznos +
    aktivnaEnergijaManjaTarifaIzons +
    obnovljiviIzvori;

  return Number(result.toFixed(2));
};

export const otherGroupFifthTarif = (aktivnaEnergija: number): number => {
  const mjernoMjesto = 6.9;
  const aktivnaEnergijaIznos = aktivnaEnergija * 0.1913;
  const obnovljiviIzvori = aktivnaEnergija * 0.0042;
  const result = mjernoMjesto + aktivnaEnergijaIznos + obnovljiviIzvori;

  return Number(result.toFixed(2));
};
