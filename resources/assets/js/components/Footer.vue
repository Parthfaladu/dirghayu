<template>
	<div class="app-wrapper-footer">
        <div class="app-footer">
            <div class="app-footer__inner">
                <div v-if="$store.getters['init/settings'] && $store.getters['init/settings'].footerText" class="app-footer-left">
                    {{$store.getters['init/settings'].footerText}}
                </div>
                <div v-if="$store.getters['init/settings'] && $store.getters['init/settings'].companyTitle" class="app-footer-right">
                    <p>{{$store.getters['init/settings'].companyTitle}}</p>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
	name: 'Footer'
}
</script>