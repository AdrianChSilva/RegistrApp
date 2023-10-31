import userGeneric from "../../assets/images/user.png";
export const UsersPage = () => {
  return (
    <div className="App">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-36 p-8"
              src={userGeneric}
            ></img>
          </div>
          <div className="p-8">
             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Frontend Developer
            </div> 
            <a
              href="#"
              className="block mt-5 text-lg leading-tight font-medium text-black hover:underline"
            >
              Adrián Chamorro Silva
            </a>
            {/* <p className="mt-2 text-slate-500">Última vez actualizado: 1 día</p> */}
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-36 p-8"
              src={userGeneric}
            ></img>
          </div>
          <div className="p-8">
            <a
              href="#"
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  hover:underline"
            >
              Adrián Chamorro Silva
            </a>
            <div className="block mt-5 text-lg leading-tight font-medium text-black">
              Frontend Developer
            </div>
            {/* <p className="mt-2 text-slate-500">
              Última vez actualizado: 3 días
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
