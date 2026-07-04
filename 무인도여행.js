function solution(maps) {
    var answer = [];
    const rows = maps.length;
    const cols = maps[0].length;
    const arr = maps.map(row => row.split(''));

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    function bfs(startR, startC) {
        let queue = [[startR, startC]];
        let foodSum = Number(arr[startR][startC]);
        arr[startR][startC] = 'X';
        
        let head = 0;
        while (head < queue.length) {
            const [r, c] = queue[head++];
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && arr[nr][nc] !== 'X') {
                    foodSum += Number(arr[nr][nc]);
                    arr[nr][nc] = 'X'; 
                    queue.push([nr, nc]);
                }
            }
        }
        return foodSum;
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (arr[r][c] !== 'X') {
                answer.push(bfs(r, c));
            }
        }
    }
    
    if (answer.length === 0) return [-1];
    return answer.sort((a, b) => a - b);
}