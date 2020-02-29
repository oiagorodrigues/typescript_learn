// intersection types
// contains all of the information of the intersection
type Admin = {
    name: String;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Employee & Admin;

const worker: ElevatedEmployee = {
    name: 'Iago',
    privileges: ['create-server'],
    startDate: new Date()
}