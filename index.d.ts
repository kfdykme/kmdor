
declare interface CmdReq {
    cmd: string;
    next: CmdReq;
}

declare interface CmdArray {
    cmd: List<string>;
}


declare function Do(obj: string[] | any[], cmd: string, next: Function): void

/**
 * 
 * @param normalLogFunc default is console.log
 * @param errorLogFunc default is console.error
 */
declare function init(normalLogFunc: Function, errorLogFunc?: Function): void 
