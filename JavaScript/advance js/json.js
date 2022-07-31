// objects 
let j={
    "name": "Ayaan",
    "age": 20,
    "city": "Mangalore"
}
// array of objects 
let b=[
	{
        "name": "Ayaan",
        "age": 20,
        "city": "Mangalore"
	},
    {
        "name": "Zayn",
        "age": 22,
        "city": "Manipal"
	},
    {
        "name": "Bam",
        "age": 25,
        "city": "Bangalore"
	}
]
// objects within object 
let c=
{
    "name": "Arman",
    "id": "123",
    "role": ["Dev", "DB"],
    "age": 24,
    "doj": "21-11-2022",
    "married": false,
    "address": {
        "street": "2nd Cross, St. Lane",
        "city": "Mangalore",
        "country": "India"
    },
    "referred-by": "043"
}

// array of objects 
let a=[
	{
        "name": "Maryam",
        "id": "322",
        "role": ["DB"],
        "age": 23,
        "doj": "11-12-2022",
        "married": false,
        "address": {
            "street": "Sam Road",
            "city": "Bangalore",
            "country": "India"
            },
        "referred-by": "11"
	},
    {
        "name": "Ziesh",
        "id": "222",
        "role": ["HR"],
        "age": 33,
        "doj": "10-06-2020",
        "married": true,
        "address": {
            "street": "Aran Lane",
            "city": "Mangalore",
            "country": "India"
            },
        "referred-by": null
	}
]
// json data as string literals
const user = `{
    "name": "Bashit",
    "age": 23,
    "city": "Mulki"
}`;
// dynamic alocation of json data  

const age = 2;

const user2 = `{
    "name": "Alex C",
    "age": ${age},
    "city": "Houston"
}`;
console.log(user2);

// convert json data into js object
const userJSONData = `{
    "name": "Carry",
    "age": 24,
    "city": "Bangalore"
}`;

const userObj = JSON.parse(userJSONData);
console.log(userObj);

// convert js object into json objects 
const userObj2 = {
    name: 'Alex C', 
    age: 2, 
    city: 'Houston'
}

const userJSONData2 = JSON.stringify(userObj2);
console.log(userJSONData2);