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
                <el-checkbox v-model="todo.checked">{{todo.todo}}</el-checkbox>
                <div class="i" v-if="todo.showHandler">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-delete"></i>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      todo:'',
      seen: false,
      checked:''
    };
  },
  methods: {
      addTodo () {
          let obj = {
              todo: this.todo,
              checked: false,
              showHandler: false
          }
          this.todos.push(obj)
          this.todo = ''
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
    .el-input,.el-button {
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
          .i {
            font-size: 0.4rem;
            vertical-align: middle;
            i {
                margin: 0 0.1rem;
            }
          }
      }
  }
}
</style>
