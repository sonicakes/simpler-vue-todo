const app = Vue.createApp({
  data() {
    return {
      addedTask: "",
      tasks: [
        {
          name: "test-task-1",
          isComplete: false,
        },
        {
          name: "test-task-2",
          isComplete: true,
        },
      ],
    };
  },
  computed: {
    remainingTasks() {
       
        let newAr = this.tasks.filter(function(task) {
            return task.isComplete == false;
        });

        return newAr.length;
        
      },
  },
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
