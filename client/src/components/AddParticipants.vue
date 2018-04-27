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
                    <input class="input" type="text" placeholder="e.g. neotamoe" v-model="github_username">
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
                        <th class="title is-4" colspan=5>Github Challenge Participants</th>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Github User Name</th>
                        <th>Commits</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!edit" v-for="(participant, index) in participants" :key="participant.id">
                        <td>{{participant.first_name}}</td>
                        <td>{{participant.last_name}}</td>
                        <td>{{participant.github_username}}</td>
                        <td>{{participant.commits}}</td>
                        <td><i class="fa fa-edit" @click="editParticipant(participant)"></i><i class="fa fa-times" @click="deleteParticipant(index)"></i></td>
                    </tr>
                    <tr v-if="edit" v-for="(participant, index) in participants" :key="participant.id">
                        <td><input class="input" type="text" v-model="participant.first_name"></td>
                        <td><input class="input" type="text" v-model="participant.last_name"></td>
                        <td><input class="input" type="text" v-model="participant.github_username"></td>
                        <td>{{participant.commits}}</td>
                        <td><i class="fa fa-save" @click="saveParticipantChanges(participant)"></i><i class="fa fa-times" @click="deleteParticipant(index)"></i></td>
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
            commits: 0,
            participants: [],
            participantError: false,
            edit: false,
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
        },
        editParticipant(participant) {
            console.log('edit participant clicked ')
            console.log(participant);
            this.edit = true;
        },
        deleteParticipant(index) {
            console.log('delete participant clicked: ');
            this.participants.splice(index,1);
            console.log(this.participants);
        },
        saveParticipantChanges(participant) {
            console.log('save participant changes clicked');
            console.log(participant);
            this.edit = false;
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
i {
    padding-left: 15px
}
</style>


