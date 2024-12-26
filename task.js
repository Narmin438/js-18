// fetch(`https://acb-api.algoritmika.org/api/transaction`)
// .then(res => res.json())
// .then(data => {
//     data.forEach(a => {
//         let from = a.from;
//         let to = a.to;
//         let amount = a.amount;
//         let transactionElement = document.createElement('p');
//         transactionElement.textContent = `${from} ${to}-ya ${amount} dollar kocurdu`;
//         document.body.appendChild(transactionElement);
//     });
// });


// fetch(`https://acb-api.algoritmika.org/api/transaction?from=John%20Smith`)
// .then(res => res.json())
// .then(data =>  {
//     data.map(a => {
//         let amount = a.amount;
//         let transactionElement = document.createElement('p');
//         transactionElement.textContent = `John Smith-e ${amount} dollar gonderdi`;
//         document.body.appendChild(transactionElement);
//     })
// })




let watch = document.createElement('div');
watch.style.margin = '20px';
document.body.appendChild(watch);
let seconds = 0;
function updatewatch() {
    seconds++;
    watch.textContent = `saniyelerin sayi ${seconds}`;
}

setInterval(updatewatch, 1000);

