<template>
    <div class="inputContain">
        <div>Add a contact</div>
        <label for="personName">Name:</label>
        <input id="personName" type="text" v-model="contactCurrent.name">
        <label for="personNumber">Phone Number:</label>
        <input id="personNumer" type="text" v-model="contactCurrent.number">
        <div>Address</div>
        <label for="personFL">First Line:</label>
        <input id="personFL" type="text" v-model="contactCurrent.firstLine">
        <label for="personSL">Second Line:</label>
        <input id="personSL" type="text" v-model="contactCurrent.secondLine">
        <label for="personTown">Town:</label>
        <input  id="personTown" type="text" v-model="contactCurrent.town">
        <label for="personPC">Post Code:</label>
        <input id="personPC" type="text" v-model="contactCurrent.postCode">
        <button @click="createContact(contactCurrent)">Create Contact</button>
    </div>
</template>


<script>

    import Vue from 'vue';
    import { dataBus } from '../App';

    export default {
        name: "inputSection",
        data: function() {
            return {
                contactList: [],
                contactCurrent: {
                    name: '',
                    number: '',
                    firstLine: '',
                    secondLine: '',
                    town: '',
                    postCode: ''
                }
            }
        },
        methods: {
            createContact: function(cc) {
                console.log(cc);
                let newContact = {};
                newContact.name = cc.name;
                newContact.phone = cc.number;
                newContact.firstLine = cc.firstLine;
                newContact.secondLine = cc.secondLine;
                newContact.town = cc.town;
                newContact.postCode = cc.postCode;

                this.contactList.push(newContact);
                console.log(this.contactList);
                
                dataBus.$emit('createContact', this.contactList);
            }
        }
    }

</script>

<style scoped>

.inputContain {

}

</style>
