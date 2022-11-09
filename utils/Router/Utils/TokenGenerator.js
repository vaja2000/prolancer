module.exports = (Length) => {
    var Result = '';
    var Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var CharactersLength = Characters.length;
    for (var i = 0; i < Length; i++) {
        Result += Characters.charAt(Math.floor(Math.random() * CharactersLength));
    }
    return Result;
}