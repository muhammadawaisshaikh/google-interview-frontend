function minimumStepsToStudent(grid, startX, startY, targetX, targetY) {
    const n = grid.length;

    // Directions: up, down, left, right
    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1],  // right
    ];

    // Queue for BFS: stores [x, y, steps]
    const queue = [[startX, startY, 0]];

    // Visited set to track visited cells
    const visited = new Set();
    visited.add(`${startX},${startY}`);

    // BFS loop
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();
        console.log("x, y, steps", x, y, steps);

        // If we reach the target, return the steps
        if (x === targetX && y === targetY) {
            console.log("steps: ", steps);
            return steps;
        }

        // Explore neighbors
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check bounds and if not visited
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited.has(`${nx},${ny}`)) {
                visited.add(`${nx},${ny}`);
                queue.push([nx, ny, steps + 1]);
            }
        }
    }

    // If target not reachable
    return -1;
}

const grid = [
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
];

const startX = 0, startY = 0;
const targetX = 3, targetY = 0;

const result = minimumStepsToStudent(grid, startX, startY, targetX, targetY);
console.log("Minimum steps:", result);
