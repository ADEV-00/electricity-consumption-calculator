import React, { useEffect, useState, useCallback } from "react";

import Head from "next/head";
import { NextPage } from "next";

import InputField from "../components/ui/inputField";
import Dropdown from "../components/ui/dropdown";
import {
  homeGroupFirstTarif,
  homeGroupSecoundTarif,
  otherGroupFifthTarif,
  otherGroupFirstTarif,
  otherGroupFourthTarif,
  otherGroupSecoundTarif,
  otherGroupThirdTarif,
} from "../utils/priceCalculate";
import { handlePDV } from "../utils/pdvCalculate";

const Home: NextPage = () => {
  const [mainCategory, setMainCategory] = useState<
    "kucanstvo" | "ostalo" | null
  >(null);
  const [currSubCategory, setCurrSubCategory] = useState() as any;
  const [value, setValue] = useState({
    aktivnaEnergija: null,
    aktivnaEnergijaVecaTarifa: null,
    aktivnaEnergijaManjaTarifa: null,
    obracunskaSnaga: null,
    prekomjernaReaktivnaEnergija: null,
  });

  const homeCategory = ["I tarifna grupa", "II tarifna grupa"];
  const otherCategory = [
    "I tarifna grupa",
    "II tarifna grupa",
    "III tarifna grupa",
    "IV tarifna grupa",
    "V tarifna grupa",
  ];

  useEffect(() => {
    mainCategory === "kucanstvo"
      ? setCurrSubCategory(homeCategory[0])
      : setCurrSubCategory(otherCategory[0]);
  }, [mainCategory]);

  const handleSubCategoryChange = useCallback(
    (category) => {
      setCurrSubCategory(category);
    },
    [currSubCategory]
  );

  const handleOnChange = useCallback(
    (e: any) => {
      setValue({
        ...value,
        [e.target.name]: Number(e.target.value),
      });
    },
    [value]
  );

  const homeTarifGroup = {
    "I tarifna grupa": (
      <>
        <InputField
          label="Aktivna energija"
          name="aktivnaEnergija"
          valueType="kWh"
          onChange={handleOnChange}
          tooltip="Aktivna energija cijena:</br> 100KM"
          value={value.aktivnaEnergija}
        />
      </>
    ),
    "II tarifna grupa": (
      <>
        <InputField
          label="Aktivna energija - veća tarifa"
          name="aktivnaEnergijaVecaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaVecaTarifa}
        />
        <InputField
          label="Aktivna energija - manja tarifa"
          name="aktivnaEnergijaManjaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaManjaTarifa}
        />
      </>
    ),
  };

  const otherTarifGroup = {
    "I tarifna grupa": (
      <>
        <InputField
          label="Obračunska snaga"
          name="obracunskaSnaga"
          valueType="kW"
          onChange={handleOnChange}
          value={value.obracunskaSnaga}
        />
        <InputField
          label="Aktivna energija - veća tarifa"
          name="aktivnaEnergijaVecaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaVecaTarifa}
        />
        <InputField
          label="Aktivna energija - manja tarifa"
          name="aktivnaEnergijaManjaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaManjaTarifa}
        />
        <InputField
          label="Prekomjerna reaktivna energija"
          name="prekomjernaReaktivnaEnergija"
          valueType="kvarh"
          onChange={handleOnChange}
          value={value.prekomjernaReaktivnaEnergija}
        />
      </>
    ),
    "II tarifna grupa": (
      <>
        <InputField
          label="Aktivna energija - veća tarifa"
          name="aktivnaEnergijaVecaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaVecaTarifa}
        />
        <InputField
          label="Aktivna energija - manja tarifa"
          name="aktivnaEnergijaManjaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaManjaTarifa}
        />
      </>
    ),
    "III tarifna grupa": (
      <>
        <InputField
          label="Aktivna energija"
          name="aktivnaEnergija"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergija}
        />
      </>
    ),
    "IV tarifna grupa": (
      <>
        <InputField
          label="Aktivna energija - veća tarifa"
          name="aktivnaEnergijaVecaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaVecaTarifa}
        />
        <InputField
          label="Aktivna energija - manja tarifa"
          name="aktivnaEnergijaManjaTarifa"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergijaManjaTarifa}
        />
      </>
    ),
    "V tarifna grupa": (
      <>
        <InputField
          label="Aktivna energija"
          name="aktivnaEnergija"
          valueType="kWh"
          onChange={handleOnChange}
          value={value.aktivnaEnergija}
        />
      </>
    ),
  };

  const homeTarifGroupCalculate = {
    "I tarifna grupa": homeGroupFirstTarif(value.aktivnaEnergija),
    "II tarifna grupa": homeGroupSecoundTarif(
      value.aktivnaEnergijaVecaTarifa,
      value.aktivnaEnergijaManjaTarifa
    ),
  };

  const otherTarifGroupCalculate = {
    "I tarifna grupa": otherGroupFirstTarif(
      value.obracunskaSnaga,
      value.aktivnaEnergijaVecaTarifa,
      value.aktivnaEnergijaManjaTarifa,
      value.prekomjernaReaktivnaEnergija
    ),
    "II tarifna grupa": otherGroupSecoundTarif(
      value.aktivnaEnergijaVecaTarifa,
      value.aktivnaEnergijaManjaTarifa
    ),
    "III tarifna grupa": otherGroupThirdTarif(value.aktivnaEnergija),
    "IV tarifna grupa": otherGroupFourthTarif(
      value.aktivnaEnergijaVecaTarifa,
      value.aktivnaEnergijaManjaTarifa
    ),
    "V tarifna grupa": otherGroupFifthTarif(value.aktivnaEnergija),
  };

  return (
    <div className="w-full max-h-screen h-screen">
      <Head>
        <title>Kalkulator potrosnje eleketricne energije</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="flex-1 h-full flex flex-col sm:flex-row">
        <div className=" sm:flex-1 relative flex justify-center items-center bg-green-400 sm:bg-transparent main-bg">
          <h1 className="text-white text-md sm:text-5xl uppercase font-black text-center sm:leading-[54px] fade-in-right">
            KALKULATOR
            <br /> troška električne <br />
            energije
          </h1>
        </div>
        <div className="flex-1 pt-10">
          <div className="w-2/4 flex flex-row flex-wrap justify-between mx-auto ">
            <div
              className={
                "space-y-2 animation-transition " +
                (mainCategory && "animation-transition-active")
              }
            >
              <p className="text-lg font-medium text-gray-700">
                Kategorija potrosnje
              </p>
              <div className="flex flex-row gap-5">
                <div
                  onClick={() => setMainCategory("kucanstvo")}
                  className={
                    "border border-gray-200 h-20 w-20 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer " +
                    (mainCategory === "kucanstvo"
                      ? "bg-[#1BF485] shadow-md text-white"
                      : " text-gray-700")
                  }
                >
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6156 30.0373V25.145C10.6156 23.8961 11.6355 22.8837 12.8935 22.8837H17.4922C18.0963 22.8837 18.6757 23.1219 19.1028 23.546C19.53 23.9701 19.77 24.5452 19.77 25.145V30.0373C19.7662 30.5565 19.9713 31.0558 20.3398 31.4242C20.7083 31.7927 21.2097 32 21.7327 32H24.8701C26.3354 32.0037 27.742 31.4285 28.7794 30.4013C29.8169 29.374 30.4 27.9791 30.4 26.5245V12.587C30.4 11.4119 29.8753 10.2973 28.9674 9.54346L18.2944 1.08139C16.4378 -0.402301 13.7778 -0.354396 11.9766 1.19516L1.54722 9.54346C0.596384 10.2751 0.0280836 11.393 0 12.587V26.5103C0 29.5421 2.47581 32 5.52987 32H8.59565C9.68195 32 10.5648 31.1299 10.5727 30.0515L10.6156 30.0373Z"
                      fill={mainCategory === "kucanstvo" ? "white" : "#3F3F3F"}
                    />
                  </svg>

                  <div className="text-[12px]">Kucanstvo</div>
                </div>
                <div
                  onClick={() => setMainCategory("ostalo")}
                  className={
                    "border border-gray-200 h-20 w-20 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer " +
                    (mainCategory === "ostalo"
                      ? "bg-[#1BF485] shadow-md text-white"
                      : " text-gray-700")
                  }
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33325 18.668H11.9999V21.3346H9.33325V18.668Z"
                      fill={mainCategory === "ostalo" ? "white" : "#3F3F3F"}
                    />
                    <path
                      d="M25.3333 2.66675H14.6667C13.9594 2.66675 13.2811 2.9477 12.781 3.4478C12.281 3.94789 12 4.62617 12 5.33341V13.3334H6.66667C5.196 13.3334 4 14.5294 4 16.0001V28.0001C4 28.3537 4.14048 28.6928 4.39052 28.9429C4.64057 29.1929 4.97971 29.3334 5.33333 29.3334H26.6667C27.0203 29.3334 27.3594 29.1929 27.6095 28.9429C27.8595 28.6928 28 28.3537 28 28.0001V5.33341C28 4.62617 27.719 3.94789 27.219 3.4478C26.7189 2.9477 26.0406 2.66675 25.3333 2.66675ZM6.66667 26.6667V16.0001H14.6667V26.6667H6.66667ZM18.6667 10.6667H16V8.00008H18.6667V10.6667ZM24 21.3334H21.3333V18.6667H24V21.3334ZM24 16.0001H21.3333V13.3334H24V16.0001ZM24 10.6667H21.3333V8.00008H24V10.6667Z"
                      fill={mainCategory === "ostalo" ? "white" : "#3F3F3F"}
                    />
                  </svg>

                  <div className="text-[12px]">Ostalo</div>
                </div>
              </div>
            </div>
            {mainCategory && (
              <>
                <div className="fade-in-down z-50 mb-5 xl:mb-16">
                  <Dropdown
                    data={
                      mainCategory === "kucanstvo"
                        ? homeCategory
                        : otherCategory
                    }
                    value={currSubCategory}
                    onChange={handleSubCategoryChange}
                    label="Tarifna Grupa"
                  />
                </div>

                <div className="flex flex-row flex-wrap justify-between w-full gap-5 fade-in-down">
                  {mainCategory === "kucanstvo"
                    ? homeTarifGroup[currSubCategory]
                    : otherTarifGroup[currSubCategory]}
                  <div className="w-40 space-y-2 flex flex-col justify-end">
                    <div className="text-md font-medium text-gray-700 my-auto">
                      Iznos
                    </div>
                    <div className="max-w-full h-9 flex flex-row items-center relative shadow-md rounded-md">
                      <div className="w-full h-full flex items-center font-bold text-gray-700 text-sm border-2 shadow-inner border-green-300 rounded-md pl-2 pr-12 shadow-green-300/30">
                        {mainCategory === "kucanstvo"
                          ? handlePDV(homeTarifGroupCalculate[currSubCategory])
                          : handlePDV(
                              otherTarifGroupCalculate[currSubCategory]
                            )}
                      </div>
                      <div className="font-medium text-gray-700 text-sm absolute right-3">
                        KM
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
