Person.find().sort({age: 1}).limit(100).then(err, people => {});
#find all users then sort by age then limit it to 100

Event.findOne({ name: "Lightening Party" }).then(err, event => {});


Car.findById(req.params.carId).then(err, car => {});

Company.findOne({ _id: req.params.companyId }).then(err, company => {});

Monster.find({ type: "crawly" }).limit(10).sort({ferocity: 1}).then(err, monster => {});

User.find({ age: {$gt: 18, $lt: 65 }}).then(err, users => {});

User.find({likes: {$in: ['chatting', 'candle making']}}).then(err, users => {});