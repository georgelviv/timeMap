<section class="main full-height" layout="column">
  <header>
    <md-toolbar>
      <div class="md-toolbar-tools">
        <div flex="20" layout="row">
          <md-button ng-href="/" class="logo"></md-button>
        </div>
        <div flex="60" layout="row"  layout-align="center center">
          <div>
          <md-button ng-href="" flex>
            home
          </md-button>
          <md-button ng-href="/login" flex>
            login
          </md-button>
            <md-button ng-href="/register" flex>
              register
            </md-button>
          </div>
        </div>
        <div flex="20" layout="row" layout-align="end">
          <div>
            <md-button class="md-raised" show-side-bar>create event</md-button>
          </div>

        </div>
      </div>
    </md-toolbar>
  </header>
  <section class="content" flex="grow" layout="row">
    <map></map>
    <sidebar></sidebar>
  </section>
  <time-line></time-line>
  <footer>
    <md-toolbar layout="row" layout="row">
      <div class="md-toolbar-tools">
      <div flex="20">
        <md-button ng-href="http://www.epam-group.ru/careers/ukraine" class="epam_logo"></md-button>
      </div>
      <div flex="60" layout="row"  layout-align="center center">
        <div>TIME MAP version 0.0</div>
      </div>
        </div>
    </md-toolbar>
  </footer>
</section>
