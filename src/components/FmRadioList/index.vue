<template>
    <div class="radio-list">
        <h5 class="title">{{title}}</h5>
        <div class="list">
            <span v-for="(item, index) in items" :key="index">
                {{item.name}}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Model} from "vue-property-decorator";
    @Component({
        name: "FmRadioList"
    })
    export default class FmRadioList extends Vue{

    }
</script>

<style scoped>

</style>