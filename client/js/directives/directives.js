angular.module('myApp')
.directive('tabBehavior', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs){
			elem.on('click', function(){
				elem.siblings().removeClass('active');
				elem.addClass('active');
			});
		}

	};
});


	//_________________________Clicking Comment Plus__________________________

	angular.module('myApp')
	.directive('commentExpand', function(){
		return {
			link: function(scope, elem, attrs){
				elem.on('click', function(){
						// console.log('clicked! ');
						var $comments = elem.parents('ul.stats').siblings('ul.comments');
						$comments.toggleClass('hidden');
						elem.toggleClass('active');

					});

			}
		};

	});


//______________Order By Controls, media_______________

angular.module('myApp')
.directive('orderByControls', function(){
	return {
		link: function(scope, elem, attrs){
			var arrowIcon = '<i class="fa fa-caret-up"></i>';

			var sortFunctions = {
				popularity: function(a,b){return ((b.comments.count*2+b.likes.count)-(a.comments.count*2+a.likes.count));},
				date: function(a,b){return (a.created_time - b.created_time); },
				type: function(a,b){
					if(a.type < b.type) return -1;
					if(a.type > b.type) return 1;
					return 0;
				}
			}

				// when page first loads, will be sorted by popularity
				elem.find('li.active').append(arrowIcon);

				console.log('PARENT SCOPE IS', scope.$parent);
				console.log('something is', scope.$parent.$id);
				// scope.$parent.media = scope.$parent.media.sort(sortFunctions.popularity);


				elem.find('li').on('click', function(e){
					e.preventDefault();
					var $liClicked = $(this);
					var dataType = $liClicked.attr('data-type');
					console.log(dataType);
					var sortFunction = sortFunctions[dataType];
					console.log(sortFunction);
					console.log('clicked');
					console.log(scope);

					if($liClicked.hasClass('active')){
						$liClicked.toggleClass('descending');
						// scope.$parent.media = [];
						scope.$parent.media.reverse();
						// had to use $apply(), to update scope
						scope.$apply();
						console.log(scope.$parent.media);
					}

					else{
						elem.find('li.active').removeClass('active descending')
						// then delete the up arrow font awesome icon
						.find('i').remove();

						$liClicked.addClass('active');
						$liClicked.append(arrowIcon);

						scope.$parent.media = scope.$parent.media.sort(sortFunction);
						scope.$apply();

					}





				})




			}
		}
	})