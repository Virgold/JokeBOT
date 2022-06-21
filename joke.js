// const getJokes = async() => {
//     const res = await axios.get('https://icanhazdadjoke.com/',{
//         headers: {
//             Accept: "application/json"
//         }
//     })
//     jokes= await res.json();
//     console.log(res);
// }
// getJokes();



const update = Vue.createApp({
    data() {
        return {
            jokeBtn: "Tell me a Joke",
            laugh: "",
            jokes: null,
            laughDiv: "",
            lang: 'zh-Hant',
            voicesList: [],
        }
    },

    methods: {
        async getJokes() {
            const res = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: "application/json"
                }
            })
            this.jokes = res.data.joke;
            this.laugh = "😂";
            this.laughDiv = "border border-0";
            var synth = window.speechSynthesis
            var utterThis = new SpeechSynthesisUtterance(this.jokes)
            // utterThis.text = this.jokes;
            // utterThis.lang = this.lang;
            utterThis.rate = 1;
            synth.speak(utterThis);

        },
       selectVoice(){
        var voices = speechSynthesis.getVoices();
        utterThis.lang = this.lang;
       }
    }
});
update.mount("#app")