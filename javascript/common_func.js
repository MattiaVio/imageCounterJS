/* common javascript function */

var markers_array = new Array();
markers_array [0] = '';

function removeRow(id){
		var to_remove_row = $("#"+id).val();
		$("#row_"+to_remove_row).remove(); 
	};
	
function stopCount(){
	$("#image_div").off('click'); 
};
	
	
function resetCount(id){
	var to_reset_cell = $("#"+id).val();
	$("#counter_"+to_reset_cell).html('0'); 
};
	
	
function addNewRow(id){
	var new_species_name = $('#'+id).val();
	$('<tr></tr>').html('<td id="'+new_species_name+'">'+new_species_name+'</td><td id="counter_'+new_species_name+'" onClick="countThis(\'counter_'+new_species_name+'\')">0</td>').appendTo('#name_and_count');
};

function removeMarkers(className){
	$('#rmv_lst_mrkrs').attr('disabled',true)
	$('.'+className).remove();
	markers_array = [];
	markers_array [0] = '';
};


function countThis(id){
	$("#image_div").off('click'); 
	$("#image_div").on('click',function(e) {
		$('#rmv_lst_mrkrs').attr('disabled',false);
		var counter = $("#"+ id);
		var markers_position = 0;
		e.data = id;
		markers_array.push(e);
		markers_position = parseInt($(counter).html())+1;
		$('<img class="markers" src="immagini/marker.png" style="position: absolute;"/>').css('left', e.pageX).css('top', e.pageY).appendTo('#name_and_count');
		$(counter).html(parseInt($(counter).html())+1);
	});
};


function remove_last_marker(){
	last_marker = markers_array.length - 1;
	if (last_marker != 0){
	$(".markers:last-child").remove();
	$('#'+markers_array[last_marker].data).html(parseInt($('#'+markers_array[last_marker].data).html())-1);
	markers_array.pop();
	} else {
		$('#rmv_lst_mrkrs').attr('disabled',true);
	};
};

function changeImage(id){
	var path = $('#'+id).val();
	$('#image_div').remove();
	$('<img src="immagini/'+path+'" id="image_div" disabled="disable"/>').appendTo('#image_container');
};
