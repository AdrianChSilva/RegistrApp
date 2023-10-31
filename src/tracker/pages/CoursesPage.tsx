import courseReactImage from "../../assets/images/react-image.jpeg";
import courseAngularImage from "../../assets/images/angular-image.jpeg";
import courseSolidImage from "../../assets/images/solid-image.jpeg";
export const CoursesPage = () => {
  return (
    <div className="App">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={courseReactImage}
            ></img>
          </div>
          <div className="p-8">
             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
             React: De cero a experto ( Hooks y MERN )
            </div> 
            <a
              href="#"
              className="block mt-5 text-lg leading-tight font-medium text-black hover:underline"
            >
              Fernando Herrera
            </a>
             <p className="mt-2 text-slate-500">Duration: 48 horas</p> 
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={courseAngularImage}
            ></img>
          </div>
          <div className="p-8">
            <a
              href="#"
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  hover:underline"
            >
              Principios Solid y Clean Code
            </a>
            <div className="block mt-5 text-lg leading-tight font-medium text-black">
            Fernando Herrera
            </div>
             <p className="mt-2 text-slate-500">
              Duration: 56 horas
            </p> 
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-3">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={courseSolidImage}
            ></img>
          </div>
          <div className="p-8">
            <a
              href="#"
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold  hover:underline"
            >
              Angular de cero a experto ( Edición 2023 )
            </a>
            <div className="block mt-5 text-lg leading-tight font-medium text-black">
            Fernando Herrera
            </div>
            <p className="mt-2 text-slate-500">
              Duration: 7 horas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
