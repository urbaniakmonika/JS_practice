const scores = [75, 42, 90, 58, 33, 100, 67];


const passed = [];
const failed = [];

for (i = 0; i < scores.length; i++) {
    if (scores[i] >= 60) {
        passed.push(scores[i]);
    } else {
        failed.push(scores[i]);
    }
}

console.log("Zaliczone: " + passed + ", czyli razem: " + passed.length);
console.log("Nie zaliczone: " + failed + ", czyli razem: " + failed.length);