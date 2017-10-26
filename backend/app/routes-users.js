module.exports = function (app, User, router) {
    router.get("/all", function (req, res)  {
        process.nextTick(function ()    {
            User.find({}).exec(function(err, docs) { res.send(docs);});
        })
    })

    app.use("/user-server", router);
}