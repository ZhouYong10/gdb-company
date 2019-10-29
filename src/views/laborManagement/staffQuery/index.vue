<template>
    <fm-radio-list :title="radioListTitle" :items="radioItems"/>
</template>

<script>
    import { Vue, Component } from "vue-property-decorator";
    import FmRadioList from "../../../components/FmRadioList/index";

    @Component({
        components: {FmRadioList}
    })
    export default class About extends Vue {
        radioListTitle = "工种";
        radioItems = [
            {name: "土方", id: "1"},
            {name: "砖工", id: "2"}
        ]
    }
</script>

<style scoped>

</style>
