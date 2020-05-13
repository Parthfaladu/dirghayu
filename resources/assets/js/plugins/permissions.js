const plugin = {
    install(Vue, options) {
     var opts = {
      canFunction: '$can',
      cannotFunction: '$cannot',
      canDirective: 'can',
      permissionsGetter: 'init/userPermissions',
      ...options
     }
     const can = function(store, value, modifier = 'some') {
      const userPermissions = store.getters[opts.permissionsGetter]
      return hasPermission(userPermissions, value, modifier)
     }
     Vue.prototype[opts.canFunction] = function(value) {
      return can(this.$store, value)
     }
     Vue.prototype[opts.cannotFunction] = function(value) {
      return !can(this.$store, value)
     }
     Vue.directive(opts.canDirective, function(el, binding, vnode) {
      var modifier = binding.modifiers.every ? 'every' : 'some'
      var ok = can(vnode.context.$store, binding.value || binding.arg, modifier)
      if (!ok) {
       if (binding.modifiers.disabled) {
        el.disabled = true
       } else {
        commentNode(el, vnode)
       }
      }
     })
    },
   }
   
   function hasPermission(userPermissions, value, modifier = 'some') {
    switch (modifier) {
     case 'some':
      return hasSomePermissions(userPermissions, value) 
      case 'every': return hasEveryPermissions(userPermissions, value) 
      default: return hasSomePermissions(userPermissions, value)
    }
   }
   
   function hasEveryPermissions(userPermissions, value) {
        const permissions = extractPermissions(value) 
        return permissions.some((p) => userPermissions.some((up) => up.name === p))
   }
   
   function hasSomePermissions(userPermissions, value) {
        const permissions = extractPermissions(value) 
        return permissions.some((p) => userPermissions.some((up) => up.name === p))
   }
   
   function extractPermissions(value) {
    if (typeof value === 'string' || value instanceof String) {
     return [value]
    }
    if (Array.isArray(value)) {
     return value
    }
    return []
   }
   /** * Create comment node * * @private * @author https://stackoverflow.com/questions/43003976/a-custom-directive-similar-to-v-if-in-vuejs#43543814 */
   function commentNode(el, vnode) {
    const comment = document.createComment(' ')
    Object.defineProperty(comment, 'setAttribute', {
     value: () => undefined,
    })
    vnode.text = ' '
    vnode.elm = comment 
    vnode.isComment = true 
    vnode.tag = undefined 
    vnode.data.directives = undefined
    if (vnode.componentInstance) {
     vnode.componentInstance.$el = comment
    }
    if (el.parentNode) {
     el.parentNode.replaceChild(comment, el)
    }
   }
   export default plugin
   export const Auth = {
    hasPermission,
    hasEveryPermissions,
    hasSomePermissions,
   }