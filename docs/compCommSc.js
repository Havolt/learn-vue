
const Event = new Vue();

Vue.component('ma-first', {
    template: `
        <div>
            <input v-model="inpData"></input>
            <button @click="transferData">Send Data to Other Component</button>
        </div>
    `,
    data () {
        return {
            inpData: ''
        }
    },
    methods: {
        transferData () {
            Event.$emit('transferringdata', {tData: this.inpData});
            this.inpData = '';
        }
    }
});

Vue.component('ma-second', {
    template: `
        <div>
            <h1>{{ sentData.text }}</h1>
        </div>
    `,
    data() {
        return{
            sentData: {text: ''}
        }
    },
    methods: {
        
            
    },
    created() {
        Event.$on('transferringdata', (data) => {
            this.sentData.text = data.tData;
        })
        
    }
})

const vm = new Vue({
    el: '#app',
    data: {

    }
});