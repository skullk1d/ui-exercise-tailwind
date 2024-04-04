import { useState } from "react";
import FormChecking from "./FormChecking";
import { Account } from "./types";

const FormDemo = () => {
  const [activeAccount, setActiveAccount] = useState<Account>("Checking");
  return {
    Checking: <FormChecking setActiveAccount={setActiveAccount} />,
    Debit: null,
  }[activeAccount];
};

export default FormDemo;
