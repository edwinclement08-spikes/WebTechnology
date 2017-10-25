module.exports = function (app, Post, router) {
    
    router.get("/latest", function (req, res)  {
        process.nextTick(function ()    {
            // Post.find({}).sort('-date').limit(10).exec(function(err, docs) { console.log(docs); res.send(docs);});
            Post.find({}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })

    router.get("/Technology", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Technology"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })

    router.get("/Nature", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Nature"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })
    router.get("/Physics", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Physics"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })
    router.get("/Humans", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Humans"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })
    router.get("/Space", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Space"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })
    router.get("/Environment", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Environment"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })
    router.get("/Health", function (req, res)  {
        process.nextTick(function ()    {
            Post.find({"tags":"Health"}).sort('-date').exec(function(err, docs) { console.log(docs); res.send(docs);});
        })
    })


    app.use("/posts-server", router);
}


