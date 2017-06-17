function suma1(req, res) {
    var n1 = req.body.letterStamped,
        n2 = req.body.qty1,
        n3 = req.body.lettersMetered,
        n4 = req.body.qty2,
        n5 = req.body.largeEnvelopes,
        n6 = req.body.qty3,
        n7 = req.body.parcels,
        n8 = req.body.qty4,
        sum = (parseFloat(n1, 2) * parseFloat(n2, 2)) +
        (parseFloat(n3, 2) * parseFloat(n4, 2)) +
        (parseFloat(n5, 2) * parseFloat(n6, 2) + parseFloat(n7, 2) * parseFloat(n8, 2));
    res.send('<h1>Your amount to pay is: </h1>' + sum );
}


var attachService = function(app) {
    //app.get('/svc/greeting', greeting);
    app.post('/svc/add', suma1);
};

exports.attachService = attachService;