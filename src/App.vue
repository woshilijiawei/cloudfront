<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="content">
            <router-link :to="item.href">{{ item.title }}</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'history', title: 'Dashboard', href: 'Layout' },
          { icon: 'content_copy', title: 'Project', href: 'Project' },
          { icon: 'bubble_chart', title: 'Pipeline', href: 'Pipeline' },
          { icon: 'keyboard', title: 'Application', href: 'Pipeline' },
          { icon: 'contacts', title: 'Template', href: 'Template' },
          { icon: 'phonelink', title: 'Resource', href: 'Resource' },
          { icon: 'phonelink', title: 'LoadBalance', href: 'LoadBalance' },
          { icon: 'settings', title: 'Setting', href: 'Setting' },
          { icon: 'help', title: 'help', href: 'Help' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Enterprise Container Platform'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  a:link { text-decoration: none; } 
  .content {
    width: 200px;
  }
</style>
