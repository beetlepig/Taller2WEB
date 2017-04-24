let DB= require('../../models/Posts/index');



function getPosts(req, res) {
    DB.getAll(function(error, pots) {
        if (!error) {
            res.status(200).json(pots);

        } else {

            console.log(error);
            res.status(500).json(error);
        }

    });
}

function createPosts() {

}



module.exports = {
    getPosts,
    createPosts
};