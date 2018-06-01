<template>
    <div>
        <MainLayout>
            <Toggle :toggle="1"></Toggle>
            <h1>Home</h1>
            <p>Et pariatur quas atque fugiat illum ipsum repellendus quod porro. 
                Consequuntur rem, ullam, a, quos nulla eius fuga molestias 
                consequatur molestiae porro nam.</p>
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
