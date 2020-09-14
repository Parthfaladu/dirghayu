<template>
    <DashboardPage v-can:view__package>
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper d-flex">
                    <div class="page-title-heading mr-auto align-content-start">
                        <div class="page-title-icon">
                            <i class="pe-7s-gift icon-gradient bg-premium-dark text-danger"></i>
                        </div>
                        <div class="heading-font-weight">PACKAGE LIST</div>
                    </div>
                    <div v-can:add__package class="align-content-end">
                        <router-link
                            to="/add-package"
                            class="btn btn-outline-alternate-new all-add-new"
                            >Add Package</router-link
                        >
                    </div>
                </div>
            </div>
            <div class="main-card mb-3 card">
                <div class="card-body col-sm-12">
                    <div class="table-responsive">
                        <PackageTable></PackageTable>
                    </div>
                </div>
            </div>
        </div>
    </DashboardPage>
</template>
<script>
import PackageTable from "@components/PackageTable.vue";
import DashboardPage from "@layouts/DashboardPage.vue";

export default {
    name: "PackageListView",
    components: {
        PackageTable,
        DashboardPage
    }
};
</script>
