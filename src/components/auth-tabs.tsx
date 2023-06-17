import { FormLogin } from "./forms/form-login";
import { FormRegister } from "./forms/form-register";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-auto">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register ">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <FormLogin />
      </TabsContent>
      <TabsContent value="register">
        <FormRegister />
      </TabsContent>
    </Tabs>
  );
};
