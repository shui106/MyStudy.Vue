// 1.yarn add swagger-axios-codegen

//https://github.com/shui106/swagger-axios-codegen
//export interface ISwaggerOptions {
//  className: string
//  methodNameMode: 'operationId' | 'path'
//  type: 'ts' | 'js'  // only implement ts
//  outputDir: string
//  fileName: string
//  useStaticMethod: boolean
//}

//const defaultOptions = {
//  className: 'Service',
//  methodNameMode: 'operationId',
//  type: 'ts',
//  outputDir: './service',
//  fileName: 'index.ts'
//}

// 2. run this code
const { codegen } = require("swagger-axios-codegen");
codegen({
    methodNameMode: "path",
    remoteUrl: "http://localhost:21021/swagger/v1/swagger.json",
    outputDir: __dirname,
    useStaticMethod: true,
    fileName: 'service-proxies.ts'
});

// 3. use
//import { UserService } from './service'
//const userService = new UserService()
//await userService.GetAll();