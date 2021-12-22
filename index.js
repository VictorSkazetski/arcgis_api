const readXlsxFile = require('read-excel-file/node')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/test', function(req, res) {
        let data = {}
        readXlsxFile('data.xlsx').then((rows) => {
        data = rows.slice(1,rows.length).map((item,ind) => ({ x: item[0], y:item[1] }));
        res.json(data)
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
