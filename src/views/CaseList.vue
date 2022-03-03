<template>
  <v-app id="caseList">
    <v-card class="overflow-hidden">
      <v-app-bar absolute hide-on-scroll prominent scroll-target="#scrolling-techniques-4" max-height="70" class="textWhite NAVbar" style="z-index: 5">
        <v-img class="logo1 me-xl-n2 ms-xl-8 d-none d-lg-flex" max-width="115" src="../assets/images/logo.png"></v-img>
        <div class="Ownersolgon rounded-pill ms-xl-n5 ms-md-n14">
          <div class="ctext1 me-xl-7 d-flex justify-center justify-lg-end align-center" style="height: 100%">找案件</div>
        </div>
        <v-spacer></v-spacer>
        <!-- 導覽連結 -->
        <router-link to="/">
          <div class="navA d-flex align-center"><a class="textWhite ctext1 px-5 d-none d-lg-flex">首頁</a></div>
        </router-link>
        <router-link to="/portfoliosList">
          <div class="navA d-flex align-center"><a class="textWhite ctext1 px-5">找專業</a></div>
        </router-link>
        <router-link to="/caseList">
          <div class="navA d-flex align-center"><a class="textWhite ctext1 px-5">找案件</a></div>
        </router-link>
        <!-- 登入 -->
        <UserRegisters />
        <!-- 會員資料 -->
        <div class="avatars me-xl-6" v-if="user.isuserLogin && !user.isAdmin" id="user">
          <div class="userList">
            <ul>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userself/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-account-outline</v-icon>
                  <a class="textWhite ctext1">會員資訊</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/portfolios/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-folder-outline</v-icon>
                  <a class="textWhite ctext1">會員作品</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userfavorite/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-heart-outline</v-icon>
                  <a class="textWhite ctext1">收藏案件</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userwantdo/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-file-move-outline</v-icon>
                  <a class="textWhite ctext1">
                    已
                    <span class="mx-1">投</span>
                    稿
                  </a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userdeal/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-charity</v-icon>
                  <a class="textWhite ctext1">進行結案</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userchats/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-message-outline</v-icon>
                  <a class="textWhite ctext1">
                    訊
                    <span class="ms-8"></span>
                    息
                  </a>
                </v-btn>
              </li>
              <!-- <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-calendar-month-outline</v-icon>
                  <a class="textWhite ctext1">
                    行
                    <span class="mg">事</span>
                    曆
                  </a>
                </v-btn>
              </li> -->
            </ul>
          </div>
          <v-avatar size="40" class="me-2 homeAva">
            <v-img :src="'https://source.boringavatars.com/beam/120/' + user.account"></v-img>
          </v-avatar>
          <v-icon class="textWhite down">mdi-chevron-down</v-icon>
        </div>
        <!-- 業主會員資料 -->
        <div class="avatars me-xl-6" v-if="owner.isownerLogin" id="owner">
          <div class="ownerList">
            <ul>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerself/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-account-outline</v-icon>
                  <a class="textWhite ctext1">業主資訊</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/cases/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-folder-outline</v-icon>
                  <a class="textWhite ctext1">業主案件</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerfavorite/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-heart-outline</v-icon>
                  <a class="textWhite ctext1">收藏作品</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownercheck/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-file-download-outline</v-icon>
                  <a class="textWhite ctext1">查看投稿</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerdeal/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-charity</v-icon>
                  <a class="textWhite ctext1">進行結案</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerchats/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-message-outline</v-icon>
                  <a class="textWhite ctext1">
                    訊
                    <span class="ms-8"></span>
                    息
                  </a>
                </v-btn>
              </li>
            </ul>
          </div>
          <v-avatar size="40" class="me-2 homeAva">
            <v-img :src="'https://source.boringavatars.com/beam/120/' + owner.account"></v-img>
          </v-avatar>
          <v-icon class="textWhite down">mdi-chevron-down</v-icon>
        </div>
        <!-- 管理員資料 -->
        <div class="avatars me-xl-6" v-if="user.isAdmin" id="owner">
          <div class="adminList">
            <ul>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtn" :to="`/admin/adminUser`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-account-outline</v-icon>
                  <a class="ctext1 adlisttext">會員管理</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtn" :to="`/admin/adminOwner`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-account-tie-outline</v-icon>
                  <a class="ctext1 adlisttext">業主管理</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtn" :to="`/admin/adminWork`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-application-cog-outline Michael Irigoyen @mririgo</v-icon>
                  <a class="ctext1 adlisttext">網頁維護</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtn" :to="`/admin/adminChats`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-message-outline</v-icon>
                  <a class="ctext1 adlisttext">
                    訊
                    <span class="ms-8"></span>
                    息
                  </a>
                </v-btn>
              </li>
            </ul>
          </div>
          <v-avatar size="40" class="me-2 homeAva">
            <v-img :src="'https://source.boringavatars.com/beam/120/' + user.account + `17`"></v-img>
          </v-avatar>
          <v-icon class="textWhite down">mdi-chevron-down</v-icon>
        </div>
        <v-btn
          color="rgba(0,0,0,0)"
          class="textWhite login ms-0 ms-xl-n6 d-none d-md-flex"
          plain
          v-if="user.isuserLogin && !owner.isownerLogin"
          @click="userlogout"
        >
          <v-icon class="me-2">mdi-logout-variant</v-icon>
          <!-- 登出 -->
        </v-btn>
        <v-btn
          color="rgba(0,0,0,0)"
          class="textWhite login ms-0 ms-xl-n6 d-none d-md-flex"
          plain
          v-if="!user.isuserLogin && owner.isownerLogin"
          @click="ownerlogout"
        >
          <v-icon class="me-2">mdi-logout-variant</v-icon>
          <!-- 登出 -->
        </v-btn>

        <!-- xs User sidebar --------------------------------------------------------------->
        <router-link to="/">
          <v-icon class="textWhite xsMenuBtn ms-n3 d-sm-flex d-md-none d-xl-none me-5" v-if="user.isuserLogin && !user.isAdmin">mdi-home</v-icon>
        </router-link>
        <label for="checklogin">
          <v-icon class="textWhite xsMenuBtn ms-n2 d-sm-flex d-md-none d-xl-none me-n1" v-if="user.isuserLogin && !user.isAdmin">mdi-dots-horizontal</v-icon>
        </label>
        <input id="checklogin" type="checkbox" />
        <div id="usersidebar" v-if="user.isuserLogin && !user.isAdmin">
          <label for="checklogin">
            <v-icon size="30" color="var(--color-white)" class="d-md-none d-xl-none d-xs-flex mt-2 ms-2 closeX">mdi-close</v-icon>
          </label>
          <div class="sidebarAva d-md-none d-xl-none">
            <v-avatar size="90" class="me-2 mb-6">
              <v-img :src="'https://source.boringavatars.com/beam/120/' + user.account"></v-img>
            </v-avatar>
            <ul>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userself/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-account-outline</v-icon>
                  <a class="textWhite ctext1">會員資訊</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/portfolios/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-folder-outline</v-icon>
                  <a class="textWhite ctext1">會員作品</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userfavorite/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-heart-outline</v-icon>
                  <a class="textWhite ctext1">收藏案件</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userwantdo/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-file-move-outline</v-icon>
                  <a class="textWhite ctext1">
                    已
                    <span class="mx-1">投</span>
                    稿
                  </a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userdeal/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-charity</v-icon>
                  <a class="textWhite ctext1">進行結案</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/user/${user._id}/userchats/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-message-outline</v-icon>
                  <a class="textWhite ctext1">
                    訊
                    <span class="ms-9"></span>
                    息
                  </a>
                </v-btn>
              </li>
              <li>
                <div class="sideline"></div>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn mt-3" @click="userlogout">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-logout-variant</v-icon>
                  <a class="textWhite ctext1">
                    登
                    <span class="ms-9"></span>
                    出
                  </a>
                  <!-- 登出 -->
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
        <!-- --------------------------------------------------------------- -->

        <!-- xs Owner sidebar --------------------------------------------------------------->
        <router-link to="/">
          <v-icon class="textWhite xsMenuBtn ms-n3 d-sm-flex d-md-none d-xl-none me-5" v-if="owner.isownerLogin">mdi-home</v-icon>
        </router-link>
        <label for="checkloginO">
          <v-icon class="textWhite xsMenuBtn ms-n2 d-sm-flex d-md-none d-xl-none me-n1" v-if="owner.isownerLogin">mdi-dots-horizontal</v-icon>
        </label>
        <input id="checkloginO" type="checkbox" />
        <div id="ownersidebar" v-if="owner.isownerLogin">
          <label for="checkloginO">
            <v-icon size="30" color="var(--color-white)" class="d-md-none d-xl-none d-xs-flex mt-2 ms-2 closeX">mdi-close</v-icon>
          </label>
          <div class="sidebarAva d-md-none d-xl-none">
            <v-avatar size="90" class="me-2 mb-6">
              <v-img :src="'https://source.boringavatars.com/beam/120/' + owner.account"></v-img>
            </v-avatar>
            <ul>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerself/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-account-outline</v-icon>
                  <a class="textWhite ctext1">業主資訊</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/cases/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-folder-outline</v-icon>
                  <a class="textWhite ctext1">業主案件</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerfavorite/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-heart-outline</v-icon>
                  <a class="textWhite ctext1">收藏作品</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownercheck/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-file-download-outline</v-icon>
                  <a class="textWhite ctext1">查看投稿</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerdeal/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-charity</v-icon>
                  <a class="textWhite ctext1">進行結案</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn" :to="`/owner/${owner._id}/ownerchats/`">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-message-outline</v-icon>
                  <a class="textWhite ctext1">
                    訊
                    <span class="ms-8"></span>
                    息
                  </a>
                </v-btn>
              </li>
              <li>
                <div class="sideline"></div>
              </li>
              <li>
                <v-btn depressed color="var(--color-blue)" class="memBtn mt-3" @click="ownerlogout">
                  <v-icon class="memIcon me-3" color="var(--color-white)">mdi-logout-variant</v-icon>
                  <a class="textWhite ctext1">
                    登
                    <span class="ms-9"></span>
                    出
                  </a>
                  <!-- 登出 -->
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
        <!-- --------------------------------------------------------------- -->

        <!-- xs Admin sidebar --------------------------------------------------------------->
        <router-link to="/">
          <v-icon class="textWhite xsMenuBtn ms-n3 d-sm-flex d-md-none d-xl-none me-5" v-if="user.isAdmin">mdi-home</v-icon>
        </router-link>
        <label for="checkloginA">
          <v-icon class="textWhite xsMenuBtn ms-n2 d-sm-flex d-md-none d-xl-none me-n1" v-if="user.isAdmin">mdi-dots-horizontal</v-icon>
        </label>
        <input id="checkloginA" type="checkbox" />
        <div id="adminsidebar" v-if="user.isAdmin">
          <label for="checkloginA">
            <v-icon size="30" color="var(--color-blue)" class="d-md-none d-xl-none d-xs-flex mt-2 ms-2 closeXO">mdi-close</v-icon>
          </label>
          <div class="sidebarAva d-md-none d-xl-none">
            <v-avatar size="90" class="me-2 mb-6">
              <v-img :src="'https://source.boringavatars.com/beam/120/' + user.account + `17`"></v-img>
            </v-avatar>
            <ul>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtnR" :to="`/admin/adminUser`">
                  <v-icon class="memIconR me-3">mdi-account-outline</v-icon>
                  <a class="ctext1 adlisttext">會員管理</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtnR" :to="`/admin/adminOwner`">
                  <v-icon class="memIconR me-3">mdi-account-tie-outline</v-icon>
                  <a class="ctext1 adlisttext">業主管理</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtnR" :to="`/admin/adminWork`">
                  <v-icon class="memIconR me-3">mdi-application-cog-outline Michael Irigoyen @mririgo</v-icon>
                  <a class="ctext1 adlisttext">網頁維護</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtnR" :to="`/admin/adminChats`">
                  <v-icon class="memIconR me-3">mdi-message-outline</v-icon>
                  <a class="ctext1 adlisttext">
                    訊
                    <span class="ms-9"></span>
                    息
                  </a>
                </v-btn>
              </li>
              <li>
                <div class="sidelineA"></div>
              </li>
              <li>
                <v-btn depressed color="var(--color-white)" class="memBtnR mt-3" @click="userlogout">
                  <v-icon class="memIconR me-3">mdi-logout-variant</v-icon>
                  <a class="ctext1 adlisttext">
                    登
                    <span class="ms-9"></span>
                    出
                  </a>
                  <!-- 登出 -->
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
        <!-- --------------------------------------------------------------- -->
      </v-app-bar>
      <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="100vh">
        <v-container fluid style="background-color: var(--color-blue); padding: 0px; height: 100vh">
          <!-- 內容 -->
          <label for="xsUserMenu" class="pullBtn">
            <v-icon class="textWhite xsMenuIcon">mdi-chevron-down</v-icon>
          </label>
          <input id="xsUserMenu" type="checkbox" />
          <div class="csidebar" id="Csidebar">
            <div class="search">
              <div class="serchBtnDiv">
                <template>
                  <v-text-field @keydown.enter="additem"></v-text-field>
                  <v-btn icon class="searchIcon"><v-icon size="30" color="var(--color-white)">mdi-magnify</v-icon></v-btn>
                </template>
                <v-btn rounded class="Listbtn d-none d-lg-flex mt-lg-5" @click="filter = ''">全部作品</v-btn>
                <v-btn rounded class="Listbtn d-none d-lg-flex" @click="filter = '平面設計'">平面設計</v-btn>
                <v-btn rounded class="Listbtn d-none d-lg-flex" @click="filter = '網頁設計'">網頁設計</v-btn>
                <v-btn rounded class="Listbtn d-none d-lg-flex" @click="filter = '室內設計'">室內設計</v-btn>
                <v-btn rounded class="Listbtn d-none d-lg-flex" @click="filter = '手作設計'">手作設計</v-btn>
                <v-btn rounded class="Listbtn d-flex d-lg-none mt-3 mt-lg-5 mt-sm-0" @click="filter = ''">全部</v-btn>
                <v-btn rounded class="Listbtn d-flex d-lg-none" @click="filter = '平面設計'">平面</v-btn>
                <v-btn rounded class="Listbtn d-flex d-lg-none" @click="filter = '網頁設計'">網頁</v-btn>
                <v-btn rounded class="Listbtn d-flex d-lg-none" @click="filter = '室內設計'">室內</v-btn>
                <v-btn rounded class="Listbtn d-flex d-lg-none" @click="filter = '手作設計'">手作</v-btn>
              </div>
            </div>
          </div>
          <div class="contentC"></div>
          <div class="mainC">
            <div v-for="casedata in filterItems" :key="casedata._id">
              <CaseListCard v-if="casedata.cases.length > 0" :casedata="casedata" />
            </div>
          </div>
        </v-container>
      </v-sheet>
    </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import UserRegisters from '../components/UserRegister.vue'
  import CaseListCard from '../components/CaseListCard.vue'
  export default {
    components: { UserRegisters, CaseListCard },
    data() {
      return {
        cases: [],
        filter: ''
      }
    },
    async created() {
      try {
        const { data } = await this.api.get('/owners/visitor')
        this.cases = data.result
        console.log(data.result)
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '商品取得失敗'
        })
      }
    },
    computed: {
      user() {
        return this.$store.getters['user/user']
      },
      owner() {
        return this.$store.getters['owner/owner']
      },
      filterItems() {
        return JSON.parse(JSON.stringify(this.cases)).map(item => {
          item.cases = item.cases.filter(c => {
            if (this.filter === '') return true
            return c.category.big === this.filter
          })
          return item
        })
      }
    },
    methods: {
      userlogout() {
        this.$store.dispatch('user/userlogout')
      },
      ownerlogout() {
        // 連到的是 actions 裡的 ownerlogout
        this.$store.dispatch('owner/ownerlogout')
      }
    }
  }
</script>
