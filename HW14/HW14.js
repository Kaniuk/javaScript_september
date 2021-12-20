/*function wakeUp(timeout) {
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

}*/

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
    .finally(() => {
        console.log('It was great day!');
    });*/

/*async function someOrdinaryDay() {
    try {
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
    } catch (e) {
        console.error(e);
    }
}

someOrdinaryDay();*/

function wakeUp(timeout, cb) {
    setTimeout(() => {
        console.log('Good morning!');
        cb();
    }, timeout);
}

function takeShower(timeout, cb) {
    setTimeout(() => {
        console.log('Prepare for the day!');
        cb();
    }, timeout);
}

function haveBreakfast(timeout, cb) {
    setTimeout(() => {
        console.log('Delicious!');
        cb();
    }, timeout);
}

function takeChildToTheKindergarten(timeout, cb) {
    setTimeout(() => {
        console.log('Hurry up my sweet!');
        cb();
    }, timeout);

}

function goWork(timeout, cb) {
    setTimeout(() => {
        console.log('Finally!');
        cb();
    }, timeout);

}

function haveLunch(timeout, cb) {
    setTimeout(() => {
        console.log('Yammy');
        cb();
    }, timeout);

}

function goHome(timeout, cb) {
    setTimeout(() => {
        console.log('Good job!');
        cb();
    }, timeout);

}

function pickUpChild(timeout, cb) {
    setTimeout(() => {
        console.log('Hello my sweet!!!');
        cb();
    }, timeout);

}

function familyTime(timeout) {
    setTimeout(() => {
        console.log('Enjoy!!!');
    }, timeout);

}

wakeUp(100, () => {
    takeShower(220, () => {
        haveBreakfast(400, () => {
            takeChildToTheKindergarten(200, () => {
                goWork(100, () => {
                    haveLunch(200, () => {
                        goHome(300, () => {
                            pickUpChild(100, () => {
                                familyTime(700);
                            });
                        });
                    });
                });
            });
        });
    });
});
