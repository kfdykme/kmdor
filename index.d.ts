
declare interface CmdReq {
    cmd: string;
    next: CmdReq;
}

declare interface CmdArray {
    cmd: string[]
} 

declare interface Kmdor {
    Do(obj: string[] | any[], cmd: string, next: Function): void
    /**
     * 
     * @param normalLogFunc default is console.log
     * @param errorLogFunc default is console.error
     */
    init(normalLogFunc: Function, errorLogFunc?: Function): void 
}

declare const kmdor: Kmdor

declare module "kmdor" {
    export = kmdor
}