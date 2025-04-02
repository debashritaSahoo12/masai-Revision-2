const people = [
  {
    name: "Alice",
    address: { 
        city: "New York", 
        street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];
let res=[]
for(let i=0;i<people.length;i++){
    let {name,address:{city,street:{name:street_name}}}=people[i]
     res.push(`${name} lives in ${city} on ${street_name}`)
}

console.log(res)
