import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"


const PUBLIC_KEY =
  "pk_test_51K46DfSFHsGo8rMDQmNQxe96W4yfKEbxacFH2ugW4kzDZ36O7eAPfrcZ1xZDvOAxo9Si6opnTY9DeUj4qhOtJrho00kg2PPnNh";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
  </Elements>;
}
