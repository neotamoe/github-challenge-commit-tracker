<template>
    <div class="hero">
        <div class="hero-body">
            <h1 class="title is-3">Add Challenge</h1>            
            <div class="field">
                <label class="label">Enter Challenge Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="i.e. post-Psi, April 2018">
                </div>
            </div>
            
            <div class="field">
                <button class="button is-primary">Add Challenge</button>
            </div>


            <h1 class="title is-3">Add Participant</h1>            

            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Neota">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Moe">
                </div>
            </div>

            <div class="field">
                <label class="label">Github UserName</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. neotamoe">
                </div>
            </div>
            
            <div class="field">
                <button class="button is-primary">Add Name</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddChallenge'
}
</script>

<style>

</style>