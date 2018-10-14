document.addEventListener('DOMContentLoaded', () =>

    {

    getFetch()

    function getFetch(){
        return fetch('http://localhost3000/items')
        .then(r => r.json())
        .then(console.log)
    }

    }

)