import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

interface DropdownData {
  name: string;
  code: string;
}
interface User {
  id: string;
  name: string;
  surName: string;
  role: string;
  timestamp: number;
}
const INITIAL_STATE: User[] = [
];

export const UserRegisterPage = () => {
  const [value, setValue] = useState("");
  const [users, setUser] = useState(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<DropdownData | null>(null);
  const roles: DropdownData[] = [
    { name: "Frontend Developer", code: "WB" },
    { name: "Scrum Master", code: "SM" },
    { name: "Bussiness Analyst", code: "BA" },
    { name: "AI Developer", code: "AD" },
    { name: "Product Owner", code: "PO" },
    { name: "Backend Developer", code: "BD" },
    { name: "FullStack", code: "FS" },
    { name: "Human Resources", code: "HR" },
    { name: "CEO", code: "CE" },
    { name: "CTO", code: "CT" },
  ];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { elements } = event.currentTarget;
    console.log("hola!", elements);
    // Manera 1: usar 'as HTMLInputElement' para castear el elemento
    // const inputName = elements.namedItem("name") as HTMLInputElement;

    const inputName = elements.namedItem("name");
    const inputSurname = elements.namedItem("surname");
    const inputRole = elements.namedItem("role");

    // Manera 2: asegurarse de que se trata de un elemento HTMLInputElement
    const isInputName = inputName instanceof HTMLInputElement; // Javascript Puro
    const isInputSurname = inputSurname instanceof HTMLInputElement; // Javascript Puro
    const isInputRole = inputRole instanceof HTMLSelectElement; // Javascript Puro
    if (
      !isInputName ||
      !isInputSurname ||
      !isInputRole ||
      isInputName == null ||
      isInputSurname == null ||
      isInputRole == null
    )
      return;

    //Type narrowing
    const newUser: User = {
      id: crypto.randomUUID(),
      name: inputName.value,
      surName: inputSurname.value,
      role: inputRole.value,
      timestamp: Date.now(),
    };
    console.log("el new user", newUser);

    setUser((prevItemsUsers) => {
      return [...prevItemsUsers, newUser];
    });
  };

  const handleRemoveUser = (id: User["id"]) => () => {
    setUser((prevItemsUsers) => {
      return prevItemsUsers.filter((currentUser) => currentUser.id !== id);
    });
  };

  return (
    <>
      <h1 className="pb-8">User register</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name">Name</label>
          <InputText
            id="name"
            name="name"
            aria-describedby="name-help"
            className="max-w-xs"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="surname">Surname</label>
          <InputText
            id="surname"
            name="surname"
            aria-describedby="surname-help"
            className="max-w-xs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="role">Role</label>
          <Dropdown
            value={selectedRole}
            onChange={(e) => {
              setSelectedRole(e.target.value);
              console.log("aaaaaa", e);
            }}
            options={roles}
            optionValue="code"
            optionLabel="name"
            name="role"
            placeholder="Select a role"
            filter
            className="max-w-xs"
          />
        </div>
        <div className="mt-8">
          <Button label="Submit" outlined />
        </div>
      </form>

      <div className="mt-8">
        <h2>Users</h2>
        <ul>
          {
            users.length === 0 ? <p>
              <strong>No users yet</strong>
            </p>:
            users.map((user) => (
              <li key={user.id} className="flex items-center">
                {user.name} {user.surName} {user.role}
                <div className="ml-4">
                <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel"  onClick={handleRemoveUser(user.id)} />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};
