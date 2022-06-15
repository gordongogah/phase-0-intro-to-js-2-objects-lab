// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
//console.log(typeof(employee))
//console.log(Object.keys(employee))
//console.log(Object.values(employee))
function updateEmployeeWithKeyAndValue(key, value){
    //  const newEmployee = {...employee}
    //  newEmployee[key] = value;
    //  return newEmployee
    return{
        ...employee,
        [key]:value,
    };
    
}
//console.log(updateEmployeeWithKeyAndValue(employee,'age',35))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

}