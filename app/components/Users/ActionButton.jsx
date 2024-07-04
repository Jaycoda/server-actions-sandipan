"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const ActionButton = ({ title }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full">
      {pending ? "submitting..." : title}
    </Button>
  );
};

export default ActionButton;
