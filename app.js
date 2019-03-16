// This is really a function called renderTable()

let tBody = d3.select('tbody');

// data.map(ufo_sighting => {
//     let newTr = tBody.append('tr');
//     Object.values(ufo_sighting).forEach(x => {
//         newTr.append('td').text(x)
//     })
// })

d3.select('#filter-btn').on('click', function(e) {
    d3.event.preventDefault();
    let inputDate = d3.select('#datetime').node().value;
    renderTable(inputDate)
    console.log(inputDate)
// call renderTable with dateVal
// use an array filter method
// to get the value in the form field
// and filter the array of objects against it
// d3.select('#datetime').node
})

function renderTable(dateVal){
    // Filter based on dateVal
    // mountain table rendering practice
    // date is equal to the input value
    d3.select('tbody').html('')
    
    let cheese = data.filter(x => {
        // d3.select('#datetime').node
        console.log(x.datetime)
        return x.datetime==dateVal
    })
        cheese.map(ufo_sighting => {
        let newTr = tBody.append('tr');
        Object.values(ufo_sighting).forEach(x => {
            newTr.append('td').text(x)
        })
    })
}

console.log(data)

// project 2 - get familiar with flask