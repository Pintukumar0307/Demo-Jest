// beforeEach(()=>{
//     console.log('Before every test');
// })

// beforeAll(()=>{
//     console.log("Before all tests");
// })

// afterEach(()=>{
//     console.log("after each tests");
// })

afterAll(()=>{
    console.log("after all tests");
})


test("first",()=>{
    console.log("inner of first test");
})
test("second",()=>{
    console.log("inner of second test");
})

