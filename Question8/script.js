var a = [1, 2,3], b = ["a","b","c"];
a.push.apply(a, b);
console.log(a)