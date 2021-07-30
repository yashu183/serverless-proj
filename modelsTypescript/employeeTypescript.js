"use strict";
// import { Model, AutoIncrement, Column, PrimaryKey, Table } from "sequelize-typescript";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Employee = void 0;
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
var sequelize_typescript_1 = require("sequelize-typescript");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        sequelize_typescript_1.AutoIncrement,
        sequelize_typescript_1.AllowNull(false),
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Employee.prototype, "id");
    __decorate([
        sequelize_typescript_1.AllowNull(false),
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Employee.prototype, "name");
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Employee.prototype, "desc");
    __decorate([
        sequelize_typescript_1.AllowNull(false),
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
    ], Employee.prototype, "dob");
    __decorate([
        sequelize_typescript_1.AllowNull(false),
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('male', 'female'))
    ], Employee.prototype, "gender");
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Employee.prototype, "job_title");
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Employee.prototype, "profile_pic");
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Employee.prototype, "cover_pic");
    Employee = __decorate([
        sequelize_typescript_1.Table({
            tableName: 'Employee',
            modelName: 'Employee'
        })
    ], Employee);
    return Employee;
}(sequelize_typescript_1.Model));
exports.Employee = Employee;
