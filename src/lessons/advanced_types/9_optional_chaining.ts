// optional chaining
// when fetch data from the server and we don't know if
// some data will be available, we can use optional chaining
// to verify if some data is not undefined, if not, we move on.
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My Own Company' }
}

// to verify if the job object is available, in JS we would do like this:
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// in typescript, we ca use optional chaining:
console.log(fetchedUserData?.job?.title);