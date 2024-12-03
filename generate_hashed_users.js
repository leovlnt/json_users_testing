const bcrypt = require('bcrypt');
const fs = require('fs');

const users = [
    {
        "_id": "1",
        "username": "user1",
        "emailPrimary": "user1@example.com",
        "emailSecondary": "user1.secondary@example.com",
        "password": "TestUser1123",
        "verificationCode": "123456",
        "isVerified": false,
        "verifCodeExpires": "2024-01-01T00:00:00.000Z"
    },
    {
        "_id": "2",
        "username": "user2",
        "emailPrimary": "user2@example.com",
        "emailSecondary": "user2.secondary@example.com",
        "password": "TestUser2123",
        "verificationCode": "654321",
        "isVerified": false,
        "verifCodeExpires": "2024-01-02T00:00:00.000Z"
    },
    {
        "_id": "3",
        "username": "user3",
        "emailPrimary": "user3@example.com",
        "emailSecondary": "user3.secondary@example.com",
        "password": "TestUser3123",
        "verificationCode": "234567",
        "isVerified": false,
        "verifCodeExpires": "2024-01-03T00:00:00.000Z"
    },
    {
        "_id": "4",
        "username": "user4",
        "emailPrimary": "user4@example.com",
        "emailSecondary": "user4.secondary@example.com",
        "password": "TestUser4123",
        "verificationCode": "345678",
        "isVerified": false,
        "verifCodeExpires": "2024-01-04T00:00:00.000Z"
    },
    {
        "_id": "5",
        "username": "user5",
        "emailPrimary": "user5@example.com",
        "emailSecondary": "user5.secondary@example.com",
        "password": "TestUser5123",
        "verificationCode": "456789",
        "isVerified": false,
        "verifCodeExpires": "2024-01-05T00:00:00.000Z"
    },
    {
        "_id": "6",
        "username": "user6",
        "emailPrimary": "user6@example.com",
        "emailSecondary": "user6.secondary@example.com",
        "password": "TestUser6123",
        "verificationCode": "567890",
        "isVerified": false,
        "verifCodeExpires": "2024-01-06T00:00:00.000Z"
    },
    {
        "_id": "7",
        "username": "user7",
        "emailPrimary": "user7@example.com",
        "emailSecondary": "user7.secondary@example.com",
        "password": "TestUser7123",
        "verificationCode": "678901",
        "isVerified": false,
        "verifCodeExpires": "2024-01-07T00:00:00.000Z"
    },
    {
        "_id": "8",
        "username": "user8",
        "emailPrimary": "user8@example.com",
        "emailSecondary": "user8.secondary@example.com",
        "password": "TestUser8123",
        "verificationCode": "789012",
        "isVerified": false,
        "verifCodeExpires": "2024-01-08T00:00:00.000Z"
    },
    {
        "_id": "9",
        "username": "user9",
        "emailPrimary": "user9@example.com",
        "emailSecondary": "user9.secondary@example.com",
        "password": "TestUser9123",
        "verificationCode": "890123",
        "isVerified": false,
        "verifCodeExpires": "2024-01-09T00:00:00.000Z"
    },
    {
        "_id": "10",
        "username": "user10",
        "emailPrimary": "user10@example.com",
        "emailSecondary": "user10.secondary@example.com",
        "password": "TestUser10123",
        "verificationCode": "901234",
        "isVerified": false,
        "verifCodeExpires": "2024-01-10T00:00:00.000Z"
    },
    {
        "_id": "11",
        "username": "user11",
        "emailPrimary": "user11@example.com",
        "emailSecondary": "user11.secondary@example.com",
        "password": "TestUser11123",
        "verificationCode": "012345",
        "isVerified": false,
        "verifCodeExpires": "2024-01-11T00:00:00.000Z"
    },
    {
        "_id": "12",
        "username": "user12",
        "emailPrimary": "user12@example.com",
        "emailSecondary": "user12.secondary@example.com",
        "password": "TestUser12123",
        "verificationCode": "123450",
        "isVerified": false,
        "verifCodeExpires": "2024-01-12T00:00:00.000Z"
    },
    {
        "_id": "13",
        "username": "user13",
        "emailPrimary": "user13@example.com",
        "emailSecondary": "user13.secondary@example.com",
        "password": "TestUser13123",
        "verificationCode": "234501",
        "isVerified": false,
        "verifCodeExpires": "2024-01-13T00:00:00.000Z"
    },
    {
        "_id": "14",
        "username": "user14",
        "emailPrimary": "user14@example.com",
        "emailSecondary": "user14.secondary@example.com",
        "password": "TestUser14123",
        "verificationCode": "345012",
        "isVerified": false,
        "verifCodeExpires": "2024-01-14T00:00:00.000Z"
    },
    {
        "_id": "15",
        "username": "user15",
        "emailPrimary": "user15@example.com",
        "emailSecondary": "user15.secondary@example.com",
        "password": "TestUser15123",
        "verificationCode": "450123",
        "isVerified": false,
        "verifCodeExpires": "2024-01-15T00:00:00.000Z"
    },
    {
        "_id": "16",
        "username": "user16",
        "emailPrimary": "user16@example.com",
        "emailSecondary": "user16.secondary@example.com",
        "password": "TestUser16123",
        "verificationCode": "501234",
        "isVerified": false,
        "verifCodeExpires": "2024-01-16T00:00:00.000Z"
    },
    {
        "_id": "17",
        "username": "user17",
        "emailPrimary": "user17@example.com",
        "emailSecondary": "user17.secondary@example.com",
        "password": "TestUser17123",
        "verificationCode": "012345",
        "isVerified": false,
        "verifCodeExpires": "2024-01-17T00:00:00.000Z"
    },
    {
        "_id": "18",
        "username": "user18",
        "emailPrimary": "user18@example.com",
        "emailSecondary": "user18.secondary@example.com",
        "password": "TestUser18123",
        "verificationCode": "123456",
        "isVerified": false,
        "verifCodeExpires": "2024-01-18T00:00:00.000Z"
    },
    {
        "_id": "19",
        "username": "user19",
        "emailPrimary": "user19@example.com",
        "emailSecondary": "user19.secondary@example.com",
        "password": "TestUser19123",
        "verificationCode": "234567",
        "isVerified": false,
        "verifCodeExpires": "2024-01-19T00:00:00.000Z"
    },
    {
        "_id": "20",
        "username": "user20",
        "emailPrimary": "user20@example.com",
        "emailSecondary": "user20.secondary@example.com",
        "password": "TestUser20123",
        "verificationCode": "345678",
        "isVerified": false,
        "verifCodeExpires": "2024-01-20T00:00:00.000Z"
    },
    {
        "_id": "21",
        "username": "user21",
        "emailPrimary": "user21@example.com",
        "emailSecondary": "user21.secondary@example.com",
        "password": "TestUser21123",
        "verificationCode": "456789",
        "isVerified": false,
        "verifCodeExpires": "2024-01-21T00:00:00.000Z"
    },
    {
        "_id": "22",
        "username": "user22",
        "emailPrimary": "user22@example.com",
        "emailSecondary": "user22.secondary@example.com",
        "password": "TestUser22123",
        "verificationCode": "567890",
        "isVerified": false,
        "verifCodeExpires": "2024-01-22T00:00:00.000Z"
    },
    {
        "_id": "23",
        "username": "user23",
        "emailPrimary": "user23@example.com",
        "emailSecondary": "user23.secondary@example.com",
        "password": "TestUser23123",
        "verificationCode": "678901",
        "isVerified": false,
        "verifCodeExpires": "2024-01-23T00:00:00.000Z"
    },
    {
        "_id": "24",
        "username": "user24",
        "emailPrimary": "user24@example.com",
        "emailSecondary": "user24.secondary@example.com",
        "password": "TestUser24123",
        "verificationCode": "789012",
        "isVerified": false,
        "verifCodeExpires": "2024-01-24T00:00:00.000Z"
    },
    {
        "_id": "25",
        "username": "user25",
        "emailPrimary": "user25@example.com",
        "emailSecondary": "user25.secondary@example.com",
        "password": "TestUser25123",
        "verificationCode": "890123",
        "isVerified": false,
        "verifCodeExpires": "2024-01-25T00:00:00.000Z"
    },
    {
        "_id": "26",
        "username": "user26",
        "emailPrimary": "user26@example.com",
        "emailSecondary": "user26.secondary@example.com",
        "password": "TestUser26123",
        "verificationCode": "901234",
        "isVerified": false,
        "verifCodeExpires": "2024-01-26T00:00:00.000Z"
    },
    {
        "_id": "27",
        "username": "user27",
        "emailPrimary": "user27@example.com",
        "emailSecondary": "user27.secondary@example.com",
        "password": "TestUser27123",
        "verificationCode": "012345",
        "isVerified": false,
        "verifCodeExpires": "2024-01-27T00:00:00.000Z"
    },
    {
        "_id": "28",
        "username": "user28",
        "emailPrimary": "user28@example.com",
        "emailSecondary": "user28.secondary@example.com",
        "password": "TestUser28123",
        "verificationCode": "123456",
        "isVerified": false,
        "verifCodeExpires": "2024-01-28T00:00:00.000Z"
    },
    {
        "_id": "29",
        "username": "user29",
        "emailPrimary": "user29@example.com",
        "emailSecondary": "user29.secondary@example.com",
        "password": "TestUser29123",
        "verificationCode": "234567",
        "isVerified": false,
        "verifCodeExpires": "2024-01-29T00:00:00.000Z"
    },
    {
        "_id": "30",
        "username": "user30",
        "emailPrimary": "user30@example.com",
        "emailSecondary": "user30.secondary@example.com",
        "password": "TestUser30123",
        "verificationCode": "345678",
        "isVerified": false,
        "verifCodeExpires": "2024-01-30T00:00:00.000Z"
    },
    {
        "_id": "31",
        "username": "user31",
        "emailPrimary": "user31@example.com",
        "emailSecondary": "user31.secondary@example.com",
        "password": "TestUser31123",
        "verificationCode": "456789",
        "isVerified": false,
        "verifCodeExpires": "2024-01-31T00:00:00.000Z"
    },
    {
        "_id": "32",
        "username": "user32",
        "emailPrimary": "user32@example.com",
        "emailSecondary": "user32.secondary@example.com",
        "password": "TestUser32123",
        "verificationCode": "567890",
        "isVerified": false,
        "verifCodeExpires": "2024-02-01T00:00:00.000Z"
    },
    {
        "_id": "33",
        "username": "user33",
        "emailPrimary": "user33@example.com",
        "emailSecondary": "user33.secondary@example.com",
        "password": "TestUser33123",
        "verificationCode": "678901",
        "isVerified": false,
        "verifCodeExpires": "2024-02-02T00:00:00.000Z"
    },
    {
        "_id": "34",
        "username": "user34",
        "emailPrimary": "user34@example.com",
        "emailSecondary": "user34.secondary@example.com",
        "password": "TestUser34123",
        "verificationCode": "789012",
        "isVerified": false,
        "verifCodeExpires": "2024-02-03T00:00:00.000Z"
    },
    {
        "_id": "35",
        "username": "user35",
        "emailPrimary": "user35@example.com",
        "emailSecondary": "user35.secondary@example.com",
        "password": "TestUser35123",
        "verificationCode": "890123",
        "isVerified": false,
        "verifCodeExpires": "2024-02-04T00:00:00.000Z"
    },
    {
        "_id": "36",
        "username": "user36",
        "emailPrimary": "user36@example.com",
        "emailSecondary": "user36.secondary@example.com",
        "password": "TestUser36123",
        "verificationCode": "901234",
        "isVerified": false,
        "verifCodeExpires": "2024-02-05T00:00:00.000Z"
    },
    {
        "_id": "37",
        "username": "user37",
        "emailPrimary": "user37@example.com",
        "emailSecondary": "user37.secondary@example.com",
        "password": "TestUser37123",
        "verificationCode": "012345",
        "isVerified": false,
        "verifCodeExpires": "2024-02-06T00:00:00.000Z"
    },
    {
        "_id": "38",
        "username": "user38",
        "emailPrimary": "user38@example.com",
        "emailSecondary": "user38.secondary@example.com",
        "password": "TestUser38123",
        "verificationCode": "123456",
        "isVerified": false,
        "verifCodeExpires": "2024-02-07T00:00:00.000Z"
    },
    {
        "_id": "39",
        "username": "user39",
        "emailPrimary": "user39@example.com",
        "emailSecondary": "user39.secondary@example.com",
        "password": "TestUser39123",
        "verificationCode": "234567",
        "isVerified": false,
        "verifCodeExpires": "2024-02-08T00:00:00.000Z"
    },
    {
        "_id": "40",
        "username": "user40",
        "emailPrimary": "user40@example.com",
        "emailSecondary": "user40.secondary@example.com",
        "password": "TestUser40123",
        "verificationCode": "345678",
        "isVerified": false,
        "verifCodeExpires": "2024-02-09T00:00:00.000Z"
    }
];

const saltRounds = 10;

async function hashPasswords(users) {
    for (let user of users) {
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
    return users;
}

hashPasswords(users).then(hashedUsers => {
    fs.writeFileSync('hashed_users.json', JSON.stringify(hashedUsers, null, 2));
    console.log('Hashed users saved to hashed_users.json');
}).catch(err => {
    console.error('Error hashing passwords:', err);
});
