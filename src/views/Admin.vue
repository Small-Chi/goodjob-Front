<template>
  <v-app id="AdminHome">
    <v-card class="overflow-hidden">
      <v-app-bar absolute hide-on-scroll prominent scroll-target="#scrolling-techniques-4" max-height="70" class="textWhite NAVbar" style="z-index: 5">
        <v-img class="logo1 me-xl-n2 ms-xl-8 d-none d-lg-flex" max-width="115" src="../assets/images/logo-2.png"></v-img>
        <div class="Usersolgon rounded-pill ms-xl-n5">
          <div class="ctext1 me-xl-7 d-flex justify-center justify-lg-end align-center" style="height: 100%">管理系統</div>
        </div>
        <v-spacer></v-spacer>
        <!-- 導覽連結 -->
        <router-link to="/">
          <div class="navAD d-flex align-center"><a class="textWhite ctext1 px-4 px-lg-5 d-none d-lg-flex">首頁</a></div>
        </router-link>
        <router-link to="/portfoliosList">
          <div class="navAD d-flex align-center"><a class="textWhite ctext1 px-4 px-lg-5">找專業</a></div>
        </router-link>
        <router-link to="/caseList">
          <div class="navAD d-flex align-center"><a class="textWhite ctext1 px-4 px-lg-5">找案件</a></div>
        </router-link>
        <!-- 登入 -->
        <UserRegisters />
        <!-- 管理員資料 -->
        <div class="adavatars me-xl-6" v-if="user.isAdmin" id="owner">
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
          <v-icon class="textBlue down">mdi-chevron-down</v-icon>
        </div>
        <v-btn
          color="rgba(0,0,0,0)"
          class="textBlue adlogin ms-0 ms-xl-n6 d-none d-md-flex"
          plain
          v-if="user.isuserLogin && !owner.isownerLogin"
          @click="userlogout"
        >
          <v-icon class="me-2">mdi-logout-variant</v-icon>
          <!-- 登出 -->
        </v-btn>
        <v-btn
          color="rgba(0,0,0,0)"
          class="textBlue adlogin ms-0 ms-xl-n6 d-none d-md-flex"
          plain
          v-if="!user.isuserLogin && owner.isownerLogin"
          @click="ownerlogout"
        >
          <v-icon class="me-2">mdi-logout-variant</v-icon>
          <!-- 登出 -->
        </v-btn>

        <!-- xs Admin sidebar --------------------------------------------------------------->
        <router-link to="/">
          <v-icon class="textBlue xsMenuBtnAD ms-n3 d-sm-flex d-md-none d-xl-none me-5" v-if="user.isAdmin">mdi-home</v-icon>
        </router-link>
        <label for="checkloginA">
          <v-icon class="textBlue xsMenuBtnAD ms-n2 d-sm-flex d-md-none d-xl-none me-n1" v-if="user.isAdmin">mdi-dots-horizontal</v-icon>
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
        <v-container fluid style="background-color: var(--color-deepwhite); padding: 0px; height: 100vh">
          <!-- 內容 -->
          <div class="sidebar">
            <v-avatar class="avatarSidebar">
              <v-img :src="'https://source.boringavatars.com/beam/120/' + user.account + `17`"></v-img>
            </v-avatar>
            <!-- <v-avatar size="130" class="avatarSidebar-md d-none d-md-flex d-xl-none">
              <v-img :src="'https://source.boringavatars.com/beam/120/' + user.account + `17`"></v-img>
            </v-avatar> -->
          </div>
          <div class="content"></div>
          <div class="selfmeanu">
            <ul>
              <li>
                <v-btn depressed exact color="var(--color-deepwhite)" class="memBtn" :to="`/admin/adminUser`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-account-outline</v-icon>
                  <a class="adlisttextB ctext2">會員管理</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed exact color="var(--color-deepwhite)" class="memBtn" :to="`/admin/adminOwner`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-account-tie-outline</v-icon>
                  <a class="adlisttextB ctext2">業主管理</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed exact color="var(--color-deepwhite)" class="memBtn" :to="`/admin/adminWork`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-application-cog-outline Michael Irigoyen @mririgo</v-icon>
                  <a class="adlisttextB ctext2">網頁維護</a>
                </v-btn>
              </li>
              <li>
                <v-btn depressed exact color="var(--color-deepwhite)" class="memBtn" :to="`/admin/adminChats`">
                  <v-icon class="memIcon me-3" color="var(--color-blue)">mdi-message-outline</v-icon>
                  <a class="adlisttextB ctext2">
                    訊
                    <span class="ms-8"></span>
                    息
                  </a>
                </v-btn>
              </li>
            </ul>
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

  export default {
    components: { UserRegisters },
    data() {
      return {
        userId: '',
        ownerId: ''
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
