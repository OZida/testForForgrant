
import "./scss/main.scss";
import 'bootstrap';
import '../jquery.formstyler.js';
import '../node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css';
import '../node_modules/jquery-form-styler/dist/jquery.formstyler.css';
import '../node_modules/font-awesome/scss/font-awesome.scss';



	let value_option='BTCUSD',
		name_option= '$',
		correct_link = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + value_option;
	let pattern = /\-?\d*/;

	$.getJSON(correct_link, function(data){
		$('.currencyDetails').html();

		$('.currencyDetails').find('h5').append('Price:' + '<span>'+ name_option + data.ask + '</span>');	
		$('.changes-block').find('.hour').append('Hour change' + '<span>' + data.changes.price.hour + name_option +'</span>');
		$('.changes-block').find('.day').append('Day change' + '<span>' + data.changes.price.day + name_option +'</span>');
		$('.changes-block').find('.week').append('Week change' + '<span>' + data.changes.price.week + name_option +'</span>');
		$('.changes-block').find('.month').append('Month change' + '<span>' + data.changes.price.month + name_option +'</span>');
		$('.percentChange').on('change', function(e){
			e.preventDefault();
			let specific_block = $(this).parent('.checkbox').next();

			if( $(this).is(":checked")) {
				$(specific_block).find('p').empty();

				$(specific_block).find('.hour').append('Hour change' + '<span>' + data.changes.percent.hour + '%' +'</span>');
				$(specific_block).find('.day').append('Day change' + '<span>' + data.changes.percent.day + '%' +'</span>');
				$(specific_block).find('.week').append('Week change' + '<span>' + data.changes.percent.week + '%' +'</span>');
				$(specific_block).find('.month').append('Month change' + '<span>' + data.changes.percent.month + '%' +'</span>');
			}
			else {
				$(specific_block).find('p').empty();

				$(specific_block).find('.hour').append('Hour change' + '<span>' + data.changes.price.hour + name_option +'</span>');
				$(specific_block).find('.day').append('Day change' + '<span>' + data.changes.price.day + name_option +'</span>');
				$(specific_block).find('.week').append('Week change' + '<span>' + data.changes.price.week + name_option +'</span>');
				$(specific_block).find('.month').append('Month change' + '<span>' + data.changes.price.month + name_option +'</span>');
			}
		});
	});

$(function(){

	$('#selectCurrency').on('change', function (){
		let option = $(this).find('option:selected');

		value_option = option.val();
		name_option = option.attr('name');
		correct_link = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + value_option;
		console.log(name_option)
		$.getJSON(correct_link, function(data){
	        $('.currencyDetails h5, .currencyDetails p').empty();	
			$('.currencyDetails').html();

			$('.currencyDetails').find('h5').append('Price:' + '<span>' + name_option + data.ask + '</span>');	
			$('.changes-block').find('.hour').append('Hour change' + '<span>' + data.changes.price.hour + name_option +'</span>');
			$('.changes-block').find('.day').append('Day change' + '<span>' + data.changes.price.day + name_option +'</span>');
			$('.changes-block').find('.week').append('Week change' + '<span>' + data.changes.price.week + name_option +'</span>');
			$('.changes-block').find('.month').append('Month change' + '<span>' + data.changes.price.month + name_option +'</span>');
			$('.percentChange').on('change', function(e){
				e.preventDefault();
				let specific_block = $(this).parent('.checkbox').next();
				console.log(specific_block)
				if( $(this).is(":checked")) {
					$(specific_block).find('p').empty();

					$(specific_block).find('.hour').append('Hour change' + '<span>' + data.changes.percent.hour + '%' +'</span>');
					$(specific_block).find('.day').append('Day change' + '<span>' + data.changes.percent.day + '%' +'</span>');
					$(specific_block).find('.week').append('Week change' + '<span>' + data.changes.percent.week + '%' +'</span>');
					$(specific_block).find('.month').append('Month change' + '<span>' + data.changes.percent.month + '%' +'</span>');
				}
				else {
					$(specific_block).find('p').empty();

					$(specific_block).find('.hour').append('Hour change' + '<span>' + data.changes.price.hour + name_option +'</span>');
					$(specific_block).find('.day').append('Day change' + '<span>' + data.changes.price.day + name_option +'</span>');
					$(specific_block).find('.week').append('Week change' + '<span>' + data.changes.price.week + name_option +'</span>');
					$(specific_block).find('.month').append('Month change' + '<span>' + data.changes.price.month + name_option +'</span>');
				}
			});
		});
	});

	$('#selectCurrency').styler({
	});

});