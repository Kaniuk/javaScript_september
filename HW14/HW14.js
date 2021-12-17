function wakeUp(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good morning!');
            resolve();
        }, timeout);
    });
}

function takeShower(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Prepare for the day!');
            resolve();
        }, timeout);
    });
}

function haveBreakfast(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Delicious!');
            resolve();
        }, timeout);
    });
}

function takeChildToTheKindergarten(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hurry up my sweet!');
            resolve();
        }, timeout);
    });

}

function goWork(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finally!');
            resolve();
        }, timeout);
    });

}

function haveLunch(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Yammy');
            resolve();
        }, timeout);
    });

}

function goHome(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good job!');
            resolve();
        }, timeout);
    });

}

function pickUpChild(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello my sweet!!!');
            resolve();
        }, timeout);
    });

}

function familyTime(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Enjoy!!!');
            resolve();
        }, timeout);
    });

}

/*
wakeUp(500)
    .then(() => {
        return takeShower(1000);
    })
    .then(() => {
        return haveBreakfast(500);
    })
    .then(() => {
        return takeChildToTheKindergarten(300);
    })
    .then(() => {
        return goWork(200);
    })
    .then(() => {
        return haveLunch(200);
    })
    .then(() => {
        return goHome(400);
    })
    .then(() => {
        return pickUpChild(300);
    })
    .then(() => {
        return familyTime(3000);
    })
    .then(() => {
        console.log('It was great day!');
    });*/

async function someOrdinaryDay() {
    const dayBegin = await (wakeUp(1000));
    await (takeShower(100));
    await (haveBreakfast(300));
    await (takeChildToTheKindergarten(300));
    await (goWork(100));
    await (haveLunch(250));
    await (goHome(500));
    await (pickUpChild(500));
    await (familyTime(5000));
    console.log('It was great day!');

}

someOrdinaryDay();