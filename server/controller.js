const axios = require('axios')

module.exports = {


    getPlanets: async (req, res) => {
        var swapiResults = [];


        // Pagination 
        for (let i = 1; i < 8; i++) {
            let spawiResponse = await axios.get(`https://swapi.co/api/planets?page=${i}`)
            swapiResults.push(...spawiResponse.data.results)
        }

        for (let i = 0; i < swapiResults.length; i++) {
          
          //skips the itteration if there is no residents
            if (swapiResults[i].residents.length < 1) {
                swapiResults[i].residents = ["This planet is a lone and dreary world"]
                continue
            }


            for (let k = 0; k < swapiResults[i].residents.length; k++) {
                let personApiUrl = swapiResults[i].residents[k]
                // console.log('person url', personApiUrl)
                let residentResponse = await axios.get(personApiUrl)
                let residentName = residentResponse.data.name
                // console.log('person name', residentName)
                swapiResults[i].residents[k] = residentName



            }
           


        }


        console.log(swapiResults)

        res.status(200).send(swapiResults)
    },


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

        if (sortBy === '') {
            console.log(swapiResults)
            res.status(200).send(swapiResults)
        }

        if (sortBy === "mass-low") {

            let mass = swapiResults.sort(function (a, b) {
                return a.mass - b.mass
            })

            let sortedResults = mass;
            console.log(sortedResults)
            res.status(200).send(sortedResults)

        };

        if (sortBy === "mass-high") {
            let mass = swapiResults.sort(function (a, b) {
                return b.mass - a.mass
            })
            let sortedResults = mass;
            console.log(sortedResults)
            res.status(200).send(sortedResults)
        };


        if (sortBy === "name-a-z") {
            let name = swapiResults.sort(function (a, b) {
                if (a.name < b.name) { return -1 };
                if (a.name > b.name) { return 1 };
                return 0;
            })
            let sortedResults = name;
            console.log(sortedResults)

            res.status(200).send(sortedResults);
        };

        if (sortBy === "name-z-a") {
            let name = swapiResults.sort(function (a, b) {
                if (a.name > b.name) { return -1 };
                if (a.name < b.name) { return 1 };
                return 0;
            })
            let sortedResults = name;
            console.log(sortedResults)
            res.status(200).send(sortedResults)
        };

        if (sortBy === "height-low") {
            let height = swapiResults.sort(function (a, b) {
                return a.height - b.height
            })

            let sortedResults = height;
            console.log(sortedResults)
            res.status(200).send(sortedResults)
        }
        if (sortBy === "height-high") {

            let height = swapiResults.sort(function (a, b) {
                return b.height - a.height
            })

            let sortedResults = height;
            console.log(sortedResults)
            res.status(200).send(sortedResults)
        }
    }
}