import React, { useEffect, useRef } from "react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { validateAccountNumber } from "./utils";

const ROUTING_LEN = 9;

const FormDemo = () => {
  const radioRef = useRef(null);

  useEffect(() => {
    // HOTFIX: Ducktype setCustomValidity
    // NOTE: Issue with Form accessing setCustomValidity from RadioGroup control ref
    //    assuming it is a native input element.
    if (radioRef.current) {
      (radioRef.current as HTMLInputElement).setCustomValidity =
        (radioRef.current as HTMLInputElement).setCustomValidity ??
        (() => void 0);
    }
  }, []);

  return (
    <Form.Root className="grid grid-cols-1 lg:grid-cols-3">
      <Form.Field
        className="Form-Field col-span-1 lg:col-span-3 border-t border-r border-l"
        name="loan-account-number"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="Form-Field__Form-Label">
            Loan Account Number
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="Form-Field__Form-Control__input"
            type="text"
            required
          />
        </Form.Control>
        <Form.Message className="Form-Field__Form-Message" match="valueMissing">
          Loan Account Number is required
        </Form.Message>
        <Form.Message
          className="Form-Field__Form-Message"
          match={(value) => !validateAccountNumber(value)}
        >
          Please provide a valid Loan Account Number
        </Form.Message>
      </Form.Field>
      <Form.Field
        className="Form-Field col-span-1 w-[360px] lg:col-span-2 border-t border-r border-l"
        name="account-type"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="Form-Field__Form-Label">
            Type of Account:
          </Form.Label>
        </div>
        <Form.Control asChild>
          <RadioGroup.Root
            className="flex flex-row items-center gap-[35px] h-[100%] mt-[-15px] ml-[5px]"
            defaultValue="checking"
            aria-label="View density"
            required
            ref={radioRef}
          >
            <div className="flex">
              <RadioGroup.Item
                className="RadioGroup-Item"
                value="checking"
                id="r1"
              >
                <RadioGroup.Indicator className="RadioGroup-Indicator" />
              </RadioGroup.Item>
              <label className="RadioGroup-Root__label" htmlFor="r1">
                Checking
              </label>
            </div>
            <div className="flex">
              <RadioGroup.Item
                className="RadioGroup-Item"
                value="debit"
                id="r2"
              >
                <RadioGroup.Indicator className="RadioGroup-Indicator" />
              </RadioGroup.Item>
              <label className="RadioGroup-Root__label" htmlFor="r2">
                Debit Card
              </label>
            </div>
          </RadioGroup.Root>
        </Form.Control>
      </Form.Field>
      <div
        className="w-[291px] col-span-1 lg:row-span-4 border-t border-r border-b p-[5px] bg-indigo-100 bg-no-repeat ml-[-74px]"
        style={{
          backgroundImage: "url(/img/check.png)",
          backgroundPositionX: "-15px",
          backgroundPositionY: "56px",
        }}
      >
        <h3 className="text-center font-semibold text-[14px]">
          Where can I find the routing and
          <br />
          account number?
        </h3>
      </div>
      <Form.Field
        className="Form-Field col-span-1 w-[360px] lg:col-span-2 border-t border-r border-l"
        name="routing-number"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="Form-Field__Form-Label">
            Routing Number
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="Form-Field__Form-Control__input"
            type="text"
            required
          />
        </Form.Control>
        <Form.Message className="Form-Field__Form-Message" match="valueMissing">
          Routing Number is required
        </Form.Message>
        <Form.Message
          className="Form-Field__Form-Message"
          match={(value) => !validateAccountNumber(value, ROUTING_LEN)}
        >
          Please provide a valid 9-digit Routing Number
        </Form.Message>
      </Form.Field>
      <Form.Field
        className="Form-Field col-span-1 w-[360px] lg:col-span-2 border-t border-r border-l"
        name="bank-account-number"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="Form-Field__Form-Label">
            Bank Account Number
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="Form-Field__Form-Control__input"
            type="text"
            required
          />
        </Form.Control>
        <Form.Message className="Form-Field__Form-Message" match="valueMissing">
          Bank Account Number is required
        </Form.Message>
        <Form.Message className="Form-Field__Form-Message" match="typeMismatch">
          Please provide a valid Bank Account Number
        </Form.Message>
      </Form.Field>
      <Form.Field
        className="Form-Field col-span-1  w-[360px] lg:col-span-2 border"
        name="bank-account-number-confirm"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="Form-Field__Form-Label">
            Confirm Bank Account Number
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="Form-Field__Form-Control__input"
            type="text"
            required
          />
        </Form.Control>
        <Form.Message className="Form-Field__Form-Message" match="valueMissing">
          Bank Account Numbers must match
        </Form.Message>
        <Form.Message className="Form-Field__Form-Message" match="typeMismatch">
          Please provide a valid Bank Account Number
        </Form.Message>
      </Form.Field>
      <Form.Submit
        asChild
        className="lg:col-span-3 md:col-span-1 sm:col-span-1"
      >
        <button className="box-border w-[210px] text-white hover:bg-mauve3 inline-flex h-[50px] w-[200px] items-center justify-center bg-teal-500 px-[15px] font-semibold leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[20px]">
          {"Make Payment".toUpperCase()}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default FormDemo;
