import React from "react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";

const FormDemo = () => (
  <Form.Root className="w-[260px]">
    <Form.Field className="grid mb-[10px]" name="loan-account-number">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Loan Account Number
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Loan Account Number is required
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid Loan Account Number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="account-type">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Type of Account:
        </Form.Label>
      </div>
      <Form.Control asChild>
        <RadioGroup.Root
          className="flex flex-col gap-2.5"
          defaultValue="default"
          aria-label="View density"
        >
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="checking"
              id="r1"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r1"
            >
              Checking
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="debit"
              id="r2"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r2"
            >
              Debit
            </label>
          </div>
        </RadioGroup.Root>
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="routing-number">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Routing Number
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Routing Number is required
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid Routing Number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="bank-account-number">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Bank Account Number
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Bank Account Number is required
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid Bank Account Number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="bank-account-number-confirm">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Confirm Bank Account Number
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Bank Account Numbers must match
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid Bank Account Number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        {"Make Payment".toUpperCase()}
      </button>
    </Form.Submit>
  </Form.Root>
);

export default FormDemo;
