const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


/*FIRST ATTEMPTS:
function findMatching(collection, fun) {
    const driverName = [];
    for (const driver of collection) {
        if (fun(driver)) {
            driverName.push(driver);
        }
    }
    return driverName;
}
const nameMatch = filter(drivers, function (driver) {
    return driver === "Bobby";
});
*/
// function findMatch = drivers.filter(driver => drivers.length > 6)
// console.log(findMatch);

// SECOND ATTEMPT: Passed tests 1 and 3
// function findMatching(arra, name) {
//     const driverName = [];
//     for (const driver of arra) {
//         if (driver === name) {
//             driverName.push(driver);
//         }

//     }
//     return driverName;
// }

// function findMatching(drivers, name) = drivers.filter((elem) => elem.toLowerCase().includes(name.toLowerCase()))
// retrun name; 

function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}


// function fuzzyMatch(drivers, string) {
//     const result = drivers.filter(elem => {
//         if (firstLetter === string) {
//             return true;
//         }
//     })
//     else {
//         return false;
//     }
// }

// function fuzzyMatch(drivers, string) {
//     // const result = drivers.filter(driverName => driverName.startsWith('') === string.startsWith(''));
//     // return result;
//     const result = [];
//     for (let i = 0; i < drivers.length; i++) {
//         if (drivers[i].startsWith(string)) result.push(drivers[i])
//     }
//     return result
// }

function fuzzyMatch(drivers, firstLetter) {
    const firstLetMatch = drivers.filter(driverName => driverName.charAt(0) === firstLetter.charAt(0));
    return firstLetMatch
}

function matchName(driver, string) {
    const driverInfo = driver.filter(driver => driver.name === string);
    return driverInfo;
}

