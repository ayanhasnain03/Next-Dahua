// app/auth/signin/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      alert(result.error);
    } else {
      router.push("/dashboard"); // Redirect to dashboard after successful sign-in
    }

    setIsLoading(false);
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while checking session
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl text-white text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white rounded-md"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
