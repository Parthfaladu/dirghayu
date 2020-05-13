<template>
	<table align="center" width="100%" class="table table-hover" :class="className">
		<thead>
			<tr>
				<slot></slot>
			</tr>
		</thead>
		<tbody></tbody>
	</table>
</template>
<script>
import $ from "jquery";
import '@assets/js/jquery.dataTables.js';
import '@assets/js/dataTables.bootstrap4.min.js';

export default {
	name: 'VueDatatable',
	props: {
		columns: {
			type: Array|null,
			default: () => []
		},
		url: {
			type: String,
			default: null	
		},
		type: {
			type: String,
			default: 'GET'
		},
		searching: {
			type: Boolean,
			default: true
		},
		lengthChange: {
			type: Boolean,
			default: true
		},
		order: {
			type: Array,
			default: () => []
		},
		className: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			datatable: null,
		}
	},
	mounted() {
		var that = this;
		this.datatable = $(this.$el).DataTable({
		    "paging": true,
		    "lengthChange": this.lengthChange,
		    "searching": this.searching,
		    "ordering": true,
		    "info": true,
		    "responsive": true,
		    "processing": true,
			"serverSide": true,
			"order": this.order,
		    ajax: {
		        'url': this.url,
		        'type' : this.type,
		        "beforeSend": (xhr) => {
		            xhr.setRequestHeader("Authorization", this.$store.getters['auth/authHeaders'].Authorization)
		         }
		    },
	      	"columns": this.columns,
	      	"drawCallback":function(setting){
		        $('td [data-g-action]').click(function(e){
		            e.preventDefault();
		            
		            var action = $(this).attr('data-g-action');
		            
		            var actionData = $(this).attr('data-g-actiondata');
		            
		            var args = {
		            	action: action,
		            	data: actionData
		            }

					that.$emit('gaction', args)
		        });
		    },
	    });
	},
	methods: {
		reload(url) {
			this.datatable.ajax.url(url).load();
		},
		draw() {
			this.datatable.draw();
			// this.datatable.fnDraw();
		}
	}
}
</script>

<style>
@import '~@assets/css/dataTables.bootstrap4.min.css';
</style>