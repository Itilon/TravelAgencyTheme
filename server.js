const async = () => {
    return Promise.resolve();
};

const { port } = require('./app/port-config');

async()
    .then(() => require('./app').init())
    .then((app) => {
        app.listen(port, () => console.log(`Server starts at: ${port}`));
    })