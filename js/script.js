const app = new Vue({
    el: '#root',
    data: {
        email: [],

    },
    methods: {

    },
    created() {
        // ASINCRONA
        // email
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                alert("il programma non funziona");
            });

    }
});