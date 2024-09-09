const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
];

function filterValidEmails(emails) {
    return emails.filter(email => 
        email.includes('@') && email.endsWith('.com') && email.indexOf('@') < email.lastIndexOf('.')
    );
}

const validEmails = filterValidEmails(emailList);
console.log(validEmails);
