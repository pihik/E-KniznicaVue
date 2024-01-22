<template>
    <div>
      <header>
        <TheNavigation />
      </header>
      <div class="content">
        <div class="container">
            <h2>Kontakt</h2><br><hr><br>
            <p style="font-size: 18px;">Rád odpoviem na všetky otázky a dotazy.</p><br>
            <div>
                <v-row>
                    <v-col>
                        <h3>Nájdete nás</h3><br>
                        <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=48%C2%B039'20.9%22N%2018%C2%B030'07.5%22E+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    
                        
                    </v-col>

                    <v-col>
                        <TheBusinessCard />
                    </v-col>
                </v-row>
            </div>
            <br><hr><br>
            <h2>Kontaktný formulár</h2>
            <v-form @submit.prevent="submitForm">
                <v-container>
                <v-row>
                    <v-col>
                    <v-text-field
                        v-model="formData.name"
                        label="Name"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                    <v-text-field
                        v-model="formData.email"
                        label="Email"
                        type="email"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                    <v-textarea
                        v-model="formData.message"
                        label="Message"
                        required
                    ></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                    <v-btn type="submit" color="primary">Submit</v-btn>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
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
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            if (this.formData.name && this.formData.email && this.formData.message) {
                this.$router.push({ name: 'ThankYou' });
            } else {
                alert("Vyplňte všetky povinné údaje!");
            }
        }
    },
    components: {
        TheNavigation,
        TheFooter,
        TheBusinessCard,
    }
}
</script>

<style scoped>

</style>
  