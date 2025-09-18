import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell,TableHead, TableHeader, TableRow } from "../ui/table";

function AdminOrdersView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order Id</TableHead>
                    <TableHead>Order Data</TableHead>
                    <TableHead>Order Status</TableHead>
                    <TableHead>Order Price</TableHead>
                    <TableHead>
                        <span className="sr-only">Details</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>23233</TableCell>
                    <TableCell>19/09/2025</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>23000</TableCell>
                    <TableCell>
                        <Button>View Details</Button>
                    </TableCell>
                </TableRow>
          
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AdminOrdersView;
