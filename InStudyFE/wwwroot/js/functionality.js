$('.navbar-toggler').on("click", function (e) {
	if($('.navbar-toggler').hasClass('collapsed')){
		$('.pageloaded').addClass('overflow-hidden')
		$('.header-shadow').show()
	}
	else {
		$('.pageloaded').removeClass('overflow-hidden')
		$('.header-shadow').hide()
	}

});

$('.header-shadow').on('click',function (){
	if(!$('.navbar-toggler').hasClass('collapsed')){
		$('.navbar-toggler').click();
	}
	if($('#search-icon').hasClass('close')){
		searchBtnOpen($('.btnSearchOpen'))
	}

})

$('.menu-items .nav-item').hover(function (){
		$('.header-shadow').show()
	}, function(){
		$('.header-shadow').hide()
	}
)
$('.navigation li').on("click", function (e) {
	$("#navigation .active").removeClass("active");
	$(this).addClass("active");
});



// $('.file-upload').file_upload();


function  searchBtnOpen(item){
	if($(item).parent().find('.search').hasClass('search')){
		$('.pageloaded').addClass('overflow-hidden')
		$(item).parent().find('.search').attr('src','/css/images/icons/icon-btn-close.svg')
		$(item).parent().find('.search').removeClass('search').addClass('close');
		$('.search-input-div').removeClass('hide').addClass('show');
		$('.header-shadow').show()
	}
	else{
		$('.pageloaded').removeClass('overflow-hidden')
		$(item).parent().find('.close').attr('src','/css/images/icons/icon-search-darkblue.svg')
		$(item).parent().find('.close').removeClass('close').addClass('search');
		$('.search-input-div').removeClass('show').addClass('hide');
		$('.header-shadow').hide()

	}
}
function openCity(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

function dropdownFunction(item) {
	console.log('list', $(item).parent().find('.dropdown-menu-list'))

	if ($(item).parent().find('.dropdown-menu-list').hasClass('active')) {
		$(item).parent().find('.dropdown-menu-list').removeClass("active");
	} else {
		$(item).parent().find('.dropdown-menu-list').addClass("active");
	}
}

function openMobileMenu(item){
	if( $(item).hasClass('opened') ){
		$(item).removeClass('opened')
		$(item).addClass('closed')
		$('.pageloaded').removeClass('overflow-hidden')


		$('#mobile-item-content').removeClass('open')
	}else {
		$(item).addClass('opened')
		$(item).removeClass('closed')
		$('.pageloaded').addClass('overflow-hidden')


		$('#mobile-item-content').addClass('open')
	}
}
function openMobileMenuDetail(item,section){
	var title =	$(item).attr('title')
	$('.dropdown-context-title').html(title)

	if(section == 'language'){
		$('.language').show()
		$('.academic').hide()
		$('.countries').hide()
	}else if(section == 'academic'){
		$('.language').hide()
		$('.academic').show()
		$('.countries').hide()
	}
	else {
		$('.language').hide()
		$('.academic').hide()
		$('.countries').show()

	}

	$('.dropdown-context-content').show()
	$('.pageloaded').addClass('overflow-hidden')
}

function closeMobileMenuDetail(){
	$('.dropdown-context-content').hide()
	$('.pageloaded').removeClass('overflow-hidden')
}
function openCollaborations(item,section){
	$('.toggle-btn').removeClass('active')
	$(item).addClass('active')

	$('.collaborations-slide').removeClass('active')
	$('.collaborations-slide').filter('.'+ section).addClass('active')

	$('.owl-carousel-collaborations').find('.item').each(function(i,item){
		if(!$(item).children().hasClass('active')){
			$(item).addClass('hidden')
		}else{
			$(item).removeClass('hidden')
		}
	})
}

$(document).ready(function (){

	$('.owl-carousel-collaborations').find('.item').each(function(i,item){
		if(!$(item).children().hasClass('active')){
			$(item).addClass('hidden')
		}else{
			$(item).removeClass('hidden')
		}
	})

});

$("#news-slider div.card-icon-text").click(function(e) {
	e.stopPropagation()
	const tabs = document.querySelector('.post-tabs-content').querySelectorAll('.tab-pane')
	const selectDataTarget = e.target.closest("[data-bs-target]").dataset.bsTarget
	const post = document.querySelector(selectDataTarget)
	tabs.forEach(tab => {
		tab.classList.remove('active')
	})
	post.classList.add('active')
});

$('#postTabs a').on('click', function (event) {
	event.preventDefault();
});

$('#postTabs button').on('click', function (event) {
	$('#postContents .tab-pane').removeClass('active');

	let postTarget = $(this).data('post-target');
	$(postTarget, '#postContents').addClass('active');
});

function showAccordions(item){
	$(item.parentElement).find('.hidden').show()
	$(item).hide()
	$(item.parentElement).find('.show-less-button').show()
}
function lessAccordions(item){
	$(item.parentElement).find('.hidden').hide()
	$(item).hide()
	$(item.parentElement).find('.show-more-button').show()
}
function openApplyForm(){
	$('.pageloaded').addClass('overflow-hidden')
	$('.apply-div-content').show()

}
function closeApplyForm(){
	$('.pageloaded').removeClass('overflow-hidden')
	$('.apply-div-content').hide()
}
