function checkNumber(num) {
    const promise = new Promise((resolve , reject)=> {
        if(num >0) {
            resolve(`Success ${num} is positive number`);
        } else {
            reject(`Error ${num} is negative number`);
        }
    });
    return promise;
}

checkNumber(5)
    .then(result => console.log(result))
    .catch(error => console.error(error));
    