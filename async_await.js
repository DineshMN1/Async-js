async function greet() {
    let promise = new Promise((resolve , reject) =>{
        setTimeout(() => resolve("Hello"), 6000);
    });

    let result = await promise; // wait until the promise reslove

    console.log(result);
}

greet()