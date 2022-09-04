
// Constructing Custom Promise

const dummyPromise = new Promise((resolve,reject) => {
    const x = false;
    if(x)
    {
        setTimeout(() => {
           resolve("I'am Arrived, Please mark my Attendance!");
        },4000);
    }

    else
    {
        reject("Sorry I'm not feeling well today!")
    }
})


// Using Async Function 

async function promise_return() {
    
    // Using Error Handling
    try
    {
        let result = await dummyPromise;
        console.log(result);
    }

    catch(Error)
    {
        console.log(Error);
    }
   
}

// Calling Async Function

promise_return();
