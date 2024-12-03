import type { Metadata } from "next";
import UserLogins from "@sections/auth/UserLogin";

export const metadata: Metadata = {
  title: "Login Now",
  description:
    "Welcome to test",
  authors: [{ name: "test", url: "test" }],
  keywords: ["grocery"]
};

export default function UserLogin() {
  return <UserLogins/>;
}
