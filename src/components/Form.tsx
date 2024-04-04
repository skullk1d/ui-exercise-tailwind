import { useState } from "react";
import FormChecking from "./FormChecking";
import { Account } from "./types";
import FormDebit from "./FormDebit";

const FormDemo = () => {
  const [activeAccount, setActiveAccount] = useState<Account>("Checking");

  return {
    Checking: <FormChecking setActiveAccount={setActiveAccount} />,
    Debit: <FormDebit setActiveAccount={setActiveAccount} />,
  }[activeAccount];
};

export default FormDemo;
