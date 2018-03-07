<template>
   <div class="main">
        <div class="title" > Todos </div>
        <div class="input">
            <el-input v-model="todo" @focus="seen = true" @blur="seen = false"  placeholder="请输入事项"></el-input>
            <transition name="el-fade-in">
                 <el-button @click="addTodo" v-if="seen" type="success">添加</el-button>
            </transition>
        </div>
        <div class="todos">
            <div class="todo" v-for="(todo, index) of todos" :key="index">
                <el-checkbox v-if="!todo.edit" v-model="todo.checked">{{todo.todo}}</el-checkbox>
                <el-input v-if="todo.edit" v-model="todo.todo" placeholder="请输入事项"></el-input>
                <div class="i">
                    <i v-if="!todo.checked" class="el-icon-edit" @click="editTodo(index)"></i>
                    <i class="el-icon-delete" @click="deleteTodo(index)"></i>
                </div>
            </div>
        </div>
        <div class="footer">
            <div>剩余:&nbsp;{{checkedLength}}</div>
            <div>
                <el-button @click="checkAll" type="primary" size="small">完成全部</el-button>
                <el-button @click="deleteAll" type="warning" size="small">删除全部</el-button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      todo: "",
      seen: false,
      checked: ""
    };
  },
  methods: {
    addTodo() {
        if (!this.todo) {
           alert("事项不能为空")
           return
        }
        let obj = {
            todo: this.todo,
            checked: false,
            edit:false
        }
        this.todos.push(obj)
        this.todo = ""
    },
    editTodo (index) {
        this.todos[index].edit = ! this.todos[index].edit
    },
    deleteTodo (index) {
        this.todos.splice(index,1)
    },
    deleteAll () {
        this.todos = []
    },
    checkAll () {
        this.todos.forEach(item => {
            item.checked = true
        })
    }
  },
  computed: {
      checkedLength () {
          let len = 0
          this.todos.forEach((item) => {
              if (!item.checked) {
                  len ++
              }
          })
          return len   
      }
  },
  created() {
    document.body.style.background = "#eee";
  }
};
</script>

<style lang="less">
@import url("../static/css/index.css");
.main {
  width: 100%;
  height: 100%;
  background: #fff;
  .title {
    width: 100%;
    text-align: center;
    font-size: 0.5rem;
    height: 1rem;
    line-height: 1rem;
  }
  .input {
    display: flex;
    .el-input,
    .el-button {
      margin: 0.1rem;
      box-sizing: border-box;
    }
  }
  .todos {
    .todo {
      margin: 0.1rem 5%;
      height: 0.9rem;
      display: flex;
      justify-content: space-between;
      line-height: 0.9rem;
      .el-input {
          width: 70%;
      }
      .i {
        font-size: 0.4rem;
        vertical-align: middle;
        i {
          margin: 0 0.1rem;
        }
      }
    }
  }
  .footer {
    padding: 0.1rem 5%;
    background: #f4fce8;
    height: 0.7rem;
    display: flex;
    font-size: 0.3rem;
    line-height: 0.7rem;
    justify-content: space-between;
  }
}
</style>
