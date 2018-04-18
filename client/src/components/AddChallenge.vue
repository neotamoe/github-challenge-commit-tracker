<template>
    <div class="hero">
        <div class="hero-body">
            <h1 class="title is-3">Add Challenge</h1>            
            <div class="field">
                <label class="label">Enter Challenge Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="i.e. post-Psi, April 2018" v-model="name">
                </div>
            </div>
            
            <div class="field">
                <button class="button is-primary" @click="addChallenge()">Add Challenge</button>
            </div>


            <h1 class="title is-3">Add Participant</h1>            

            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Neota" v-model="first_name">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Moe" v-model="last_name">
                </div>
            </div>

            <div class="field">
                <label class="label">Github UserName</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. neotamoe" v-model="github_username">
                </div>
            </div>
            
            <div class="field">
                <button class="button is-primary" @click="addParticipant()">Add Name</button>
            </div>
        </div>
    </div>
</template>

<script>
import ChallengeService from '@/services/ChallengeService'

export default {
    name: 'AddChallenge',
    data() {
        return {
            name: '',
            start_date: new Date(),
            end_date: new Date () + 30,
            current: false,
            // participant: {
                first_name: '',
                last_name: '',
                github_username: '',
            // },
            participants: [],
        }
    },
    methods: {
        async addChallenge () {
            console.log('add challenge button clicked: name: '+ this.name);
            // await ChallengeService.addChallenge({
            //     name: this.name,
            //     start_date: this.start_date,
            //     end_date: this.end_date,
            //     current: this.current
            // })
        // this.$router.push({ name: 'Home' })
            this.name = '';
        },
        addParticipant() {
            let participant = {
                first_name: this.first_name,
                last_name: this.last_name,
                github_username: this.github_username
            };
            console.log('addParticipant button clicked!');
            console.log('first: ' + this.first_name + ' last: ' + this.last_name + ' github name: ' + this.github_username);
            console.log(participant);
            // this.participants.push(participant);
            this.first_name = '';
            this.last_name = '';
            this.github_username = '';
        }
    }
}
</script>

<style>

</style>