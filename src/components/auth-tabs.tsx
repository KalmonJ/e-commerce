import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-auto">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="register">Change your password here.</TabsContent>
    </Tabs>
  );
};
