// import { Model, AutoIncrement, Column, PrimaryKey, Table } from "sequelize-typescript";

// export interface employeeInter  {
//     id? : number,
//     name : string,
//     desc : string,
//     dob : Date,
//     gender : string
//     profile_pic : string,
//     cover_pic : string,
//     job_title : string
// }


// @Table(
//     {
//         tableName : "emp",
//         timestamps : true
//     }
// )
// //@Table
// export class emp extends Model implements employeeInter{
//     @AutoIncrement
//     @PrimaryKey
//     @Column
//     id?:any;

//     @Column
//     name!: string;

//     @Column
//     desc!: string;

//     @Column
//     dob!: Date;

//     @Column
//     gender!: string;

//     @Column
//     profile_pic!: string;

//     @Column
//     cover_pic!: string;

//     @Column
//     job_title!: string;

// }

import { Table, PrimaryKey, AutoIncrement, Column, DataType, Model, AllowNull} from "sequelize-typescript";
@Table({
    tableName: 'emp',
    modelName: 'Employee'
})
export class Employee extends Model<Employee> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id?: number;
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;
    @Column(DataType.STRING)
    desc!: string;
    @AllowNull(false)
    @Column(DataType.DATE)
    dob!: string;
    @AllowNull(false)
    @Column(DataType.ENUM('male','female'))
    gender!: string;
    @Column(DataType.STRING)
    job_title!: string;
    @Column(DataType.STRING)
    profile_pic!: string;
    @Column(DataType.STRING)
    cover_pic!: string;
}