const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Test!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Test2!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Hello World"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "add content"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "My friend Mark is the best"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "what?!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "test3"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "HAHHAHAH"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;