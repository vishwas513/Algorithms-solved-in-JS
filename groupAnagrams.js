var groupAnagrams = function(strs) {
    const lists = [];
    strs && strs.length > 0 && 
    strs.reduce((map, str)=>{
        let s = str === '' ? str :    
            str.split('').sort((a,b)=>{
                if(a < b) return -1;
                if(a > b) return 1;
                return 0;
            }).reduce((a,b)=>a+b);
        if(map.has(s)){
            map.get(s).push(str);
        } else {
            map.set(s, [str]);
        }
        return map;
    }, new Map()).forEach((v,k)=>{
        lists.push(v);
    });
    return lists;
};