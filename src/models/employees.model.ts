import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Employees'}}})
export class Employees extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 35,
    generated: 0,
    mssql: {columnName: 'FName', dataType: 'varchar', dataLength: 35, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  fName: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 35,
    generated: 0,
    mssql: {columnName: 'LName', dataType: 'varchar', dataLength: 35, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  lName: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 11,
    generated: 0,
    mssql: {columnName: 'PhoneNumber', dataType: 'varchar', dataLength: 11, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  phoneNumber?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'ManagerId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  managerId?: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'DepartmentId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  departmentId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Salary', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  salary: number;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated: 0,
    mssql: {columnName: 'HireDate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  hireDate: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Employees>) {
    super(data);
  }
}

export interface EmployeesRelations {
  // describe navigational properties here
}

export type EmployeesWithRelations = Employees & EmployeesRelations;
