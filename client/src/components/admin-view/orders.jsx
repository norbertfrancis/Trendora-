import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";

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
                    <TableRow>Order Id</TableRow>
                    <TableRow>Order Data</TableRow>
                    <TableRow>Order Status</TableRow>
                    <TableRow>Order Price</TableRow>
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
