function findMatching(drivers, string) {
    return drivers.filter((driver) => {
        return driver.toLowerCase() === string.toLowerCase();
    });
}


function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.substring(0, name.length) === name)
}

function matchName(drivers, string) {
    return drivers.filter((driver) => {
        return driver.name === string;
    })
}