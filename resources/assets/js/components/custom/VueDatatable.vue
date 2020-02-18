<template>

	<table align="center" width="100%" class="table table-hover">
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
		}
	},
	mounted() {
		var that = this;
		var datatable = $(this.$el).DataTable({
		    "paging": true,
		    "lengthChange": true,
		    "searching": true,
		    "ordering": true,
		    "info": true,
		    "responsive": true,
		    "processing": true,
        	"serverSide": true,
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
					$(that.$el).DataTable().draw();
		        });
		    },
	    });
	}
}
</script>

<style>
@import '~@assets/css/dataTables.bootstrap4.min.css';
</style>