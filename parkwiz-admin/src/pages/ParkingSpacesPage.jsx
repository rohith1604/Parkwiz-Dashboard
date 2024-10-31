import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from 'lucide-react';

export default function ParkingSpacesPage() {
  const parkingSpaces = [
    { id: 'A1', status: 'Occupied', vehicle: 'ABC123', duration: '2 hours' },
    { id: 'A2', status: 'Available', vehicle: '-', duration: '-' },
    { id: 'B1', status: 'Reserved', vehicle: 'XYZ789', duration: 'Upcoming' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Parking Spaces</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Space
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search parking spaces..." />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Space ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parkingSpaces.map((space) => (
              <TableRow key={space.id}>
                <TableCell>{space.id}</TableCell>
                <TableCell>{space.status}</TableCell>
                <TableCell>{space.vehicle}</TableCell>
                <TableCell>{space.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}