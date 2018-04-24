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
        }
    },
    methods: {
        async saveChallenge(){
            if(this.challenge_name==='' || this.start_date==='' || this.end_date===''){
                this.challengeError = true;
                return;
            }     
            await ChallengeService.addChallenge({
                challenge_name: this.challenge_name,
                start_date: this.start_date,
                end_date: this.end_date,
                current: this.current,
            });
            this.$router.push({ name: 'Add Participants' });
        }
    }
}
</script>

<style>
.error {
    color: red;
    font-weight: bold;
}

</style>


