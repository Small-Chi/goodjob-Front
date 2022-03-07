<template>
  <v-app id="home">
    <v-card class="overflow-hidden">
      <v-app-bar absolute hide-on-scroll prominent scroll-target="#scrolling-techniques-4" max-height="70" class="textWhite NAVbar" style="z-index: 5">
        <v-img class="logo1 me-xl-n2 ms-xl-8 d-flex d-sm-none d-md-flex d-xl-flex" max-width="115" src="../assets/images/logo.png"></v-img>
        <v-img class="me-xl-n2 ms-xl-8 me-sm-n2 d-sm-flex d-none d-md-none d-xl-none" max-width="105" src="../assets/images/logo.png"></v-img>
        <div class="solgon rounded-pill ms-n5">
          <div class="ctext1 me-7 d-flex justify-end align-center" style="height: 100%">接案 ､ 發包 , 超好用</div>
        </div>
        <v-spacer></v-spacer>
        <!-- 導覽連結 -->
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
        <label for="checklogin">
          <v-icon class="textWhite xsMenuBtn ms-n2 d-sm-flex d-md-none d-md-none d-xl-none me-n1" v-if="user.isuserLogin && !user.isAdmin">
            mdi-dots-horizontal
          </v-icon>
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
        <v-container fluid style="background-color: var(--color-blue); padding: 0px; overflow: hidden">
          <section class="swiper">
            <div class="dark"></div>
            <Carousels />
            <div class="center">
              <div class="centerLogo" v-animate-css="'fadeInUp'">
                <v-img src="../assets/images/logo.png"></v-img>
              </div>
              <h1 class="centerslogan textWhite" v-animate-css="'fadeInUp'">
                專為
                <span style="color: var(--color-lightY); margin-left: auto">設計領域</span>
                打造
                <br />
              </h1>
              <h1 class="centerslogan3 textlightY" v-animate-css="'fadeInUp'">
                立即體驗
                <br />
              </h1>
              <v-row class="goBtnDiv">
                <div class="col-6" style="padding: 0">
                  <v-btn class="goBtnl" to="/portfoliosList">
                    <span style="font-weight: 700">找專業</span>
                    <p class="mt-1 gotextY">| 設計師作品區 |</p>
                  </v-btn>
                </div>
                <div class="col-6" style="padding: 0">
                  <v-btn class="goBtnr" to="/caseList">
                    <span style="font-weight: 700">找案件</span>
                    <p class="mt-1 gotextB">| 業主發案區 |</p>
                  </v-btn>
                </div>
              </v-row>
            </div>
            <v-row class="goodcard">
              <v-col class="gCard">
                <div class="circle">
                  <v-icon class="homeIcon-1">mdi-target-account</v-icon>
                </div>
                <span class="gText">精準獵才</span>
                <p>簡易操作的分類方式，促使需求一目了然，幫助您更快找到適合的人選及案件。</p>
              </v-col>
              <v-col class="gCard">
                <div class="circle">
                  <v-icon class="homeIcon-2">mdi-trending-up</v-icon>
                </div>
                <span class="gText">超高效率</span>
                <p>即時線上溝通系統，不用再等天荒地老只求一解，時間就是金錢，幫助您省時多賺。</p>
              </v-col>
              <v-col class="gCard">
                <div class="circle">
                  <v-icon class="homeIcon-3">mdi-account-group</v-icon>
                </div>
                <span class="gText">第三方支付保障</span>
                <p>不用擔心花時間的心血拿不到報酬，goodjob提供第三方支付保障，讓您安心接案。</p>
              </v-col>
            </v-row>
          </section>

          <div id="section2">
            <div class="SE2line d-none d-md-flex"></div>
            <div class="row">
              <div class="col-md-6 userTopLeft">
                <div class="avaImg1"></div>
                <div class="col-md-5 TopLeftText">
                  <span class="TopName">Hancock</span>
                  <div class="Topscore">
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-charity</v-icon>
                      <p class="Tscore">219</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-up</v-icon>
                      <p class="Tscore">163</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-down</v-icon>
                      <p class="Tscore">56</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur iste magni cupiditate nam deserunt suscipit totam aliquid
                    ullam blanditiis? totam blanditiis assumenda incidunt tempore quis, reiciendis quaerat unde dicta esse minima facilis doloremque id optio
                    deserunt quas nihil repellendus. Temporibus accusamus architecto sunt voluptate doloribus ad quos.
                  </p>
                </div>
              </div>
              <div class="d-none d-md-flex col-md-6"></div>
            </div>
            <div class="row">
              <div class="col-md-6 userTopRight order-md-2">
                <div class="col-md-5 TopLeftText">
                  <div class="avaImg2 d-flex d-md-none"></div>
                  <span class="TopName">Linda Chang</span>
                  <div class="Topscore">
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-charity</v-icon>
                      <p class="Tscore">167</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-up</v-icon>
                      <p class="Tscore">132</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-down</v-icon>
                      <p class="Tscore">35</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur iste magni cupiditate nam deserunt suscipit totam aliquid
                    ullam blanditiis? totam blanditiis assumenda incidunt tempore quis, reiciendis quaerat unde dicta esse minima facilis doloremque id optio
                    deserunt quas nihil repellendus. Temporibus accusamus architecto sunt voluptate doloribus ad quos.
                  </p>
                </div>
                <div class="avaImg2 d-none d-md-flex"></div>
              </div>
              <div class="d-none d-md-flex col-md-6"></div>
            </div>
            <div class="row">
              <div class="col-md-6 userTopBottom">
                <div class="avaImg3"></div>
                <div class="col-md-5 TopLeftText">
                  <span class="TopName">多肉饞讒</span>
                  <div class="Topscore">
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-charity</v-icon>
                      <p class="Tscore">97</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-up</v-icon>
                      <p class="Tscore">83</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-down</v-icon>
                      <p class="Tscore">14</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur iste magni cupiditate nam deserunt suscipit totam aliquid
                    ullam blanditiis? totam blanditiis assumenda incidunt tempore quis, reiciendis quaerat unde dicta esse minima facilis doloremque id optio
                    deserunt quas nihil repellendus. Temporibus accusamus architecto sunt voluptate doloribus ad quos.
                  </p>
                </div>
              </div>
              <div class="d-none d-md-flex col-md-6"></div>
            </div>
            <div class="row">
              <div class="col-md-6 userTopRight order-2">
                <div class="col-md-5 TopLeftText">
                  <div class="avaImg4 d-flex d-md-none"></div>
                  <span class="TopName">可口美</span>
                  <div class="Topscore">
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-charity</v-icon>
                      <p class="Tscore">81</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-up</v-icon>
                      <p class="Tscore">72</p>
                    </div>
                    <div class="col-md-4 TopscoreI">
                      <v-icon class="scoreIcon" color="var(--color-white)">mdi-thumb-down</v-icon>
                      <p class="Tscore">9</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur iste magni cupiditate nam deserunt suscipit totam aliquid
                    ullam blanditiis? totam blanditiis assumenda incidunt tempore quis, reiciendis quaerat unde dicta esse minima facilis doloremque id optio
                    deserunt quas nihil repellendus. Temporibus accusamus architecto sunt voluptate doloribus ad quos.
                  </p>
                </div>
                <div class="avaImg4 d-none d-md-flex"></div>
              </div>
              <div class="d-none d-md-flex col-md-6"></div>
            </div>
          </div>

          <div id="section3">
            <div class="se3about col-xl-8">
              <div class="aboutcontent col-xl-12">
                <div class="col-xl-4 text-lg-left">
                  <h6>CONTACTS</h6>
                  <p>
                    <v-icon color="var(--color-white)" class="me-1 con">mdi-map-marker</v-icon>
                    新北市泰山區貴子里致遠新村55之1號
                  </p>
                  <p>
                    <v-icon color="var(--color-white)" class="me-1 con">mdi-phone</v-icon>
                    0912345678
                  </p>
                  <p>
                    <v-icon color="var(--color-white)" class="me-1 con">mdi-email</v-icon>
                    Demo@mail.com
                  </p>
                </div>
                <div class="col-xl-4 text-lg-center px-xl-5">
                  <v-img class="ms-auto me-auto mb-5 d-none d-xl-flex" max-width="150" src="../assets/images/logo.png"></v-img>
                  <v-img class="ms-md-auto me-auto mb-5 d-flex d-xl-none" max-width="100" src="../assets/images/logo.png"></v-img>
                  <h6>關於 goodjob</h6>
                  <span>
                    在家工作的「SOHO型態」及「專業外包」將是未來趨勢，但市面上的外包網站版面太過雜亂、使用複雜，為解決這些問題，產生了優化外包網的概念網站「goodjob」
                  </span>
                  <p>
                    <v-icon left right class="mt-2 ms-n1 ms-xl-0 mb-5 mt-xl-6 footerIcon" color="var(--color-lightY) ">mdi-facebook</v-icon>
                    <v-icon left right class="mt-2 mb-5 mt-xl-6 footerIcon" color="var(--color-lightY) ">mdi-instagram</v-icon>
                    <v-icon left right class="mt-2 mb-5 mt-xl-6 footerIcon" color="var(--color-lightY) ">mdi-youtube</v-icon>
                    <v-icon left right class="mt-2 mb-5 mt-xl-6 footerIcon" color="var(--color-lightY) ">mdi-twitter</v-icon>
                  </p>
                </div>
                <div class="col-xl-4 text-lg-right">
                  <h6>WORKING HOURS</h6>
                  <p>Mon – Fri: 7.00am – 6.00pm</p>
                  <p>Sat: 7.00am – 6.00pm</p>
                  <p>Sun: 8.00am – 6.00pm</p>
                </div>
              </div>
              <div class="col-12 text-center pt-4 footerT" style="border-top: 1px solid var(--color-white)">
                ※ 本網站僅供專題報告用途，其他商業用途需另外獲得批准、權利與許可。圖片來源多數取自 https://www.pinterest.com/，會員及公司名稱純屬虛構。
              </div>
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
  import Carousels from '../components/Carousel.vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  export default {
    components: { UserRegisters, Carousels },
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
    },
    mounted() {
      gsap.to('.avaImg1', {
        duration: 1,
        repeat: 0,
        yoyo: false,
        ease: 'none',
        x: '47.5vw'
      })
      gsap.to('.avaImg2', {
        delay: 1,
        duration: 1,
        repeat: 0,
        yoyo: false,
        ease: 'none',
        x: '-49vw'
      })
      gsap.to('.avaImg3', {
        delay: 2,
        duration: 1,
        repeat: 0,
        yoyo: false,
        ease: 'none',
        x: '47vw'
      })
      gsap.to('.avaImg4', {
        delay: 3,
        duration: 1,
        repeat: 0,
        yoyo: false,
        ease: 'none',
        x: '-49vw'
      })
    }
  }
</script>
