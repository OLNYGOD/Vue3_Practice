<template>
  {{ message }}
  <!-- v-once 只渲染一次不再更動 -->
  <p v-once>{{ message }}</p>
  <p v-pre>{{ message }}</p>
  <!-- if else 使用 -->
  <p v-if="isShow">Hello World</p>
  <p v-else>Hello Taiwan</p>
  <p v-if="x === 0">x = 0</p>
  <p v-else-if="x === 1">x = 1</p>
  <p v-else-if="x === 2">x = 2</p>
  <p v-else>x != 0</p>
  <p v-show="isShow">Hello Taipei</p>
  <!-- for 迴圈使用 一定要設定key -->
  <p v-for="user in users1" :key="user">Welcome {{ user }}</p>
  <p v-for="(user, index) in users2" :key="user.email">
    {{ index }} {{ user.name }} {{ user.email }}
  </p>
<!-- for 迴圈 + if 使用 -->
  <div v-for="(user, index) in users1" :key="user">
    <p v-if="user === 'Jake'">Welcome {{ index }} {{ user }}</p>
  </div>

  {{ x * y }}
  <br>
  <!-- function 使用 -->
  {{ myFunction(10) }} 
  <br>
  <!-- 按鈕使用更改畫面 -->
  {{ name }}
  {{ count }} <br>
  <button @click="countFunction(2), changeName()">記數和改名</button>
  <br />
  <!-- v-model.lazy 使用，輸入完畢才更改 --> 
  <input type="text" v-model.lazy="name" /><br>
  <button @click="addUser">新增使用者</button>
  <br />
  <input type="text" v-model="message" />
  <br />
  <!-- for 搭配輸入欄 -->
  <p v-for="text in text1" :key="text">{{ text }}</p><br />
  <textarea v-model.lazy="text" /><br />
  <button @click="addMessage">新增文字</button>
  <!-- 下拉式選單 -->
  <br>{{ selectValue }} <br />
  <select v-model="selectValue">
    <option value="">select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <!-- checkbox -->
  <br>{{ isCheck }} <br />
  <input type="checkbox" v-model="isCheck" /> is check
  <!-- 多選checkbox -->
  <br>{{ checkbox }} <br />
  <input type="checkbox" value="0" v-model="checkbox" /> 0
  <input type="checkbox" value="1" v-model="checkbox" /> 1
  <input type="checkbox" value="2" v-model="checkbox" /> 2
  <input type="checkbox" value="3" v-model="checkbox" /> 3
  <!-- radio 單選-->
  <br>{{ radio }} <br />
  <input type="radio" value="0" v-model="radio" /> 0
  <input type="radio" value="1" v-model="radio" /> 1
  <input type="radio" value="2" v-model="radio" /> 2
  <input type="radio" value="3" v-model="radio" /> 3

  <!-- 表格 -->
  <br>{{ formData.name }} <br />表格名稱
  <br><input type="text" v-model="formData.name" placeholder="請輸入表格名稱" /><br />
  <textarea v-model="formData.text" /><br />

  <select v-model="formData.selectValue">
    <option value="">select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <br />

  <input type="checkbox" v-model="formData.isCheck2" /> is check
  <br />{{ formData.checkbox2 }} <br />
  <input type="checkbox" value="0" v-model="formData.checkbox2" /> 0
  <input type="checkbox" value="1" v-model="formData.checkbox2" /> 1
  <input type="checkbox" value="2" v-model="formData.checkbox2" /> 2
  <input type="checkbox" value="3" v-model="formData.checkbox2" /> 3
  <br />

  <input type="radio" value="0" v-model="formData.radio" /> 0
  <input type="radio" value="1" v-model="formData.radio" /> 1
  <input type="radio" value="2" v-model="formData.radio" /> 2
  <input type="radio" value="3" v-model="formData.radio" /> 3
  <br />
  <button @click="submit">送出</button>
  <!-- computed 範例 -->
  <br /><div v-for="data in checkDatas" :key="data.id">
    {{ data.id }} {{ data.name }}<br />
  </div>
<input type="text" v-model.lazy="user.name" /><br />
<img alt="Vue logo" src="./assets/logo.png">
<!--要import 要在template使用 HelloWorld  AppHeader-->
<HelloWorld msg="Welcome to Your Vue.js App"/>
<!--使用AppHeader變數-->
<AppHeader :name="name"/>
<!--將AppView 的viewText 傳入text2-->
<AppView @viewText="getViewText" />
<br />
{{ text2 }}
</template>

<script>
// 要跨檔案要用import
import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/AppHeader.vue';
import AppView from './components/AppView.vue';
export default {
  name: 'MainApp',
  data() {
    return {
      message: 'Hello World',
      // 確定上方顯示 Hello World or Hello Taiwan
      isShow: true,
      x: 1,
      y: 3,
      // 搭配上方for迴圈使用
      users1: ['Jake', 'Allan', 'Eason'],
      users2: [
        { name: 'Jake', email: 'jake@gmail.com' },
        { name: 'Allan', email: 'allan@gmail.com' },
        { name: 'Eason', email: 'eason@gmail.com' },
      ],
      count: 0,
      name: 'Andy',
      text1: [],
      text: '',
      text2: '',
      //搭配下拉式選單使用
      selectValue: '',
      //搭配checkbox使用
      isCheck: false,
      //紀錄check item
      checkbox: [],
      //搭配radio使用
      radio: '',
      formData: {
        name: '',
        text: '',
        selectValue: '',
        isCheck2: false,
        checkbox2: [],
        radio: '',
      },
      datas: [
        { id: 1, name: 'Jake' },
        { id: 2, name: 'Allan' },
        { id: 1, name: 'Eason' },
      ],
      user: {
        name: '',
      },
      };
    },
    // function 定義在 methods 內
    methods: {
      myFunction(value) {
        return this.x * this.y + value;
        //注意在這邊要用 this 來取得定義在 data() 內的變數
      },
      countFunction(value) {
        return this.count += value;
      },
      changeName() {
        this.name = 'Allan';
      },
      addUser() {
      if (this.name && !this.users1.includes(this.name)) {
        this.users1.push(this.name);
        }
      },
      addMessage() {
      if (!this.text1.includes(this.text)) {
        this.text1.push(this.text);
        }
      },
      submit() {
        console.log(this.formData);
      },
      getViewText(text) {
      this.text2 = text;
      },
    },
    // computed 會有快取功能，當依賴的資料沒有改變時，不會重新計算
    computed: {
    checkDatas() {
        console.log("只執行一次且vue3會自動管理不需要額外賦值");
      return this.datas.filter((data) => data.id === 1);
    },
  },
  // watch 會在資料改變時執行對應的函式
  watch: {
  count(newValue, oldValue) {
    console.log(newValue, oldValue);
    },
    user: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true, //要監聽物件時，要設定才會起作用
    },
    users1: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true, //要監聽陣列時，要設定才會起作用
    },
  },
  // 要跨檔案要在這邊設定
  components: {
    HelloWorld,
    AppHeader,
    AppView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>