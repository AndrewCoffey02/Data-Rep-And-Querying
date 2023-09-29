//map function of ages
const ages = [25, 31, 42, 77];

//reads map and lets under 70 pass
let x = ages.map ( 
    (element)=> {
        if(element < 70){
        return element*2;
        }
        else {
            return;
        }
    }
)

//outputs map
console.log(x);
