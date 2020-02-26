// type aliases
// create aliases to a any typescript type (string, number, union, literals, etc)
// It gives a new, reusable name to refer to this type.
// You create an alias using the reserved word 'type'.
// type NameYouWant = the_types;
type CardinalDirection = 'North' | 'East' | 'South' | 'West';
function move(direction: CardinalDirection): string {
    return `You have walked <strong>${direction}</strong>.`
}
console.log(move('East'))

type User = {
    name: String;
    age: number
}
const me: User = {
    name: 'Iago Rodrigues',
    age: 27
}
function greet(user: User): string {
    return `Hi, I'm <strong>${user.name}</strong>!`
}
console.log(greet(me))

// obs: aliases doesn't create a new type, it only gives a new name it
// so you can reuse this type without getting error, because you mispelled
// something.