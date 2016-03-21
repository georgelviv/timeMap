<section class="main full-height" layout="column">
  <header>
    <md-toolbar>
      <div class="md-toolbar-tools">
        <div flex="20" layout="row">
          <md-button ng-href="/#/" aria-label="logo" class="logo"></md-button>
        </div>
        <div flex="80" layout="row"  layout-align="center center">
        </div>
        <div flex="20" layout="row" layout-align="end">
          <div>
            <md-button class="md-raised" ng-click="vm.showSideBar('tags')">
              tags
            </md-button>
          </div>
          <div>
            <md-button class="md-raised" ng-click="vm.showSideBar('login')">
              login/registration
            </md-button>
          </div>
          <div>
            <md-button class="md-raised" ng-click="vm.showSideBar('event')">
              create event
            </md-button>
          </div>
        </div>
      </div>
    </md-toolbar>
  </header>
  <section class="content" flex="grow" layout="row">
    <map></map>
    <sidebar state="vm.sidebarState" sidebar-id="vm.sideBarID"></sidebar>
  </section>
  <time-line></time-line>
  <footer>
    <md-toolbar layout="row" layout="row">
      <div class="md-toolbar-tools">
        <div flex="100" layout="row"  layout-align="center center">
          <div>TIME MAP version 0.1</div>
        </div>
      </div>
    </md-toolbar>
  </footer>
</section>
