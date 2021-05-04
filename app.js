const app = Vue.createApp({
  data() {
    return {
      addedTask: "",
      tasks: [
        {
          name: "test-task",
          isComplete: false,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    addTask() {
      this.tasks.push({
        name: this.addedTask,
        isComplete: false,
      });
      this.addedTask = "";
    },
    completeTask(task) {
      task.isComplete = !task.isComplete;
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
});

app.mount("#todo");
