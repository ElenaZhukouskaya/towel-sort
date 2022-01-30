// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2) {
                let elReverse = matrix[i].reverse();
                result.push(...elReverse);
            } else {
                result.push(...matrix[i]);
            }
        }
    }
    return result;
};
