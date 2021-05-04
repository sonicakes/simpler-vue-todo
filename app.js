const app = Vue.createApp({
  data() {
    return {
      addedTask: "",
      tasks: [],
      isComplete: false,
      activeItem: "",
    };
  },
  computed: {
    completedClass() {
      return {
        completed: this.isComplete,
      };
    },
  },
  watch: {},
  methods: {
    addTask() {
      this.tasks.push(this.addedTask);
      this.addedTask = "";
    },
    completeTask(idx) {
      // establish the active item when clicked
      this.activeItem = idx;
      this.isComplete = !this.isComplete;
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
});

app.mount("#todo");
