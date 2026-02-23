import {add,UserName} from './math';

test("add function",()=>{
    expect(add(2,3)).toBe(5);
})

test("Check UserName function",()=>{
    expect(UserName("Harleen")).toBe(`Hello Harleen`);
    expect(UserName("")).toBe(null);
})