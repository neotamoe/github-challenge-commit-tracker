<template>
    <div class="container">
    <div class="columns">
        <div class="column">
            <h1 class="title is-3">Participant Information</h1>            
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
            <div class="field is-grouped">
                    <button class="button is-primary control" @click="addParticipant()">Add Name</button>
                    <button class="button is-warning control" @click="clearFields()">Clear Fields</button>
            </div>
        </div>
        <div class="column">
            <table class="table is-striped is-hoverable is-bordered">
                <thead>
                    <tr>
                        <th class="title is-4" colspan=4>Github Challenge Participants</th>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Github User Name</th>
                        <th>Commits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="participant in participants" :key="participant.id">
                        <td>{{participant.first_name}}</td>
                        <td>{{participant.last_name}}</td>
                        <td>{{participant.github_username}}</td>
                        <td>{{participant.commits}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="field">
                <button class="button is-primary" @click="saveParticipants()" >Save Participants</button>
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
            first_name: '',
            last_name: '',
            github_username: '',
            participants: [],
            participantError: false,
        }
    },
    methods: {
        addParticipant() {
            if(this.first_name==='' || this.last_name==='' || this.github_username===''){
                return;
            }
            let participant = {
                first_name: this.first_name,
                last_name: this.last_name,
                github_username: this.github_username,
                commits: 0,
            };
            this.participants.push(participant);
            this.clearFields();
        },
        async saveParticipants(){
            await ChallengeService.addParticipants({
                participants: this.participants
            });
            this.$router.push({ name: 'Home' });
        },
        clearFields() {
            this.first_name = '';
            this.last_name = '';
            this.github_username = '';
        }
    }
}
</script>

<style>
.error {
    color: red;
    font-weight: bold;
}
.column{
    margin-top: 25px;
}
table {
    margin: 0 auto; /* or margin: 0 auto 0 auto */
}
</style>


