import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function UserForm({ dealers }: { dealers: string[] }) {
  return (
    <div>
      <form>form stuff</form>
    </div>
  );
}
