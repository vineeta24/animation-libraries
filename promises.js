/*
An async function can contain an await expression that pauses the execution of the async function 
to wait for the passed Promise's resolution, then resumes the async function's execution and evaluates 
as the resolved value.

*/

function resolveafter() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000)
    })
}
async function test() {
    console.log('calling')
    const res = await resolveafter()
    console.log(res);
}

test()