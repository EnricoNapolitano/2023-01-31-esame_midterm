<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: { AppHeader, AppMain, AppFooter }
}
</script>
<template>
  <app-header>
    <!-- 2 components in it: top header with navbar; jumbotron -->
  </app-header>
  <app-main>
    <!-- 9 components reflecting all the sections -->
  </app-main>
  <app-footer>
    <!-- 2 components: top and bottom footer -->
  </app-footer>
</template>