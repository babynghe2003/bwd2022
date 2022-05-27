var questions = [
    {
        id: 1,
        userID: 1,
        title: 'Who can help me?',
        description: 'Do I know how to access sexual health services in my local area including services for contraception, abortion and counselling?',
        vote: 15,
        answers: [
            {
                userID: 2, content: 'You can find your nearest sexual health services',
                vote: 5
            },
            {
                userID: 3, content: 'You can buy a pregnancy test from pharmacies or some supermarkets, which you can do yourself at home.',
                vote: 3
            },            
            {
                userID: 4, content: 'You can find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -8
            },
        ],
        tags: ['health','service']
    },{
        id: 2,
        userID: 1,
        title: 'Long-term relationship',
        description: 'What are the challenges of long-term commitments and the qualities needed for successful loving relationships?',
        vote: 7,
        answers: [
            {
                userID: 2, content: 'Long-term commitments are not always easy. They require a lot of commitment, time, and money. This can be a challenge for some people who do not want to commit to something that they cannot change in the future. However, long-term commitments can also be beneficial in the sense that it is easier to plan ahead and achieve goals.',
                vote: 5
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: 5
            },
        ],
        tags: ['love']
    },{
        id: 3,
        userID: 1,
        title: 'lesbian or bisexual to family and friends',
        description: 'What is the experience like of ‘coming out’ about being gay, lesbian or bisexual to family and friends?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'There are no universally correct ways to come out and every person will have a different experience.',
                vote: 5
            },
            {
                userID: 3, content: "Coming out is the process of revealing one's sexual orientation to others. The term coming out can refer to revealing one’s identity in a social climate that is unaccepting of LGBT people, or it can refer to the process of recognizing one’s own same-sex attractions.",
                vote: 3
            },    
        ],
        tags: ['age','boy']
    },
    {
        id: 4,
        userID: 2,
        title: 'Mộng tinh thường xuyên...',
        description: 'Mình là T, 15 tuổi, dạo này sáng dậy là bị ướt đũng quần, tan suat kha cao,. mọi người ở đây có ai gặp trường hợp tương tự không ạ, và cách giải quyết như thế nào ?',
        vote: 10,
        answers: [
            {
                userID: 2, content: 'Không sao đâu b, mộng tinh xảy ra rất bình thường với con trai tuổi dậy thì nhé!',
                vote: 5
            },
            {
                userID: 3, content: 'Bệnh chắc cú rồi. Ko qwerty thì cũng phải qua khoảng thời gian khá lâu mới mộng tinh',
                vote: -2
            },
        ],
        tags: ['boy']
    },
    {
        id: 5,
        userID: 2,
        title: 'Nên Giáo Dục Giới Tính Cho Con Từ Lúc Nào?',
        description: 'Nên Giáo Dục Giới Tính Cho Con Từ Lúc Nào?',
        vote: 8,
        answers: [
            {
                userID: 2, content: 'mình nghĩ là khi bé học hết cấp 1',
                vote: 5
            },
            {
                userID: 3, content: 'Nếu giáo dục giới tính cho con thì mình nghĩ khi con bắt đầu hiểu biết, mình nên chia sẻ thường xuyên với con, để con có thể hiểu được.',
                vote: 8
            },
            {
                userID: 4, content: 'Bây giờ đúng là mình luôn suy nghĩ không biết giáo dục giới tính như thế nào cho con là đúng',
                vote: 0
            },
        ],
        tags: ['education','child']
    },
    {
        id: 6,
        userID: 1,
        title: 'What are realistic and unrealistic standards for bodily appearance?',
        description: 'What are realistic and unrealistic standards for bodily appearance?',
        vote: 2,
        answers: [
            {
                userID: 2, content: 'You can find your nearest sexual health services',
                vote: 5
            },
            {
                userID: 3, content: 'You can buy a pregnancy test from pharmacies or some supermarkets, which you can do yourself at home.',
                vote: 3
            },            
            {
                userID: 4, content: 'You can find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -5
            },
        ],
        tags: ['appearance']
    },{
        id: 7,
        userID: 1,
        title: 'What does transgender mean and how can I challenge transphobia?',
        description: 'What does transgender mean and how can I challenge transphobia?',
        vote: 4,
        answers: [
            {
                userID: 2, content: 'You can find your nearest sexual health services',
                vote: 5
            },
            {
                userID: 3, content: 'You can buy a pregnancy test from pharmacies or some supermarkets, which you can do yourself at home.',
                vote: 3
            },            
            {
                userID: 4, content: 'You can find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -5
            },
        ],
        tags: ['appearance','service']
    },{
        id: 8,
        userID: 1,
        title: 'protecting against discrimination',
        description: 'What protection does the law offer in protecting against discrimination on the grounds of gender and sexual orientation?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'You can find your nearest sexual health services',
                vote: 5
            },
            {
                userID: 3, content: 'You can buy a pregnancy test from pharmacies or some supermarkets, which you can do yourself at home.',
                vote: 3
            },            
            {
                userID: 4, content: 'You can find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -5
            },
        ],
        tags: ['health','love','sex']
    },{
        id: 9,
        userID: 1,
        title: 'Should we have sex and cohabitation before marriage? Why? Why not?',
        description: 'Should we have sex and cohabitation before marriage? Why? Why not?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'You can find your nearest sexual health services',
                vote: 5
            },
            {
                userID: 3, content: 'You can buy a pregnancy test from pharmacies or some supermarkets, which you can do yourself at home.',
                vote: 3
            },            
            {
                userID: 4, content: 'You can find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -5
            },
        ],
        tags: ['sex','marriage']
    },{
        id: 10,
        userID: 1,
        title: 'difficult to talk about in intimate relationship',
        description: 'What issues can be difficult to talk about in intimate relationships for example sexual pleasure and contraception and how can this be addressed?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'You can find your nearest sexual health services',
                vote: 5
            },
            {
                userID: 3, content: 'You can buy a pregnancy test from pharmacies or some supermarkets, which you can do yourself at home.',
                vote: 3
            },            
            {
                userID: 4, content: 'You can find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -5
            },
        ],
        tags: ['health','service']
    },

]
export default questions