<template>
    <div>
      <header>
        <TheNavigation />
      </header>
      <div class="content">
        <div class="container">
            <h2>O nás</h2><br><hr><br>
            <p style="font-size: 18px;">Študetský záverečný projekt pre predmet "Frontendové Technológie" na Univerzite Konštantína filozofa v Nitre, fakulta Prírodných vied a informatiky pre odbor Aplikovaná informatika.</p><br>
            <v-row class="border border-5 border-secondary rounded-4 pa-3 ma-3 mt-5">
                <v-col class="my-auto">
                    <p><b>Vývojár:</b> Adrián Pažický</p>
                    <p><b>Skupina:</b> 3</p>
                    <p><b>Ročník:</b> 2.</p>
                    <p><b>Semester:</b> 1.</p>
                    <p><b>Požadované hodnotenie:</b> A</p>
                </v-col>
                <v-col>
                  <TheBusinessCard />
                </v-col>
            </v-row>
        </div>
      </div>
      <footer>
        <TheFooter />
      </footer>
    </div>
</template>
  
<script>
import TheFooter from '../components/TheFooter.vue';
import TheNavigation from '../components/TheNavigation.vue';
import TheBusinessCard from '../components/TheBusinessCard.vue';

export default {
    components: {
        TheNavigation,
        TheFooter,
        TheBusinessCard,
    }
};
</script>

<style scoped>

</style>
  