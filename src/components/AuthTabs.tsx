import { FormLogin } from "./forms/FormLogin";
import { FormRegister } from "./forms/FormRegister";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-auto">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
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
