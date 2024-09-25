import type { Metadata } from "next";
import UserLogins from "@sections/auth/UserLogin";

export const metadata: Metadata = {
  title: "Login Now",
  description:
    "Welcome to grozep",
  authors: [{ name: "grozep", url: "grozep" }],
  keywords: ["grocery"]
};

export default function UserLogin() {
  return <UserLogins/>;
}
