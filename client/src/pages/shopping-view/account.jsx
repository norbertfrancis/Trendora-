import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImage from "../../assets/bg chat.jpg";

function ShoppingAccount() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[250px] w-full overflow-hidden">
        <img
          src={accImage}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <Tabs defaultValue="orders">
                <TabsList>
                    <TabsTrigger value="orders"> Orders</TabsTrigger>
                    <TabsTrigger value="address">Address</TabsTrigger>    
                    
                </TabsList>
                <TabsContent value="orders">orders Content</TabsContent>
                <TabsContent value="address">address content</TabsContent>

            </Tabs>
        </div>

      </div>
    </div>
  );
}

export default ShoppingAccount;
