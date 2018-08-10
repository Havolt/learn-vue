console.log('here');

Vue.component('modal', {
    template: `
        <div class="modalBack">
            <div class="modalCross" @click="$emit('emitoff')">X</div>
            <div class="modalMain">
                <slot></slot>
            </div>
        </div>
    `
})


const vm = new Vue({
    el: '#app',
    data: {
        isShown: false
    }
});