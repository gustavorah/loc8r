// get 'home' page

const homelist = (req, res) => {
    res.render('locations-list', { 
        title: "Loc8r - find a place to work with wifi",
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }]
     });
};

// get 'location info' page

const locationInfo = (req, res) => {
    res.render('locations-info', { 
        title: "Starcups",
        pageHeader: {
            title: "Starcups"
        },
        sidebar: {
            context: "is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
            callToAction: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            openingTimes: [
                {
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },
                {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },
                {
                    days: 'Sunday',
                    closed: true
                }
            ],
            facilities: ['Hot drunks', 'Food', 'Premium wifi'],
            reviews: [
                {
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 February 2017',
                    reviewText: 'What a great place'
                },
                {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '14 February 2017',
                    reviewText: "It was okay. Coffee wasn't great."
                }
            ]
        }

    });
};

// get 'add review' page

const addReview = (req, res) => {
    res.render('location-review-form', { 
        title: "Review Starcups on Loc8r",
        pageHeader: {
            title: "Review Starcups"
        } 
    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};