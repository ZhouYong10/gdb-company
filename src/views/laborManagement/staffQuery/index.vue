<template>
    <fm-radio-list />
</template>

<script>
    import { Vue, Component } from "vue-property-decorator";
    import FmRadioList from "../../../components/FmRadioList/index";

    @Component({
        components: {FmRadioList}
    })
    export default class About extends Vue {}
</script>

<style scoped>

</style>
