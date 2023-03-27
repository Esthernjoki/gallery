var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://esthernjoki85:oDWo6pYIhyWX56cf@cluster0.pgml0lu.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://esthernjoki85:oDWo6pYIhyWX56cf@cluster0.pgml0lu.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://esthernjoki85:oDWo6pYIhyWX56cf@cluster0.pgml0lu.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
