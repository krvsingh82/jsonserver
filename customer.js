var faker =require('faker')
function generateCustomer(){
    var customer =[]
    for(var id=0;id<50;id++)
    {
var Pin = faker.customers.Pin();
var Name = faker.customers.Name();
var Address1 = faker.customers.Address1();
var Address2 = faker.customers.Address2();
var Address3 = faker.customers.Address3();
var Town = faker.customers.Town();
var County = faker.customers.County();
var Postcode = faker.customers.Postcode();
var Email = faker.customers.Email();
var DoB = faker.customers.DoB();
    customer.push({
        "Pin": Pin,
        "Name": Name,
        "Address1": Address1,
        "Address2": Address2,
        "Address3": Address3,
        "Town": Town,
        "County": County,
        "Postcode": Postcode,
        "Email": Email,
        "DoB": DoB  
    })
    }
    return {"customer":customer}
}
module.exports = generateCustomer
