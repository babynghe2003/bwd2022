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
             
        ],
        tags: ['experience','lbgt','sex']
    },{
        id: 4,
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
        id: 5,
        userID: 2,
        title: 'What does transgender mean and how can I challenge transphobia? ',
        description: 'What does transgender mean and how can I challenge transphobia?',
        vote: -5,
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
        id: 6,
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
        id: 7,
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
                userID: 4, content: 'You caan find answers on the internet, but you need to be very careful about what you search for. You can also find answers on the internet, but you need to be very careful about what you search for.',
                vote: 1
            },
            {
                userID: 4, content: 'You can find answers on the internet',
                vote: -5
            },
        ],
        tags: ['sex','marriage']
    },{
        id: 8,
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
    },{
        id: 9,
        userID: 1,
        title: 'I heard that teaching students about sex only encourages them to have sex. Is this true ?',
        description: 'I heard that teaching students about sex only encourages them to have sex. Is this true ?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'No. Sexuality education is not narrowly focused on how to have sex. It includes a focus on values, decision-making, biology, emotions, gender identity, and sexual feelings. It also presents abstinence,delaying fi rst sex, limiting the number of partners and safer sex.',
                vote: 20
            }
        ],
        tags: ['sex','service']
    },{
        id: 10,
        userID: 1,
        title: 'Does teaching about sex in schools take it out of the home?',
        description: 'Does teaching about sex in schools take it out of the home?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'Studies have found the opposite is true. Sexuality education programs result in increased parent-child communication about sexuality',
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
        tags: ['education','sexuality']
    },{
        id: 11,
        userID: 1,
        title: 'Why can’t schools just teach their students not to have sex? Schools should promote abstinence',
        description: 'Why can’t schools just teach their students not to have sex? Schools should promote abstinence?',
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
        tags: ['education']
    },{
        id: 12,
        userID: 1,
        title: 'Isn’t it true that condoms are not very effective in preventing pregnancy and sexually transmissible infections, like AIDS and chlamydia?',
        description: 'Isn’t it true that condoms are not very effective in preventing pregnancy and sexually transmissible infections, like AIDS and chlamydia?',
        vote: 6,
        answers: [
            {
                userID: 2, content: 'Repeated studies show condoms used consistently and correctly offer a high degree of protection against pregnancy and sexually transmissible infections (STIs). Using a condom is 10,000 times safer than not using one. The most common cause for failure is improper or inconsistent use. That is why including condom instruction in sexuality education is so important',
                vote: 5
            }
        ],
        tags: ['health','sexuality']
    },{
        id: 13,
        userID: 1,
        title: 'Isn’t it true that if you talk to kids about sex they will experiment?',
        description: 'Isn’t it true that if you talk to kids about sex they will experiment?',
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