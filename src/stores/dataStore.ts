import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    connectedBrands: [] as any[],
    blogs: [] as any[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("/data.json"); // ✅ static or real API endpoint
        const data = response.data;

        // Assuming your JSON has structure like:
        // { connectedBrands: [...], products: [...], about: {...} }
        this.connectedBrands = data.connectedBrands || [];
        this.blogs = data.blogs || [];
      } catch (err: any) {
        console.error("Error fetching data:", err);
        this.error = "Failed to fetch data.";
      } finally {
        this.loading = false;
      }
    },
  },
});
