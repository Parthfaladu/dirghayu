import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import AuthPermission from '@plugins/permissions';

Vue.use(Vuex)
Vue.use(AuthPermission)

const store = new Vuex.Store({
    modules,
})

// Automatically run the `init` action for every module,
// if one exists.
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

export default store