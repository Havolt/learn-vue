Vue.component('ma-main', {
    template: `
        <div>
            <div class="headSec">
                <slot name="headSlot"></slot>
            </div>
            <div class="bodySec">
                <slot></slot>
            </div>
            <div class="footSec">
                <slot name="footSlot"></slot>
            </div>
        </div>
    `
})

const vm = new Vue({
    el: '#app',
    data: {}
})