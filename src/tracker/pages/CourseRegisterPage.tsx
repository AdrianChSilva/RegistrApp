import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

interface DropdownData {
  name: string;
  code: string;
}
interface Course {
  id: string;
  name: string;
  instructor: string;
  category: string;
  duration: string;
  timestamp: number;
}
const INITIAL_STATE: Course[] = [];

export const CourseRegisterPage = () => {
  const [value, setValue] = useState("");
  const [courses, setCourse] = useState(INITIAL_STATE);
  const [selectedCategory, setSelectedCategory] = useState<DropdownData | null>(
    null
  );
  const categories: DropdownData[] = [
    { name: "Management", code: "MG" },
    { name: "Software development", code: "SD" },
    { name: "Frontend", code: "FR" },
    { name: "Backend", code: "BK" },
    { name: "Soft skills", code: "SK" },
    { name: "Excel", code: "EX" },
    { name: "Databases", code: "DB" },
    { name: "Artificial intelligence", code: "AI" },
    { name: "Cloud", code: "CL" },
  ];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { elements } = event.currentTarget;
    // Manera 1: usar 'as HTMLInputElement' para castear el elemento
    // const inputCourseName= elements.namedItem("name") as HTMLInputElement;

    const inputCourseName = elements.namedItem("courseName");
    const inputInstructor = elements.namedItem("instructor");
    const inputCategory = elements.namedItem("category");
    const inputDuration = elements.namedItem("duration");

    // Manera 2: asegurarse de que se trata de un elemento HTMLInputElement
    const isInputCourseName = inputCourseName instanceof HTMLInputElement; // Javascript Puro
    const isInputInstructor = inputInstructor instanceof HTMLInputElement; // Javascript Puro
    const isInputCategory = inputCategory instanceof HTMLSelectElement; // Javascript Puro
    const isInputDuration = inputDuration instanceof HTMLInputElement; // Javascript Puro    
    
    if (
      !isInputCourseName ||
      !isInputInstructor ||
      !isInputCategory ||
      !isInputDuration ||
      isInputCourseName == null ||
      isInputInstructor == null ||
      isInputDuration == null ||
      isInputCategory == null
    )
      return;

    //Type narrowing
    const newCourse: Course = {
      id: crypto.randomUUID(),
      name: inputCourseName.value,
      instructor: inputInstructor.value,
      category: inputCategory.value,
      duration: inputDuration.value,
      timestamp: Date.now(),
    };

    setCourse((prevItemsCourses) => {
      return [...prevItemsCourses, newCourse];
    });
  };

  const handleRemoveCourse = (id: Course["id"]) => () => {
    setCourse((prevItemsCourses) => {
      return prevItemsCourses.filter(
        (currentCourse) => currentCourse.id !== id
      );
    });
  };

  return (
    <>
      <h1 className="pb-8">Course register</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="courseName">Course Name</label>
          <InputText
            id="courseName"
            name="courseName"
            aria-describedby="courseName-help"
            className="max-w-xs"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="instructor">Instructor</label>
          <InputText
            id="instructor"
            name="instructor"
            aria-describedby="instructor-help"
            className="max-w-xs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="integeronly" className="font-bold block mb-2">
            Duration
          </label>
          <InputNumber
            className="max-w-xs"
            id="duration"
            name="duration"
            aria-describedby="duration-help"
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="category">Category</label>
          <Dropdown
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            options={categories}
            optionValue="code"
            optionLabel="name"
            name="category"
            placeholder="Select a category"
            filter
            className="max-w-xs"
          />
        </div>
        <div className="mt-8">
          <Button label="Submit" outlined />
        </div>
      </form>

      <div className="mt-8">
        <h2>Courses</h2>
        <ul>
          {courses.length === 0 ? (
            <p>
              <strong>No courses yet</strong>
            </p>
          ) : (
            courses.map((course) => (
              <li key={course.id} className="flex items-center">
                {course.name} {course.instructor} {course.category} {course.duration}
                <div className="ml-4">
                  <Button
                    icon="pi pi-times"
                    rounded
                    text
                    severity="danger"
                    aria-label="Cancel"
                    onClick={handleRemoveCourse(course.id)}
                  />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
