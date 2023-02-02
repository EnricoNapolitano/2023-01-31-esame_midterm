<script>
export default {
    name: 'StoreInfo',
    props: { city: String }
}
</script>
<template>
    <h2>{{ city }}</h2>
    <div class="row d-flex jc-around ai-center">
        <div>
            <h4>CALL US</h4>
            <div>1.800.458.556</div>
        </div>
        <div>
            <h4>OPEN ALL WEEK</h4>
            <div>9.00 AM - 6.00 PM</div>
        </div>
        <button class="btn white-btn">View Map</button>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 30px;
}

h4 {
    padding-bottom: 18px;
}
</style>