<template>
    <div class="hero">
        <div class="hero-body">
            <h1 class="title is-3">Challenge Information</h1>            
            <div v-if="!challengeEntered">
                <div class="field">
                    <label class="label">Enter Challenge Name</label>
                    <div class="control">
                        <input  v-model="challenge_name" class="input" type="text" placeholder="i.e. post-Psi, April 2018">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Enter Start Date</label>
                    <div class="control">
                        <input class="input" type="date" placeholder="MM/DD/YYYY" v-model="start_date">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Enter End Date</label>
                    <div class="control">
                        <input class="input" type="date" placeholder="MM/DD/YYYY" v-model="end_date">
                    </div>
                </div>
                <div class="field">
                    <button class="button is-primary" @click="addChallenge()">OK</button>
                </div>
            </div>
            <div class="field" v-if="challengeEntered">
                <p>Challenge Name: {{challenge_name}}</p>
                <p>Start Date: {{start_date}}</p>
                <p>End Date: {{end_date}}</p>
                <div class="field">
                    <button class="button is-primary" @click="editChallenge()">Edit</button>
                </div>
            </div>
            <div v-if="challengeEntered">
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
    </div>
</template>

<script>
import ChallengeService from '@/services/ChallengeService'

export default {
    name: 'AddChallenge',
    data() {
        return {
            challenge_name: '',
            start_date: '',
            end_date: '',
            current: false,
            first_name: '',
            last_name: '',
            github_username: '',
            participants: [],
            challengeEntered: false,
            end_date: ''
        }
    },
    methods: {
        async addChallenge () {
            console.log('add challenge button clicked: name: '+ this.challenge_name);
            this.challengeEntered = true;   
            // await ChallengeService.addChallenge({
            //     name: this.name,
            //     start_date: this.start_date,
            //     end_date: this.end_date,
            //     current: this.current
            // })
        // this.$router.push({ name: 'Home' })
            // this.end_date = this.getEndDate();
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
            this.participants.push(participant);
            this.first_name = '';
            this.last_name = '';
            this.github_username = '';
        },
        editChallenge() {
            this.challengeEntered = false;
        }
    }
}
</script>

<style>

</style>