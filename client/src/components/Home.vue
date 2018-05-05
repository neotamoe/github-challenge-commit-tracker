<template>
    <div class="hero">
    <div class="hero-body">
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <p>You must be an admin to view this site.  Log in or Register below.</p>
                <br/>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model="email" placeholder="name@gmail.com">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password" placeholder="password">
                    </div>
                </div>

                <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <button class="button is-primary" @click="login">
                        Login
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-info" @click="register">
                        Register
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password:'',
        }
    },
    methods: {
        login() {
            console.log('login button clicked: email--> ' + this.email + ' password--> ' + this.password);
        },
        register() {
            console.log('register button clicked: email--> ' + this.email + ' password--> ' + this.password);
        }

    }
}
</script>