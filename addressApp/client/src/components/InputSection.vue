<template>
    <div class="inputContain">
        <div>Add a contact</div>
        <label for="personName">Name:</label>
        <input id="personName" type="text">
        <label for="personNumber">Phone Number:</label>
        <input id="personNumer" type="text">
        <div>Address</div>
        <label for="personFL">First Line:</label>
        <input id="personFL" type="text">
        <label for="personSL">Second Line:</label>
        <input id="personSL" type="text">
        <label for="personTown">Town:</label>
        <input  id="personTown" type="text">
        <label for="personPC">Post Code:</label>
        <input id="personPC" type="text">
        <button>Create Contact</button>
    </div>
</template>


<script>

    export default {
        name: "inputSection",
        data: function() {
            return {
                contactList: []
            }
        },
        methods: {
            
        }
    }

</script>

<style scoped>

.inputContain {

}

</style>
