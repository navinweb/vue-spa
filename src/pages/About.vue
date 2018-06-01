<template>
    <div>
        <MainLayout>
            <Toggle :toggle="0"></Toggle>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Hic alias id nobis ipsa quaerat quam eaque eius 
                dignissimos tempora libero!</p>
        </MainLayout>
    </div>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import Toggle from "../components/Toggle.vue";

export default {
  components: {
    MainLayout,
    Toggle
  },
};
</script>
