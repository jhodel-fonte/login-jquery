class userCredentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    storeUser() {
        const uNameData = $('#username').val().trim();
        const uEmailData = $('#email').val().trim();
        const uPassData = $('#password').val().trim();

        sessionStorage.setItem("userKeyUname", uNameData);
        sessionStorage.setItem("userKeyEmail", uEmailData);
        sessionStorage.setItem("userKeyPass", uPassData);
    }

}