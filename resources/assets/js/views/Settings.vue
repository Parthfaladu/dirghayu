<template>
	<DashboardPage v-can:permission_manage>
		<div class="app-main__inner">
		<div class="app-page-title">
	    	<div class="page-title-wrapper">
	            <div class="page-title-heading">
	                <div class="page-title-icon">
	                    <i class="metismenu-icon pe-7s-tools">
	                    </i>
	                </div>
	                <div>General Settings</div>
	            </div>    
	        </div>
	    </div>            
	    <div class="main-card mb-3 card">
	        <div class="card-body col-sm-6 offset-sm-3">
	            <h5 class="card-title"></h5>
	            <form v-if="form"  @submit.prevent="submitForm()">
                    <div class="position-relative form-group">
                        <label for="title">Company title</label>
                        <input type="text" name="companyTitle" v-model="form.companyTitle" class="form-control" v-validate="'required'">
                        <span v-show="errors.has('companyTitle')" class="text-danger">{{ errors.first('companyTitle') }}</span>
                    </div>
                    <div class="position-relative form-group">
                        <label for="profile_img_path">Company logo</label><br>
                        <img :src="form.logoUrl" width="20%" />
                        <input id="profilePath" ref="profilePath" type="file" class="form-control" accept="image/*" name="profilePath" style="display:none;" @change="onImageUpload()">             
                    </div>
                    <div class="position-relative form-group">
                        <label></label>
                        <button class="btn btn-info" @click.prevent="$refs.profilePath.click()">Upload logo</button>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Display currency</label>
                        <select v-model="form.currencyId" class="form-control">
                            <option v-for="(currency, index) in currencyList" :key="index" :value="currency.id">{{currency.title}} {{currency.symbol}}</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="title">Footer text</label>
                        <input type="text" name="footer" v-model="form.footerText" class="form-control">
                    </div>
                    <div class="text-center">
                        <button class="btn btn-outline-info" type="submit">SUBMIT</button>
                    </div>
                </form>
	        </div>
	    </div>
	</div>
	</DashboardPage>
</template>
<script>
import DashboardPage from '@layouts/DashboardPage';
import axios from 'axios';

export default {
	name: 'AddNotice',
	components: {
        DashboardPage,
    },
    data() {
        return {
            form: null,
            profileImage: null,
            currencyList: [],
        }
    },
    mounted() {
        this.getCurrencyList();

        this.form = {
            ...this.$store.getters['init/settings']
        }
    },
    methods: {
        async getCurrencyList() {
            const res = await axios.get('/api/v1/currency/list');
            this.currencyList = res.data.data;
        },
        async submitForm() {
			try {
                const result = await this.$validator.validateAll();
				if(!result){
					return
                }
                 
                const settingsData = new FormData()
                settingsData.append('companyTitle', this.form.companyTitle)
                settingsData.append('currencyId', this.form.currencyId)
                settingsData.append('footerText', this.form.footerText)
                settingsData.append('profileImage', this.profileImage)

                const res = await axios.post('/api/v1/settings', settingsData,{headers: {'Content-Type': 'multipart/form-data'}})
                
                this.$snotify.success(null, res.data.message);
            }
            catch(err) {
                this.$snotify.error("There is some internal error.");
            }
        },
        onImageUpload() {
            this.profileImage = this.$refs.profilePath.files[0];

            const reader  = new FileReader();
            reader.addEventListener("load", function () {
                this.form.logoUrl = reader.result;
            }.bind(this), false);

            if( this.profileImage ){
            //   if ( /\.(jpe?g|png|gif)$/i.test( this.user.profileImage.name ) ) {
                reader.readAsDataURL( this.profileImage );
            //   }
        	}
        },
    }
}
</script>