import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

interface DropdownData {
  name: string;
  code: string;
}

export const UserRegisterPage = () => {
  const [value, setValue] = useState("");
  const [selectedRole, setSelectedRole] = useState<DropdownData | null>(null);
  const countries: DropdownData[] = [
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

  return (
    <>
      <h1 className="pb-8">User register</h1>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="name">Name</label>
        <InputText
          id="name"
          aria-describedby="name-help"
          className="max-w-xs"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="surname">Surname</label>
        <InputText
          id="surname"
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
          onChange={(e: DropdownChangeEvent) => setSelectedRole(e.value)}
          options={countries}
          optionLabel="name"
          placeholder="Select a role"
          filter
          className="max-w-xs"
        />
      </div>
    </>
  );
};
