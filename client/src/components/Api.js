

function fetchAllIcebreakers(){
    fetch('/icebreakers')
    .then (r => r.json)
    .then(r => console.log(r))
}

export {fetchAllIcebreakers}