<section class="main full-height" layout="column">
  <header>
    <topbar sidebar-state="vm.sidebarState"></topbar>
  </header>
  <section class="content" flex="grow" layout="row">
    <map></map>
    <md-button ng-show="vm.isLogged" class="md-fab add-event-btn" aria-label="Add Event"
               ng-click="vm.showSideBar('event')">
      <md-icon>add</md-icon>
    </md-button>
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
  <sidebar state="vm.sidebarState" sidebar-id="vm.sideBarID"></sidebar>
</section>
