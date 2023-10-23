export class Response<Type>{
    successed!: boolean;
    message!: string;
    data!: Type;
}