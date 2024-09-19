/**
 * Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

 */
function tellFortune(children,partner_name,geographic_location,job_title){
    return `You will be a ${job_title} in ${geographic_location}, and married to ${partner_name} with ${children} kids`
}
console.log(tellFortune(3, 'Edna', 'Kenya', 'Pilot'))
console.log(tellFortune(5, 'Joy', 'Kenya', 'Farmer'))
console.log(tellFortune(10, 'Milicent', 'Kenya', 'engineer'))
