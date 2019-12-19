const express = require('express');
const cors = require('cors');
const { nodePort: port } = require('./config');

const { User } = require('./sequelize')

const app = express();

app.use(express.json()); //replaces body-parser
// app.use(express.urlencoded());
app.use(cors());

require('./routes')(app);

// app.get('api/v1/users', async (req, res, next) => {
//     const users = await User.findAll();
//     res.json(users.map(u => u.toJSON()));    
// })

app.listen(port, () => {
    console.log('server started on port ' + port);
});




