import flowers from '../../assets/images/hermosa-naturaleza-retro-flores.jpg'
export const GeneralSummaryPage = () => {
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
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Curso React
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Alumno Apellido Apellido
              </a>
              <p className="mt-2 text-slate-500">
              Última vez actualizado: 1 día
              </p>
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
            <div className="p-8">
              <a href="#" 
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  hover:underline">
                Nombre Apellido Apellido
              </a>
              <div

                className="block mt-1 text-lg leading-tight font-medium text-black"
              >
                Curso React
              </div>
              <p className="mt-2 text-slate-500">
                Última vez actualizado: 3 días
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}