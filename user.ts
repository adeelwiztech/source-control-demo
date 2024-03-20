export class User{
    
    private _username : string;
    public get username() : string {
        return this._username;
    }
    public set username(v : string) {
        this._username = v;
    }
    
    findAllUsers(){
        return [];
    }

    findUser(){
        return {id:1001,fullName:'Adeel Shekhani', departmentId:14,isActive:true};
    }
}