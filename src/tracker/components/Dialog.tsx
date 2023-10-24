import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { UserRegisterForm } from "../forms/UserRegisterForm";

interface DialogProps {
  header?: string;
  visible?: boolean;
  onHide?: () => void;
  showDialog?: boolean; // Nueva prop
  children?: React.ReactNode;
}

export default function DialogComponent(props: DialogProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <>
    <div onClick={() => setVisible(true)}>
    {props.children}
    </div>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
            setVisible(false)
            console.log(props.showDialog)
        }}
        footer={footerContent}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <UserRegisterForm></UserRegisterForm>
      </Dialog>
    </>
  );
}
