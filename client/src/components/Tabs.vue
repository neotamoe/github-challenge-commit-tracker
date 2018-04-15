<template>
    <div class="hero-foot is-primary">
        <div class="tabs is-medium is-centered is-boxed">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" v-bind:key="tab.id">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
        <div>
            <!-- for some reason beyond my comprehension, this slot has to be here or the tabs don't show up -->
            <slot></slot>  
        </div>
    </div>
</template>


<script>

export default {
    name: 'Tabs',

    data() {
        return {
             tabs: []
        }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
}
</script>


<style scoped>

</style>