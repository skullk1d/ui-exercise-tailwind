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
        className="col-span-1 lg:col-span-3 border-t border-r border-l p-[5px]"
        name="loan-account-number"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[12px] font-semibold leading-none text-black">
            Loan Account Number
          </Form.Label>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="valueMissing"
          >
            Loan Account Number is required
          </Form.Message>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match={(value) => !validateAccountNumber(value)}
          >
            Please provide a valid Loan Account Number
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center px-[10px] text-[16px] leading-none text-black outline-none hover:bg-blackA2 focus:bg-blackA2"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="col-span-1 w-[360px] lg:col-span-2 border-t border-r border-l p-[5px]"
        name="account-type"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[12px] font-semibold leading-none text-black">
            Type of Account:
          </Form.Label>
        </div>
        <Form.Control asChild>
          <RadioGroup.Root
            className="flex flex-row gap-[35px]"
            defaultValue="checking"
            aria-label="View density"
            required
            ref={radioRef}
          >
            <div className="flex items-center">
              <RadioGroup.Item
                className="aria-checked:bg-blue-500 bg-white w-[15px] h-[15px] rounded-full shadow-[0_0_2px] shadow-grayA4 hover:bg-blue-100 focus:bg-blue-500 outline-none cursor-default"
                value="checking"
                id="r1"
              >
                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-white" />
              </RadioGroup.Item>
              <label
                className="text-black text-[14px] leading-none pl-[5px]"
                htmlFor="r1"
              >
                Checking
              </label>
            </div>
            <div className="flex items-center">
              <RadioGroup.Item
                className="aria-checked:bg-blue-500 bg-white w-[15px] h-[15px] rounded-full shadow-[0_0_2px] shadow-grayA4 hover:bg-blue-100 focus:bg-blue-500 outline-none cursor-default"
                value="debit"
                id="r2"
              >
                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-white" />
              </RadioGroup.Item>
              <label
                className="text-black text-[14px] leading-none pl-[5px]"
                htmlFor="r2"
              >
                Debit Card
              </label>
            </div>
          </RadioGroup.Root>
        </Form.Control>
      </Form.Field>
      <div
        className="w-[295px] col-span-1 lg:row-span-4 border-t border-r border-b p-[5px] bg-indigo-100 bg-no-repeat ml-[-78px]"
        style={{
          backgroundImage: "url(/img/check.png)",
          backgroundPositionX: "-13px",
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
        className="col-span-1 w-[360px] lg:col-span-2 border-t border-r border-l p-[5px]"
        name="routing-number"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[12px] font-semibold leading-none text-black">
            Routing Number
          </Form.Label>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="valueMissing"
          >
            Routing Number is required
          </Form.Message>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match={(value) => !validateAccountNumber(value, ROUTING_LEN)}
          >
            Please provide a valid 9-digit Routing Number
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center px-[10px] text-[16px] leading-none text-black outline-none hover:bg-blackA2 focus:bg-blackA2"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="col-span-1 w-[360px] lg:col-span-2 border-t border-r border-l p-[5px]"
        name="bank-account-number"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[12px] font-semibold leading-none text-black">
            Bank Account Number
          </Form.Label>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="valueMissing"
          >
            Bank Account Number is required
          </Form.Message>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid Bank Account Number
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center px-[10px] text-[16px] leading-none text-black outline-none hover:bg-blackA2 focus:bg-blackA2"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="col-span-1  w-[360px] lg:col-span-2 border p-[5px]"
        name="bank-account-number-confirm"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[12px] font-semibold leading-none text-black">
            Confirm Bank Account Number
          </Form.Label>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="valueMissing"
          >
            Bank Account Numbers must match
          </Form.Message>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid Bank Account Number
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full inline-flex h-[35px] appearance-none items-center justify-center px-[10px] text-[16px] leading-none text-black outline-none hover:bg-blackA2 focus:bg-blackA2"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit
        asChild
        className="lg:col-span-3 md:col-span-1 sm:col-span-1"
      >
        <button className="box-border w-full text-white shadow-blackA4 hover:bg-mauve3 inline-flex h-[50px] w-[200px] items-center justify-center bg-teal-500 px-[15px] font-semibold leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          {"Make Payment".toUpperCase()}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default FormDemo;
