
Vue.component('user-profile', {
    template: `
        <div>
            <h2>{{ user.name }}</h2>
            <div>Age: {{user.age }}</div>
            <div>Job Title: {{ user.age }}</div>
            <slot></slot>
        </div>
    `,
    props: ['user']
})

Vue.component('user-desc', {
    template: `
        <div>
            <h3>About me: </h3>
            <div>{{ user.desc }}</div>
        </div>
    `,
    props: ['user']
})


const vm = new Vue({
    el: '#app',
    data: {
        users: [
            { name: 'Alex Jones', age: 42, job: 'Presenter', desc: 'I am not crazy.'},
            { name: 'Variann Wrynn', age: 48, job: 'King', desc: 'For the alliance!'},
            { name: 'JC Denton', age: 36, job: 'Special Agent', desc: 'A bomb?!'},
            { name: 'Fred Flinstone', age: 45, job: 'Miner', desc: 'Yabba dabba doo'}
        ]
    }
});

console.log(vm);