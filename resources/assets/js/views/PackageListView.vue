<template>
    <DashboardPage v-can:view__package>
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i
                                class="pe-7s-gift icon-gradient bg-premium-dark text-danger"
                            >
                            </i>
                        </div>
                        <div>PACKAGE LIST</div>
                    </div>
                </div>
            </div>
            <div class="main-card mb-3 card">
                <div class="card-body col-sm-12">
                    <h5 v-can:add__package class="card-title">
                        <router-link
                            to="/add-package"
                            class="btn btn-outline-primary mb-5 pull-right"
                            >Add Package</router-link
                        >
                    </h5>
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
