// get 'home' page

const homelist = (req, res) => {
    res.render('locations-list', { title: "Home" });
};

// get 'location info' page

const locationInfo = (req, res) => {
    res.render('index', { title: "Location info" });
};

// get 'add review' page

const addReview = (req, res) => {
    res.render('index', { title: "Add review" });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};