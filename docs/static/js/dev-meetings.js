// get next thursday
const nextThurs = moment().day(4 + 7);

// get next thursday in UTC for 22:00 and 20:00
const nextThurs22 = new Date(Date.UTC(
    nextThurs.year(),
    nextThurs.month(),
    nextThurs.date(),
    22
));
const nextThurs20 = new Date(Date.UTC(
    nextThurs.year(),
    nextThurs.month(),
    nextThurs.date(),
    20
));


// get next thursday in moment format for each time
// (so that we can more easily print it out)
const time20 = moment().
    year(nextThurs20.getFullYear()).
    month(nextThurs20.getMonth()).
    date(nextThurs20.getDate()).
    hour(nextThurs20.getHours()).
    minute(nextThurs20.getMinutes());
const time22 = moment().
    year(nextThurs22.getFullYear()).
    month(nextThurs22.getMonth()).
    date(nextThurs22.getDate()).
    hour(nextThurs22.getHours()).
    minute(nextThurs22.getMinutes());


const time20ID = document.getElementById("time20");
const time20Str = nextThurs20.getHours() + ":00";
if (time22.day() == 4) {
    time20ID.innerHTML = time20Str;
} else {
    time20ID.innerHTML = time20Str + " (Friday)";
}

const time22ID = document.getElementById("time22");
const time22Str = nextThurs22.getHours() + ":00";
if (time22.day() == 4) {
    time22ID.innerHTML = time22Str;
} else {
    time22ID.innerHTML = time22Str + " (Friday)";
}
// const tz = jstz.guess();
// console.log("you are in timezone " + tz.name());
// var utc20 = moment(now).hour(20);
// var utc22 = moment().hour(22);
// time20.innerHTML = utc20.add(6).format("hz");
// time22.innerHTML = utc22.add(6).format("hz");
