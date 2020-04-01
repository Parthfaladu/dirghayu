<template>
    <DashboardPage>
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i
                                class="pe-7s-call icon-gradient bg-premium-dark text-danger"
                            >
                            </i>
                        </div>
                        <div>ENQUIRY DETAIL</div>
                    </div>
                </div>
            </div>
            <div class="main-card mb-3 card">
                <div class="card-body col-sm-6 offset-sm-3">
                    <h5 class="card-title"></h5>
                    <form @submit.prevent="submitForm()">
                        <div class="position-relative form-group">
                            <label for="name">Name</label>
                            <input
                                id="name"
                                v-model="enquiry.name"
                                type="text"
                                class="form-control"
                                name="name"
                                required
                            />
                        </div>
                        <div class="position-relative form-group">
                            <label for="email">Email</label>
                            <input
                                id="email"
                                v-model="enquiry.email"
                                type="email"
                                class="form-control"
                                name="email"
                                required
                            />
                        </div>
                        <div class="position-relative form-group">
                            <label for="phone">Phone</label>
                            <input
                                id="phone"
                                v-model="enquiry.phone"
                                type="text"
                                class="form-control"
                                name="phone"
                                required
                            />
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
                                        checked
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
                            <input
                                id="last_follow_up_date"
                                v-model="enquiry.last_follow_up_date"
                                type="text"
                                class="form-control"
                                name="last_follow_up_date"
                                placeholder="yyyy-mm-dd"
                                required
                            />
                        </div>
                        <div class="position-relative form-group">
                            <label for="next_follow_up_date"
                                >Next Follow Up Date</label
                            >
                            <input
                                id="next_follow_up_date"
                                v-model="enquiry.next_follow_up_date"
                                type="text"
                                class="form-control"
                                name="next_follow_up_date"
                                placeholder="yyyy-mm-dd"
                                required
                            />
                        </div>
                        <div class="position-relative form-group">
                            <label for="remark">Remark</label>
                            <textarea
                                id="remark"
                                v-model="enquiry.remark"
                                rows="2"
                                class="form-control"
                                name="remark"
                                required
                            ></textarea>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-outline-info" type="submit">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </DashboardPage>
</template>

<script>
import axios from "axios";
import DashboardPage from "@layouts/DashboardPage";

export default {
    name: "AddEnqiry",
    components: {
        DashboardPage
    },
    data() {
        return {
            enquiry: {
                name: null,
                email: null,
                phone: null,
                gender: "female",
                last_follow_up_date: null,
                next_follow_up_date: null,
                remark: null
            }
        };
    },
    async mounted() {
        try {
            if (this.$route.params.id != null) {
                const id = this.$route.params.id;
                const res = await axios.get("/api/v1/enquiry/list/" + id, {
                    headers: {
                        Authorization: this.$store.getters["auth/authHeaders"]
                            .Authorization
                    }
                });
                this.enquiry = res.data.data;
            }
        } catch (err) {
            this.$snotify.error(null, err.message);
        }
    },
    methods: {
        async submitForm() {
            try {
                if (this.enquiry) {
                    let res = null;
                    if (this.$route.params.id != null) {
                        res = await axios.post(
                            "/api/v1/enquiry/update",
                            this.enquiry,
                            {
                                headers: {
                                    Authorization: this.$store.getters[
                                        "auth/authHeaders"
                                    ].Authorization
                                }
                            }
                        );
                    } else {
                        res = await axios.post(
                            "/api/v1/enquiry/create",
                            this.enquiry,
                            {
                                headers: {
                                    Authorization: this.$store.getters[
                                        "auth/authHeaders"
                                    ].Authorization
                                }
                            }
                        );
                    }

                    if (res.data.status == "success") {
                        this.resetForm();
                        this.$router.push("/enquiry-list");
                        this.$snotify.success(null, res.data.message);
                    }
                }
            } catch (err) {
                this.$snotify.error(null, err.message);
            }
        },
        resetForm() {
            this.enquiry = null;
        }
    }
};
</script>
