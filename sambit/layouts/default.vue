<template>
 <v-app>
 <v-app-bar>
   <div class="d-flex justify-start align-center fill-height pa-10 flex-row">
   <h1>HNZA</h1>
   </div>
   <div class="d-flex justify-end align-center fill-height pa-2 flex-row">
    <NuxtLink to="/"> 
    <v-btn
       rounded="lg"
       color="primary"
       class="ml-4 pa-2 buttontext"
     >
       Who We Are
     </v-btn>
    </NuxtLink>

     <!--<NuxtLink to="/products">
     <v-btn
       rounded="lg"
       color="primary"
       class="ml-8 pa-2"
     >
       Products
     </v-btn>
    </NuxtLink> -->
    <!-- <NuxtLink to="/results">
     <v-btn
       rounded="lg"
       color="primary"
       class="ml-8 pa-2"
     >
       Results
     </v-btn>
    </NuxtLink> -->
     <NuxtLink to="/contactus">
     <v-btn
       rounded="lg"
       color="primary"
       class="ml-8 pa-2 buttontext"
       
     >
       Contact Us
     </v-btn>
    </NuxtLink>
   </div>
 </v-app-bar>
 <slot/>
 </v-app>
</template>

<style scoped>
h1{
 font-size: 5vh;
 text-align: center;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 color: rgb(102, 63, 129);
}
.buttontext{
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 color:white;
}
</style>