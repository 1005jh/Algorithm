function solution(m, n, puddles) {
    var answer = 0;
    const arr = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (const [x, y] of puddles) {
        arr[y][x] = -1;
    }
    
    arr[1][1]= 1
    
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if ((y === 1 && x === 1) || arr[y][x] === -1) {
                continue;
            }
            const top = arr[y - 1][x] !== -1 ? arr[y - 1][x] : 0;
            const left = arr[y][x - 1] !== -1 ? arr[y][x - 1] : 0;
            console.log(top,left)
            arr[y][x] = (top + left) % 1000000007;
        }
    }
    return arr[n][m];
}