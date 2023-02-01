<script>
export default {
    name: 'ArtocolBox',
    props: { title: String, num: String, subtitle: String, paragraph: String }
}
</script>
<template>
    <div class="bg-dark">
        <div class="title d-flex ai-center jc-between">
            <h2>{{ title }}</h2>
            <div class="num">{{ num }}</div>
        </div>
        <div class="paragraph">
            <div>
                <h4 class="pb-30">{{ subtitle }}</h4>
                <p>{{ paragraph }} </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title {
    padding: 100px;
    color: white;

    h2 {
        font-size: 3rem;
        max-width: 580px;
    }
}

.num {
    font-size: 4rem;
}

.paragraph {
    padding: 150px 100px;
    line-height: 25px;
    color: white;

    display: flex;
    flex-direction: column;

    p {
        max-width: 550px;
    }
}

.bg-dark {
    height: 800px;
}
</style>