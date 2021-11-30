module.exports = function deepFreeze(obj) {
    const frozen = {}
    Object.keys(obj).forEach(k => {
        if (typeof obj[k] === 'object') {
            frozen[k] = deepFreeze(Object.freeze(obj[k]));
        }
        return frozen[k] = Object.freeze(obj[k]);
    })
    return Object.freeze(frozen);
}
