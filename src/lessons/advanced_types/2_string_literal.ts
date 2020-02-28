// string literal types
// Specify the exact value a string MUST have.
function move(direction: 'North' | 'East' | 'South' | 'West'): string {
    return `You have walked <strong>${direction}</strong>.`
}
// move('North')
// You can pass any of the allowed string defined, but if you
// other string will give an error.
// move('Somewhere') // Argument of type '"Somewhere"' is not assignable to parameter of type '"North" | "East" | "South" | "West"'.