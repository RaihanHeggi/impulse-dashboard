<script>

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
<<<<<<< HEAD
import pdf from 'vue-pdf'
=======
>>>>>>> parent of 4ae1c6e (26/07/2021)

/**
 * Form wizard component
 */
export default {
  page: {
    title: "Tes Akhir",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
<<<<<<< HEAD
    currentPage: 0,
    pageCount: 0,
    page: 1,
    src:"",
		numPages: undefined,
    title: "Jurnal",
    items: [
=======
      title: "Tes Akhir",
      items: [
>>>>>>> parent of 4ae1c6e (26/07/2021)
        {
          text: "Praktikum",
          href: "/praktikan/praktikum"
        },
        {
          text: "Tes Akhir",
          active: true
        }
      ]
<<<<<<< HEAD
    }
    },
  mounted() {
  this.src = pdf.createLoadingTask('../pdf/SoalJurnal.pdf');
=======
    };
>>>>>>> parent of 4ae1c6e (26/07/2021)
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
<<<<<<< HEAD
		<pdf
			:src="src"
      @num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
      :page="page"
      style="height: 100%"
      hidden
		></pdf>
    <pdf
			:src="src"
      v-for="i in pageCount"
      :key="i"
      :page="i"
      style="height: 100%"
		></pdf>
=======
    
>>>>>>> parent of 4ae1c6e (26/07/2021)
  </Layout>
</template>



