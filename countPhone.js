var letterCombinations = function(digits) {
    
    var dict = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var res = [];
   if(digits == null || digits.length == 0) return res;

    function letterCombinationsDFS(level, out){
        if (level == digits.length) 
            res.push(out);
        else {
            var str = dict[digits[level]];
            for (var i = 0; i < str.length; ++i) {
                out += str[i];
                letterCombinationsDFS(level + 1, out);
                out = out.substr(0, out.length-1);
            }
        }
        return res;
    }
    return letterCombinationsDFS(0, '');
};