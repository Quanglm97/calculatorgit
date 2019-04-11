module.exports = async (context)
require('knex')({
    client       : 'mysql',
    version :'5,7',
    connection   : {
        host     : '127.0.0.1',
        user     : 'root',
        password : '1',
        database : 'tranning'
    }
});
