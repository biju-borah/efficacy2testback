const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/feed', (req, res) => {
    res.json({
        "eventID": "yHZG2GhfYzQgS5MwDnzP",
        "eventName": "Illuminits Event",
        "description": "notification",
        "startTime": "2022-02-18T18:30:00.000Z",
        "posterURL":
            "https://logos-world.net/wp-content/uploads/2020/06/ETSU-Buccaneers-emblem.jpg",
        "clubLogoURL":
            'https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg',
    })
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})