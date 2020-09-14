<template>
    <form @submit.prevent="submitForm()">
        <div class="position-relative form-group">
            <label for="name">Name</label>
            <input
                id="name"
                v-model="enquiry.name"
                v-validate="'required'"
                type="text"
                class="form-control"
                name="name"
            />
            <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="email">Email</label>
            <input
                id="email"
                v-model="enquiry.email"
                v-validate="'required|email'"
                type="email"
                class="form-control"
                name="email"
            />
            <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="phone">Phone</label>
            <input
                id="phone"
                v-model="enquiry.phone"
                v-validate="'required'"
                type="text"
                class="form-control"
                name="phone"
            />
            <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="gender">Gender</label>
            <div class="ml-1 row">
                <div class="custom-control custom-radio">
                    <input
                        id="defaultGroupExample1"
                        v-model="enquiry.gender"
                        type="radio"
                        class="custom-control-input"
                        name="gender"
                        value="male"
                        :checked="enquiry.gender === 'male'"
                    />
                    <label
                        class="custom-control-label"
                        for="defaultGroupExample1"
                        >Male &nbsp;</label
                    >
                </div>
                <div class="custom-control custom-radio">
                    <input
                        id="defaultGroupExample2"
                        v-model="enquiry.gender"
                        type="radio"
                        class="custom-control-input"
                        name="gender"
                        value="female"
                        :checked="enquiry.gender === 'female'"
                    />
                    <label
                        class="custom-control-label"
                        for="defaultGroupExample2"
                        >&nbsp;Female</label
                    >
                </div>
            </div>
        </div>
        <div class="position-relative form-group">
            <label for="last_follow_up_date"
                >Last Follow Up Date</label
            >
            <!-- <input
                id="last_follow_up_date"
                v-model="enquiry.last_follow_up_date"
                v-validate="'required'"
                type="text"
                class="form-control"
                name="last_follow_up_date"
                placeholder="yyyy-mm-dd"
            /> -->
            <VueJqueryCalendar v-model="enquiry.last_follow_up_date" v-validate="'required'" name="last_follow_up_date" date-format="dd-mm-yy" :readonly="true" class-name="form-control" />

            <span v-show="errors.has('last_follow_up_date')" class="text-danger">{{ errors.first('last_follow_up_date') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="next_follow_up_date"
                >Next Follow Up Date</label
            >
            <!-- <input
                id="next_follow_up_date"
                v-model="enquiry.next_follow_up_date"
                v-validate="'required'"
                type="text"
                class="form-control"
                name="next_follow_up_date"
                placeholder="yyyy-mm-dd"
            /> -->
            <VueJqueryCalendar v-model="enquiry.next_follow_up_date" v-validate="'required'" name="next_follow_up_date" date-format="dd-mm-yy" :readonly="true" class-name="form-control" />
            <span v-show="errors.has('next_follow_up_date')" class="text-danger">{{ errors.first('next_follow_up_date') }}</span>
        </div>
        <div class="position-relative form-group">
            <label for="remark">Remark</label>
            <textarea
                id="remark"
                v-model="enquiry.remark"
                rows="2"
                class="form-control"
                name="remark"
            ></textarea>
        </div>

        <div class="text-center">
            <button class="btn btn-outline-success-new" 
            type="submit">
                SUBMIT
            </button>
        </div>
    </form>
</template>
<script>
import axios from "axios";
import moment from 'moment';
import VueJqueryCalendar from 'vue-jquery-calendar';

export default {
    name: 'AddEnquiryForm',
    components: {
		VueJqueryCalendar,
	},
    data() {
        return {
            enquiry: {
                name: null,
                email: null,
                phone: null,
                gender: "female",
                last_follow_up_date: moment().format("DD-MM-YYYY"),
                next_follow_up_date: moment().format("DD-MM-YYYY"),
                remark: null
            }
        };
    },
    async mounted() {
        if (this.$route.params.id != null) {
            await this.getEnquiryList();
        }
    },
    methods: {
        async getEnquiryList() {
            try {
                const res = await axios.get("/api/v1/enquiry/list/" + this.$route.params.id);
                this.enquiry = res.data.data;
            } catch(err) {
                this.$snotify.error(null, err.message);
            }
        },
        async submitForm() {
            try {
                const result = await this.$validator.validateAll();
				if(!result){
					return
                }
                
                let res = null;
                if (this.$route.params.id != null) {
                    res = await this.updateEnquiry();
                    this.$snotify.success(null, res.data.message);
                } else {
                    res = await this.createEnquiry();
                    this.$router.push("/enquiry-list");
                }
            } catch (err) {
                this.$snotify.error(null, err.message);
            }
        },
        async updateEnquiry() {
            const res = await axios.post('/api/v1/enquiry/update',this.enquiry);
            return res;
        },
        async createEnquiry() {
            const res = await axios.post('/api/v1/enquiry/create',this.enquiry);
            return res;
        }
    }
}
</script>