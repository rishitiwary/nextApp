import type { Metadata } from "next";
import Login from "@sections/auth/Login";

export const metadata: Metadata = {
  title: "Login Now",
  description:
    "Welcome to test",
  authors: [{ name: "test", url: "test" }],
  keywords: ["grocery"]
};

export default function LoginPage() {
  return <Login />;
}
