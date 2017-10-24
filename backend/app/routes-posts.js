module.exports = function (app, Post, router) {
    
    router.get("/latest", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({}).sort('-date').limit(10).exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })


    app.use("/posts-server", router);
}


