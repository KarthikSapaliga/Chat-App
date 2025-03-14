import React from "react";
import { useState } from "react";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import banner from "@/assets/login2.png";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    console.log("login");
  };

  const handleSignup = async () => {
    console.log("Register");
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] shadow-2xl w-[80vw] border-2 bg-white border-white text-opacity-90 rounded-xl grid">
        <div className="flex gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col w-full gap-3">
            <h1 className="text-5xl font-bold">Welcome ✌️</h1>
            <p className="font-medium text-center">
              Fill in the details to get started
            </p>
            <div className="flex items-center justify-center w-full border-red-500">
              <Tabs className="w-3/4">
                <TabsList className="flex w-full">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-semibold data-[state=active]:border-b-purple-500 p-3 transition-all"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="login"
                  className="flex flex-col gap-5 mt-10"
                >
                  <Input
                    placeholder="Enter email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Enter password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleLogin}>
                    Login
                  </Button>
                </TabsContent>
                <TabsContent value="signup" className="flex flex-col gap-5">
                  <Input
                    placeholder="Enter email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Enter password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm password"
                    type="password"
                    className="rounded-full p-6"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleSignup}>
                    Register
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="hidden xl:flex justify-center items-center">
            <img src={banner} alt="banner" className="w-[700px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
