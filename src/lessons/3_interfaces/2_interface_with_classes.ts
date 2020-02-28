// we can use interfaces to enforce that a class meets a particular contract
interface ClockInterface {
    getTime(d: Date): void;
}

// for that, we use the reserved word `implements` and specify the
// interface we are implementing.
// We can, also, implement multiple interfaces, separeting them with commas:
// class Clock implements ClockInterface, DateStructure { ... }
class Clock implements ClockInterface {
    getTime(d: Date) {
        const hours = d.getHours();
        const minutes = d.getMinutes();
        console.log(`It's ${hours}:${minutes}.`);
    }
}

const myClock = new Clock();
myClock.getTime(new Date());