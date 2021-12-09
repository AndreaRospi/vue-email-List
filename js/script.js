const app = new Vue({
    el: '#root',
    data: {
        emails: [],

    },
    methods: {

    },
    created() {
        // ASINCRONA
        // email
        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                .then((response) => {
                    this.emails.push(response.data.response)
                    // handle success
                })
                .catch(function (error) {
                    // handle error
                    //console.log(error);
                    alert("il programma non funziona");
                });

        }
        console.log(this.emails);
    }
});