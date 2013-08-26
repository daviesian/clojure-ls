/* 
 * quiz.js is a jQuery plugin to display a question block with user response.
 *
 * Copyright 2012 Alastair R. Beresford
 *
 * quiz.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * quiz.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero Public License for more details.
 */
(function($){

	//populated by init()
	var config = null; //configuration options supplied by caller
	var element = null; //element on which this plugin was executed
	var masterDiv = null; //div used to attach and render question elements 

	var methods = {

			//initialise the plugin using options supplied by caller (or use defaults)
			init: function(options) { 
				config = $.extend({
					//Data items required by the plugin
					'question': null, //required: JSON object with question data
					'questionDiv': '#quiz', //required: id of div for question elements
					//Options
					'callWhenCorrect': null, //fun called if non-null and answer correct
					'absolutePosition': true, //true or false
					//Text used in HTML elements created by this plugin
					'buttonCheck': 'Check my answer',
					'buttonRetry': 'Check again',
					'buttonContinue': 'Skip question',
					'toastIncorrect': 'Wrong! Try again?',
					'toastCorrect': 'Correct!'
				}, options);

				if (!config.question) {
					$.error('No questions specified.');
				}

				if ($(config.uniquePrefix).length) {
					$.error(config.uniquePrefix + ' does not exist in the DOM.'); 
				}

				masterDiv = $(config.questionDiv); 
				element = this;     
				methods['init2Question'](config.question);
			},

			//Position 'e' at offset 'left' and 'top' within 'element'
			position: function(e, left, top, zIndex, pOffset) {
				if (config.absolutePosition) {
					zIndex = typeof zIndex !== 'undefined' ? zIndex : 2000;
					pOffset = typeof pOffset !== 'undefined' ? pOffset : false;

					var parentLeft = pOffset ? element.offset().left : 0;
					var parentTop = pOffset ? element.offset().top : 0;
					e.css('position','absolute').css('left', parentLeft + left).css('top', parentTop + top).css('z-index', zIndex);
				}
			},

			//Transition from init state to question state using specific question 'q'
			//Inserting appropriate list items and button inside question div
			init2Question: function(q) {

				methods['remove']();
				masterDiv.css('display', 'block');

				var question;
				if(!config.absolutePosition) {
					question = $('<p>' + q.question + '</p>');
					question.addClass('quizQuestion');
					masterDiv.append(question);
				}

				if (q.answertype == 'choice') {
					var list = $('<ul/>');
					for(var index in q.answer) {
						var checkbox = $('<input type="checkbox"></input>');
						checkbox.data('isCorrect', q.answer[index].correct);
						checkbox.data('answertype', q.answertype);
						var span = $('<span/>');
						span.addClass('quizCheckbox');
						span.append(checkbox);
						var option = $('<li/>');
						if (!config.absolutePosition) {
							option.html(q.answer[index].text);
						}
						option.prepend(span);
						methods['position'](option, q.answer[index].left, 
								q.answer[index].top);
						list.append(option);
					}
					masterDiv.append(list);
				} else if (q.answertype == 'text') {
					if(config.absolutePosition) {
						for(var index in q.answer) {
							var textbox = $('<input class="quizTextbox" type="text"></input>');
							textbox.data('answer', q.answer[index].correct);
							textbox.data('answertype', q.answertype);
							var span = $('<span/>');
							span.addClass('quizCheckbox');
							span.append(textbox);
							methods['position'](span, q.answer[index].left, 
									q.answer[index].top);
							masterDiv.append(span);
						}
					} else { //inject answers into existing question input boxes in JSON
						question.find('input').each(function(index) {
							$(this).data('answer', q.answer[index].correct);
							$(this).data('answertype', q.answertype);
							$(this).addClass('quizTextbox');
						});
					}
				} else {
					methods['remove']();
					$.error('Unknown question type: ' + q.answertype);
				}

				var p = q.buttonCheck;
				var button = methods['addButton'](config.buttonCheck, p.left, p.top, 
						function() {methods['question2Answer']();});

				masterDiv.append(button);

				//Place a transparent div over 'element' to avoid click throughs
				if (config.absolutePosition) {
					methods['position'](masterDiv, 0, 0, 1000, true);
					masterDiv.width(element.width());
					masterDiv.height(element.height());
				}
			},

			//Transition from question state to an answer state, including
			//checking the answer and moving to 'correct' or 'incorrect' state
			question2Answer: function() {

				var q = config.question;

				var isCorrect = true;
				var logData = '';
				masterDiv.find('input').each(function(index) {
					var type = $(this).data('answertype');
					var checked = $(this).data('isCorrect');
					var text = $(this).data('answer');
					if (type == 'choice')
						logData = logData + $(this).is(':checked')  + ',';
					if (type == 'text')
						logData = logData + $(this).val()  + ',';
					if ((type == 'choice' && checked != $(this).is(':checked')) ||
							(type == 'text' && text != $(this).val())) {
						isCorrect = false;
					} 
				});

				if (isCorrect) {
					eventUpdate(eventUrl, event.QUIZ_CORRECT, logData);
					var correct = $('<div>' + config.toastCorrect + '</div>');
					correct.addClass('toast');
					methods['position'](correct, q.toastCorrect.left, q.toastCorrect.top);
					masterDiv.append(correct);

					masterDiv.find('*').delay(1000).fadeOut(1500);
					masterDiv.delay(1000).fadeOut(1500, function() { 
						if (config.callWhenCorrect != null) {
							config.callWhenCorrect();
						}
						methods['remove']();    
					});
				} else {					
					eventUpdate(eventUrl, event.QUIZ_INCORRECT, logData);

					masterDiv.find('a').each(function(index){$(this).parent().remove();});

					var incorrect = $('<div>' + config.toastIncorrect + '</div>');
					incorrect.addClass('toast');
					incorrect.css('display','none');
					methods['position'](incorrect, q.toastIncorrect.left, q.toastIncorrect.top);
					masterDiv.append(incorrect);
					incorrect.fadeIn(500).delay(2000).fadeOut(1500);

					var p = q.buttonRetry;
					var b = methods['addButton'](config.buttonRetry, p.left, p.top, 
							function() {methods['question2Answer']()});
					masterDiv.append(b);

					p = q.buttonContinue;
					b = methods['addButton'](config.buttonContinue, p.left, p.top,
							function() {
						eventUpdate(eventUrl, event.QUIZ_CONTINUE, logData);
						masterDiv.find('*').fadeOut(1500);
						masterDiv.fadeOut(1500, function() { 
							if (config.callWhenCorrect != null) {
								config.callWhenCorrect();
							}
							methods['remove']();    
						});
					});
					masterDiv.append(b);        
				}
			},

			//Create a new button by wrapping an <a> inside a <p>.
			//Returns a jQuery object representing the <p> element.
			addButton: function(name, left, top, fun) {

				var button = $('<a href="">' + name + '</a>');
				button.addClass('quizButton');        
				methods['position'](button, left, top);
				button.on('click', function(event) {
					if (event.preventDefault) {
						event.preventDefault();
					} else {
						event.returnValue = false; //<=IE8
					}
					if (fun != null) {
						fun();
					}
				});
				var para = $('<p/>');
				para.addClass('quizButtonSpace');
				para.append(button);
				return para;    
			},

			//Remove all elements from the question div and set it as invisible.
			remove: function() {
				if (masterDiv != null) {
					$(masterDiv).empty();
					masterDiv.removeAttr('style');
					masterDiv.css('display', 'none');
				}
				return this;
			}
	};

	//bind the 'quiz' function name to the jQuery object.
	$.fn.quiz = function(method) {

		//Bind internal method names to plugin so they can be called externally.
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.quiz');
		}  
	};

})(jQuery);