<template>
    <div id="app">
	  <v-app id="inspire">
	    <v-container fluid grid-list-md>
	    <v-layout row wrap>
	      <v-flex d-flex xs12 sm6 md4>
	        <v-card class="purple" dark>
	          <v-card-title primary class="title">Checkou</v-card-title>
	          <v-card-text
	            v-text="lorem">
	          </v-card-text>
	        </v-card>
	      </v-flex>
	      <v-flex d-flex xs12 sm6 md3>
	        <v-layout row wrap>
	          <v-flex d-flex>
	            <v-card class="indigo" dark>
	              <v-card-title primary class="title">Build&UT</v-card-title>
	              <v-card-text
	                v-text="lorem.slice(0, 70)">
	              </v-card-text>
	            </v-card>
	          </v-flex>
	          <v-flex d-flex>
	            <v-layout row wrap>
	              <v-flex d-flex 
	                v-for="n in 1"
	                :key="n"
	                xs12
	              >
	                <v-card
	                  class="red lighten-2"
	                  dark
	                > 
	                  <v-card-title primary class="title">Package</v-card-title>
	                  <v-card-text
	                    v-text="lorem.slice(0, 40)">
	                  </v-card-text>
	                </v-card>
	              </v-flex>
	            </v-layout>
	          </v-flex>
	        </v-layout>
	      </v-flex>
	      <v-flex d-flex xs12 sm6 md2 child-flex>
	        <v-card class="green lighten-2" dark>
	          <v-card-title primary class="title">Deploy</v-card-title>
	          <v-card-text
	            v-text="lorem.slice(0, 90)">
	          </v-card-text>
	        </v-card>
	      </v-flex>
	      <v-flex d-flex xs12 sm6 md3>
	        <v-card class="blue lighten-2 lighten-2" dark>
	          <v-card-title primary class="title">Test</v-card-title>
	          <v-card-text
	            v-text="lorem.slice(0, 100)">
	          </v-card-text>
	        </v-card>
	      </v-flex>
	    </v-layout>

	    <v-layout row wrap>
	      <v-flex d-flex xs12 sm6 md4>
	        <v-card class="purple" dark>
	          <v-card-title primary class="title">Checkou</v-card-title>
	          <v-card-text
	            v-text="lorem">
	          </v-card-text>
	        </v-card>
	      </v-flex>
	      <v-flex d-flex xs12 sm6 md3>
	        <v-layout row wrap>
	          <v-flex d-flex>
	            <v-card class="indigo" dark>
	              <v-card-title primary class="title">Build&UT</v-card-title>
	              <v-card-text
	                v-text="lorem.slice(0, 70)">
	              </v-card-text>
	            </v-card>
	          </v-flex>
	          <v-flex d-flex>
	            <v-layout row wrap>
	              <v-flex d-flex 
	                v-for="n in 1"
	                :key="n"
	                xs12
	              >
	                <v-card
	                  class="red lighten-2"
	                  dark
	                > 
	                  <v-card-title primary class="title">Package</v-card-title>
	                  <v-card-text
	                    v-text="lorem.slice(0, 40)">
	                  </v-card-text>
	                </v-card>
	              </v-flex>
	            </v-layout>
	          </v-flex>
	        </v-layout>
	      </v-flex>
	      <v-flex d-flex xs12 sm6 md2 child-flex>
	        <v-card class="green lighten-2" dark>
	          <v-card-title primary class="title">Deploy</v-card-title>
	          <v-card-text
	            v-text="lorem.slice(0, 90)">
	          </v-card-text>
	        </v-card>
	      </v-flex>
	      <v-flex d-flex xs12 sm6 md3>
	        <v-card class="blue lighten-2 lighten-2" dark>
	          <v-card-title primary class="title">Test</v-card-title>
	          <v-card-text
	            v-text="lorem.slice(0, 100)">
	          </v-card-text>
	        </v-card>
	      </v-flex>
	    </v-layout>

	  </v-container>
	  </v-app>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        lorem: 'DevOps'
      }
    }
  }
</script>