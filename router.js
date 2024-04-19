const examsRoute = require('./routes/exam.js');

function routeRequests(app){
    if(true){ // developer paid
        app.use('/exam', examsRoute);
        app.get('/', (req, res)=>{
            res.render('index');
        })
        app.use((req, res)=>{
            res.status(404).render('404');
        })
    }else{ // developer not paid
        app.use((req, res)=>{
            res.status(402).render('402')
        })
    }
}

module.exports = routeRequests;