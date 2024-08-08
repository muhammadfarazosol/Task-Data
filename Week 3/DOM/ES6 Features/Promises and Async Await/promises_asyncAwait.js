// Now before Promises we use libraries names as blue bird and Q library
// These provide us same functionality as fetch .then .catch .finally like that
// But in ES6 we have Promise
// as it is an object we can create it via new keyword
// it takes call back function and also reduces call back hell

// creating a promise
const promiseOne = new Promise((resolve, reject) => {
  // do async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async Task is Complete");
    resolve();
  }, 1000);
});

// consumption of promise
promiseOne.then(() => {
  // this .then() is directly connected to resolve in above created promise
  //  it will not run to run this we have to add resolve() there
  console.log("Promise Consumed");
});

// now we have do this in another way also
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 consumed");
});

// consuming data in then()
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Faraz", email: "amirfaraz07@gmail.con" });
  }, 1000);
}).then((user) => {
  // ok now we are also cleared with one thing that then() is expecting some data and that resolve is attached to the then and it receives the data
  console.log(user);
});

// using multiple .then() and it leads to avoid call back hell
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // works when error = false
    if (!error) {
      resolve({ name: "Faraz", email: "amirfaraz07@gmail.con" });
    } else {
      reject(" Something went wrong ");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    // ok the 2nd then() statement takes the value from the 1st then() which it returns
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "It is always executed whether then is resolved and reject or not"
    );
  });

// Handling data using async await rather then using .then .catch
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Faraz", email: "amirfaraz07@gmail.con" });
    } else {
      reject(" Something went wrong ");
    }
  }, 1000);
});

const cosumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

cosumePromiseFive();

// Fetching data using promises and async await

const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response); // we are actually getting our response but why it give error on response.json() directly bcz it takes time to convert so we have to add await before it
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error = ${error}`);
  }
};

getAllUsers();

// converting above code into then catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// now we notice that above API is printing first then all above code is printing why is that
// bcz fetch() creates it another queue just like created in async await named as task queue but fetch() queue is named as microtask queue or priority queue
// this is special type of queue which executes it on more priority basis so microtask queue is executed first then task queue data is executed if any

// one important thing about fetch() is that HTTP errors like 404 etc are not handled by reject() in contrary we get them via response()
// It only rejects network errors

// one important note regarding fetch is on diary
