// searching name

const javascriptBook = [
    'javascript hjsgdj',
    'dfsfg javascript',
    'cxvdfg Javascript ',
    'hghjg kgj gb',
    'hvhjvhj jhhj jj Javascript',
]
let find = 'javascript';
let findResult = [];
for (let javascript of javascriptBook){
    if (javascript.toLocaleLowerCase().includes(find.toLocaleLowerCase())){
        findResult.push(javascript);
    }
}
console.log(findResult);

// Sort number

const number = [55,5,4,2,1,14,8,52,88,99];
const SortNumber =  number.sort(function(a,b){
    return a - b;
})
console.log(SortNumber);