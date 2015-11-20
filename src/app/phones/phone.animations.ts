module app.phones {
	'use strict';
	
	export function PhoneAnimation() {
		var animateUp : (element: JQuery, className: string, done: Function) => void = (element, className, done) => {
			if(className != 'active') {
				return;
			}
			
			element.css({
				position: 'absolute',
				top: 500,
				left: 0,
				display: 'block'
			});
			
			jQuery(element).animate({
				top: 0
			}, done);

			return (cancel) => {
				if(cancel) {
					element.stop();
				}
			};
		}
		
		var animateDown: (element: JQuery, className: string, done: Function) => void = (element, className, done) => {
			if(className != 'active') {
				return;
			}

			element.css({
				position: 'absolute',
				left: 0,
				top: 0
			});

			jQuery(element).animate({
				top: -500
			}, done);

			return (cancel) => {
				if(cancel) {
					element.stop();
				}
			};
		}

		return {
			addClass: animateUp,
			removeClass: animateDown
		};	
	}
}