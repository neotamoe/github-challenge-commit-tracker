<template>
    <div class="hero">
    <div class="hero-body">

        <p>You must be an admin to view this site.  Log in or Register below.</p>
        <br/>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="name@gmail.com">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="password">
            </div>
        </div>

        <div class="field is-grouped">
            <p class="control">
                <a class="button is-primary">
                Login
                </a>
            </p>
            <p class="control">
                <a class="button is-info">
                Register
                </a>
            </p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>