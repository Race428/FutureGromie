const axios = require('axios')

module.exports = {
    sortPeople: async (req, res) => {
        const { sortBy } = req.query
        var swapiResults = [];
    


        // Pagination 


        for (let i = 1; i < 10; i++) {
            let spawiResponse = await axios.get(`https://swapi.co/api/people?page=${i}`)
            swapiResults.push(...spawiResponse.data.results)
        }

        // Mass Formulas 


        for (let k = 0; k < swapiResults.length; k++) {
            if (swapiResults[k].mass.includes(',')) {
                var newMassValue = swapiResults[k].mass.replace(',', '')
                swapiResults[k].mass = newMassValue
            }
        }

        for (let k = 0; k < swapiResults.length; k++) {
            let number = parseInt(swapiResults[k].mass);
            swapiResults[k].mass = number
        }

        for (let k = 0; k < swapiResults.length; k++) {

            if (isNaN(swapiResults[k].mass) === true)
                swapiResults[k].mass = 0;
        }




        // Height Formulas

    
        for (let k = 0; k < swapiResults.length; k++) {
            let number = parseInt(swapiResults[k].height);
            swapiResults[k].height = number
        }

        for (let k = 0; k < swapiResults.length; k++) {

            if (isNaN(swapiResults[k].height) === true)
                swapiResults[k].height = 0;
        }






        // Sorting


        if (sortBy === "mass-low") {

            let mass = swapiResults.sort(function (a, b) {
                return a.mass - b.mass
            })

            let sortedResults = mass;
            res.status(200).send(sortedResults)

        };

        if (sortBy === "mass-high") {
            let mass = swapiResults.sort(function (a, b) {
                return b.mass - a.mass
            })
            let sortedResults = mass;
            res.status(200).send(sortedResults)
        };


        if (sortBy === "name-a-z") {
            let name = swapiResults.sort(function (a, b) {
                if (a.name < b.name) { return -1 };
                if (a.name > b.name) { return 1 };
                return 0;
            })
            let sortedResults = name;
            res.status(200).send(sortedResults);
        };

        if (sortBy === "name-z-a") {
            let name = swapiResults.sort(function (a, b) {
                if (a.name > b.name) { return -1 };
                if (a.name < b.name) { return 1 };
                return 0;
            })
            let sortedResults = name;
            res.status(200).send(sortedResults)
        };

        if (sortBy === "height-low") {
            let height = swapiResults.sort(function (a, b) {
                return a.height - b.height
            })

            let sortedResults = height;
            res.status(200).send(sortedResults)
        }
        if (sortBy === "height-high") {
            
            let height = swapiResults.sort(function (a, b) {
                return b.height - a.height
            })

            let sortedResults = height;
            res.status(200).send(sortedResults)
        }
    }
}