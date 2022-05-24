var questions = [
    {
        id: 1,
        userID: 1,
        title: 'Cach de yeu nhieu nguoi cung luc',
        description: 'Ok so I want when I click an image button it runs a function and check if the button image is lets say equal to img1',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['sex', 'couple']
    },
    {
        id: 2,
        userID: 2,
        title: 'Ga co truoc hay trung co truoc',
        description: 'Ok so I want when I click an image button it runs a function and check if the button image is lets say equal to img1',

        vote: -2,
        answers: [
            {
                userID: 1, content: 'dddfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsssdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfssdffsddsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['abc', 'sex']
    },
    {
        id: 3,
        userID: 4,
        title: 'Как правильно писать код в JavaScript?',
        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',

        vote: 0,
        answers: [],
        tags: ['abc', 'couple']

    }, {
        id: 4,
        userID: 1,
        title: 'Cach de yeu nhieu nguoi cung luc',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['sex', 'couple']
    },
    {
        id: 5,
        userID: 2,
        title: 'Ga co truoc hay trung co truoc',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 1, content: 'dddfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsssdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfssdffsddsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['abc', 'sex']
    },
    {
        id: 6,
        userID: 4,
        title: 'Как правильно писать код в JavaScript?',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'dfasdfasdfasdfasdfdf',
                vote: -2
            },
            {
                userID: 1, content: 'fsdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['abc', 'couple']

    }, {
        id: 7,
        userID: 1,
        title: 'Cach de yeu nhieu nguoi cung luc',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['sex', 'couple']
    },
    {
        id: 8,
        userID: 2,
        title: 'Ga co truoc hay trung co truoc',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 1, content: 'dddfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            }
        ],
        tags: ['abc', 'sex']
    },
    {
        id: 9,
        userID: 4,
        title: 'Как правильно писать код в JavaScript?',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'dfasdfasdfasdfasdfdf',
                vote: -2
            },
            {
                userID: 1, content: 'fsdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['abc', 'couple']

    }, {
        id: 10,
        userID: 1,
        title: 'Cach de yeu nhieu nguoi cung luc',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['sex', 'couple']
    },
    {
        id: 11,
        userID: 2,
        title: 'Ga co truoc hay trung co truoc',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 1, content: 'dddfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'asdfasdfsdfasdfsssdsdfasdfasdfss',
                vote: -2
            },
            {
                userID: 4, content: 'asdfasdfsdfasdfssdffsddsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['abc', 'sex']
    },
    {
        id: 12,
        userID: 4,
        title: 'Как правильно писать код в JavaScript?',

        description: 'Right now the websocket endpoint looks like this, but at the moment, if you connect to, for example, ws://localhost:8000/ws/1, and then connect to ws://localhost:8000/ws/2, the second one will not respond.',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'asdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 2
            },
            {
                userID: 3, content: 'dfasdfasdfasdfasdfdf',
                vote: -2
            },
            {
                userID: 1, content: 'fsdfasdfsdfasdfsdsdfasdfasdfss',
                vote: 5
            },
        ],
        tags: ['abc', 'couple']

    }
]
export default questions