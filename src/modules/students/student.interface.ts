
export type TStuent ={
    name: {
        firstName: string,
        lastName: string,
    },
    address: string,
    mobileNo: string, 
    bloodGroup : 'A+'| 'B+'| "O"| "O-"| "B-"
    father:{
        firstName:string,
        lastName:string,
        mobile:string,
        address: string
    }
}