declare function main(code:string): { results: string; error: string; };
declare function waitInit(...a:any[]): Promise<void>;

export { main, waitInit };