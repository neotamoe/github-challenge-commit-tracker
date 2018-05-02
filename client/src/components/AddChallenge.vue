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
                <div>
                    <label class="label">Select Participants</label> 
                    <div class="columns"> 
                    <ul> 
                        <li v-for="participant in participants" :key="participant.id">         
                            <label class="checkbox checkbox-space" >
                                <input type="checkbox" :value="participant" v-model="checkedNames">
                                {{participant.first_name}} {{participant.last_name}} ({{participant.github_username}})
                            </label>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="field">
                    <button class="button is-primary" @click="saveChallenge()">OK</button>
                    <p v-if="challengeError && (challenge_name==='' || start_date==='' || end_date==='')" class="error">You must enter challenge name, start date and end date.</p>
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
            challengeEntered: false,
            challengeError: false,
            participants: [],
            checkedNames: []
        }
    },
    mounted () {
        this.getAllParticipants();
    },
    methods: {
        async saveChallenge(){
            if(this.challenge_name==='' || this.start_date==='' || this.end_date===''){
                this.challengeError = true;
                return;
            }     
            this.saveParticipantToChallenge();
            await ChallengeService.addChallenge({
                challenge_name: this.challenge_name,
                start_date: this.start_date,
                end_date: this.end_date,
                current: this.current,
            });
            this.$router.push({ name: 'Add Participants' });
        },
        async getAllParticipants() {
            const response = await ChallengeService.getAllParticipants();
            console.log(response);
            this.participants = response.data.participants;
        },
        async saveParticipantToChallenge(){
            this.checkedNames.forEach(element => {
                element.challenge.push(this.challenge_name);
            });
            await ChallengeService.saveParticipantToChallenge({
                participants: this.checkedNames,
            });
        },
    }
}
</script>

<style>
.error {
    color: red;
    font-weight: bold;
}

.checkbox-space {
    margin-right: 15px;
}
.columns {   
    -moz-column-width: 11.5em; /* Firefox */
    -webkit-column-width: 11.5em; /* webkit, Safari, Chrome */
    column-width: 11.5em;
}
.columns ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.columns ul li:first-child {
    margin-top:0px;
}

</style>


