// get homepage

const about = (req, res) => {
    res.render('generic-text', { 
        title: "About Loc8r",
        content: "Loc8r was created to help people find places to sit down and get a bit of work done.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero possimus incidunt, officiis aperiam illo nesciunt ea laborum blanditiis aliquam aspernatur! Corporis dolore deleniti aperiam hic dolores voluptatum amet ea." 
    });
};

module.exports = {
    about
};