import React from "react";
import flowers from "../../assets/images/hermosa-naturaleza-retro-flores.jpg";
import { ProgressBar } from "primereact/progressbar";
export const GeneralSummaryPage = () => {
  const valueTemplate40 = (value: string) => {
    return (
      <React.Fragment>
        {value}/<b>100</b>
      </React.Fragment>
    );
  };
  const valueTemplate90 = (value: string) => {
    return (
      <React.Fragment>
        {value}/<b>100</b>
      </React.Fragment>
    );
  };
  return (
    <div className="App">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={flowers}
            ></img>
          </div>
          <div className="p-8 grow" style={{ flexGrow: "1" }}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Curso React
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Alumno Apellido Apellido
            </a>
            <p className="mt-2 text-slate-500">Última vez actualizado: 1 día</p>
            <div className="mt-8">
              <ProgressBar
                value={40}
                displayValueTemplate={valueTemplate40}
              ></ProgressBar>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={flowers}
            ></img>
          </div>
          <div className="p-8" style={{ flexGrow: "1" }}>
            <a
              href="#"
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  hover:underline"
            >
              Nombre Apellido Apellido
            </a>
            <div className="block mt-1 text-lg leading-tight font-medium text-black">
              Curso React
            </div>
            <p className="mt-2 text-slate-500">
              Última vez actualizado: 3 días
            </p>
            <div className="mt-8">
              <ProgressBar
                value={90}
                displayValueTemplate={valueTemplate90}
              ></ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
