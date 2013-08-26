/* 
 * Programming in Prolog, Computer Laboratory, University of Cambridge
 * 
 * Copyright 2012 Alastair R. Beresford and Andrew Rice
 * 
 * Licensed under Creative Commons Attribution-ShareAlike 2.0 
 * UK: England & Wales License
 *
 * Full text of the license here:
 * http://creativecommons.org/licenses/by-sa/2.0/uk/
 *
 */
var data = {
		"part1-prologbasics" : {
			"indexes": {
				"slide": [0, 6, 31, 52, 135, 167, 193, 410, 438, 515, 627, 698, 848], 
				"question": [700]
			},
			"questions": {
				"house" : {
					"time" : 712,
					"question": "Which of these terms unify?",
					"answertype": "choice",
					"answer": [{"text": "a with a", "correct": true, "left": 120, "top": 120},
					           {"text": "a with b", "correct": false, "left": 120, "top": 153},
					           {"text": "a with A", "correct": true, "left": 120, "top": 186},
					           {"text": "a with B", "correct": true, "left": 120, "top": 219},
					           {"text": "tree(l,r) with A", "correct": true, "left": 120, "top": 252},
					           {"text": "tree(l,r) with tree(B,C)", "correct": true, "left": 120, "top": 285},
					           {"text": "tree(A,r) with tree(l,C)", "correct": true, "left": 120, "top": 318},
					           {"text": "tree(A,r) with tree(A,B)", "correct": true, "left": 120, "top": 351},
					           {"text": "A with a(A)", "correct": true, "left": 120, "top": 384},
					           {"text": "a with a(A)", "correct": false, "left": 120, "top": 417}],
					           "buttonCheck": {"left": 450, "top": 150},
					           "buttonRetry": {"left": 450, "top": 150},
					           "buttonContinue": {"left": 450, "top": 180},
					           "toastCorrect": {"left": 450, "top": 120},
					           "toastIncorrect": {"left": 450, "top": 120}
				}
			}
		},
		"part2-zebra": {
			"indexes": {
				"slide": [0, 7, 66, 101, 144, 176, 185, 205, 384, 474, 520, 546, 573, 632, 660, 676, 694, 736, 802], 
				"question": [144, 176, 185, 384, 632, 660, 676]
			},
			"questions": {
				"house" : {
					"time" : 151,
					"question": "What type of term is <tt>house(Nationality, Pet, Smokes,  Drinks, Colour)</tt>?",
					"answertype": "choice",
					"answer": [{"text": "number", "correct": false, "left": 0, "top": 255},
					           {"text": "atom", "correct": false, "left": 0, "top": 285},
					           {"text": "compound", "correct": true, "left": 0, "top": 315},
					           {"text": "variable", "correct": false, "left": 0, "top": 345}],
					           "buttonCheck": {"left": 250, "top": 350},
					           "buttonRetry": {"left": 250, "top": 350},
					           "buttonContinue": {"left": 250, "top": 380},
					           "toastCorrect": {"left": 250, "top": 320},
					           "toastIncorrect": {"left": 250, "top": 320}
				},
				"nationality" : {
					"time" : 180,
					"question": "What type of term is <tt>Nationality</tt>?",
					"answertype": "choice",
					"answer": [{"text": "number", "correct": false, "left": 0, "top": 255},
					           {"text": "atom", "correct": false, "left": 0, "top": 285},
					           {"text": "compound", "correct": false, "left": 0, "top": 315},
					           {"text": "variable", "correct": true, "left": 0, "top": 345}],
					           "buttonCheck": {"left": 250, "top": 350},
					           "buttonRetry": {"left": 250, "top": 350},
					           "buttonContinue": {"left": 250, "top": 380},
					           "toastCorrect": {"left": 250, "top": 320},
					           "toastIncorrect": {"left": 250, "top": 320}
				},
				"blankterm" : {
					"time" : 192,
					"question": "What sort of a term is <tt>(H1, H2, H3, H4, H5)</tt>?",
					"answertype": "choice",
					"answer": [{"text": "number", "correct": false, "left": 0, "top": 255},
					           {"text": "atom", "correct": false, "left": 0, "top": 285},
					           {"text": "compound", "correct": true, "left": 0, "top": 315},
					           {"text": "variable", "correct": false, "left": 0, "top": 345}],
					           "buttonCheck": {"left": 250, "top": 350},
					           "buttonRetry": {"left": 250, "top": 350},
					           "buttonContinue": {"left": 250, "top": 380},
					           "toastCorrect": {"left": 250, "top": 320},
					           "toastIncorrect": {"left": 250, "top": 320}
				},
				"queries" : {
					"time" : 393,
					"question": "Which queries return <tt>true</tt>?",
					"answertype": "choice",
					"answer": [{"text": "exists(dog,(fly,spider,bird,cat,dog)).", "correct": true, "left": 0, "top": 145},
					           {"text": "exists(dog,(fly,spider,bird,cat)).", "correct": false, "left": 0, "top": 175},
					           {"text": "exists(dog).", "correct": false, "left": 0, "top": 205},
					           {"text": "exists(house(english,red),(house(spanish,green), house(french,orange), house(dutch,yellow), house(german,blue), house(english,_)).", "correct": true, "left": 0, "top": 235}],
					           "buttonCheck": {"left": 450, "top": 350},
					           "buttonRetry": {"left": 450, "top": 350},
					           "buttonContinue": {"left": 450, "top": 380},
					           "toastCorrect": {"left": 450, "top": 320},
					           "toastIncorrect": {"left": 450, "top": 320}
				},
				"ukranian" : {
					"time" : 640,
					"question": "The clue 'the Ukrainian drinks tea' is at line <input type='text'></input>",
					"answertype": "text",
					"answer": [{"correct":  "4", "left": 450, "top": 410}],
					"buttonCheck": {"left": 470, "top": 380},
					"buttonRetry": {"left": 470, "top": 380},
					"buttonContinue": {"left": 470, "top": 350},
					"toastCorrect": {"left": 470, "top": 320},
					"toastIncorrect": {"left": 470, "top": 320}
				},
				"spaniard" : {
					"time" : 665,
					"question": "The clue 'the Spaniard owns the dog' is at line <input type='text'></input>",
					"answertype": "text",
					"answer": [{"correct":  "2", "left": 450, "top": 410}],
					"buttonCheck": {"left": 470, "top": 380},
					"buttonRetry": {"left": 470, "top": 380},
					"buttonContinue": {"left": 470, "top": 350},
					"toastCorrect": {"left": 470, "top": 320},
					"toastIncorrect": {"left": 470, "top": 320}
				},
				"milk" : {
					"time" : 681,
					"question": "The clue 'Milk is drunk in the middle house' is at line <input type='text'></input>",
					"answertype": "text",
					"answer": [{"correct":  "8", "left": 450, "top": 410}],
					"buttonCheck": {"left": 470, "top": 380},
					"buttonRetry": {"left": 470, "top": 380},
					"buttonContinue": {"left": 470, "top": 350},
					"toastCorrect": {"left": 470, "top": 320},
					"toastIncorrect": {"left": 470, "top": 320}
				}
			}
		},
		"part3-rules" : {
			"indexes" : {
				"slide" : [0, 11, 43, 64, 99, 126, 165, 275, 338, 373] ,
				"question" : [165]
			},
			"questions" : {
				"valuable" : {
					"time" : 212,
					"question": "Which of these are valuable?",
					"answertype": "choice",
					"answer": [{"text": "gold", "correct": true, "left": 0, "top": 320},
					           {"text": "bauxite", "correct": true, "left": 0, "top": 350},
					           {"text": "bronze", "correct": false, "left": 0, "top": 380},
					           {"text": "copper", "correct": false, "left": 0, "top": 410}],
					           "buttonCheck": {"left": 250, "top": 350},
					           "buttonRetry": {"left": 250, "top": 350},
					           "buttonContinue": {"left": 250, "top": 380},
					           "toastCorrect": {"left": 250, "top": 320},
					           "toastIncorrect": {"left": 250, "top": 320}
				}
			} 
		},
		"part4-lists" : {
			"indexes" : {
				"slide" : [0, 9, 34, 60, 110, 166, 431, 579, 634],
				"question" : [579]
			},
			"questions" : {
				"last" : {
					"time" : 598,
					"question": "What happens if I ask: last([],X)?",
					"answertype": "choice",
					"answer": [{"text": "pattern-match exception", "correct": false, "left": 0, "top": 225},
					           {"text": "Prolog says no", "correct": true, "left": 0, "top": 262},
					           {"text": "Prolog says yes, X = []", "correct": false, "left": 0, "top": 299},
					           {"text": "Prolog says yes, X = ???", "correct": false, "left": 0, "top": 336}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				}
			}
		},
		"part5-arithmetic" : {
			"indexes" : {
				"slide" : [0, 4, 20, 46, 86, 94, 129, 157, 187, 210, 562, 621, 949, 989, 1142] ,
				"question" : [157]
			},
			"questions" : {
				"arithmetic" : {
					"time" : 168,
					"question": "What is the result of the query A is +(*(3,2),4)",
					"answertype": "choice",
					"answer": [{"text": "Error - Not an arithmetic expression", "correct": false, "left": 0, "top": 255},
					           {"text": "10", "correct": true, "left": 0, "top": 285},
					           {"text": "18", "correct": false, "left": 0, "top": 315},
					           {"text": "20", "correct": false, "left": 0, "top": 345}],
					           "buttonCheck": {"left": 250, "top": 350},
					           "buttonRetry": {"left": 250, "top": 350},
					           "buttonContinue": {"left": 250, "top": 380},
					           "toastCorrect": {"left": 250, "top": 320},
					           "toastIncorrect": {"left": 250, "top": 320}
				}
			}
		},
		"part6-backtracking" : {
			"indexes" : {
				"slide" : [0, 8, 40, 73, 117, 189, 334, 619, 860, 889, 935, 1250, 1277, 1707] ,
				"question" : [889, 1250]
			},
			"questions" : {
				"backwards" : {
					"time" : 917,
					"question": "What is the result of the query len(A,2)?",
					"answertype": "choice",
					"answer": [{"text": "Error due to uninstantiated arithmetic", "correct": false, "left": 0, "top": 240},
					           {"text": "A = [_,_]", "correct": true, "left": 0, "top": 270},
					           {"text": "Query runs forever", "correct": false, "left": 0, "top": 300},
					           {"text": "Error due to invalid arguments", "correct": false, "left": 0, "top": 330}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
				"backwards2" : {
					"time" : 1261,
					"question": "What happens if we ask len(A,2). for a second answer (press ';') ?",
					"answertype": "choice",
					"answer": [{"text": "Error due to uninstantiated arithmetic", "correct": false, "left": 0, "top": 255},
					           {"text": "A = [_,_]", "correct": false, "left": 0, "top": 285},
					           {"text": "Query runs forever", "correct": true, "left": 0, "top": 315},
					           {"text": "Error due to invalid arguments", "correct": false, "left": 0, "top": 345}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				}
			}
		},
"part7-generateandtest" : {
 "indexes" : {
  "slide" : [0, 14, 31, 58, 137, 291, 340, 369, 435, 569, 595, 629, 679, 747, 808] ,
  "question" : [435, 595]
 },
 "questions" : {
				"checkRed" : {
					"time" : 449,
					"question": "Which is the correct 'checkRed'?",
					"answertype": "choice",
					"answer": [{"text": "1", "correct": false, "left": 0, "top": 130},
					           {"text": "2", "correct": false, "left": 0, "top": 218},
					           {"text": "3", "correct": false, "left": 0, "top": 308},
					           {"text": "4", "correct": true, "left": 0, "top": 394}],
					           "buttonCheck": {"left": 450, "top": 350},
					           "buttonRetry": {"left": 450, "top": 350},
					           "buttonContinue": {"left": 450, "top": 380},
					           "toastCorrect": {"left": 450, "top": 320},
					           "toastIncorrect": {"left": 450, "top": 320}
				},
				"generate" : {
					"time" : 611,
					"question": "Which part of the flag solution is 'Generate'?",
					"answertype": "choice",
					"answer": [{"text": "1", "correct": false, "left": 0, "top": 245},
					           {"text": "2", "correct": true, "left": 0, "top": 275},
					           {"text": "3", "correct": false, "left": 0, "top": 305},
					           {"text": "4", "correct": false, "left": 0, "top": 335}],
					           "buttonCheck": {"left": 445, "top": 350},
					           "buttonRetry": {"left": 445, "top": 350},
					           "buttonContinue": {"left": 445, "top": 380},
					           "toastCorrect": {"left": 445, "top": 320},
					           "toastIncorrect": {"left": 445, "top": 320}
				}
 }
},
"part8-symbolic" : {
 "indexes" : {
  "slide" : [0, 6, 43, 74, 191, 244, 654, 868, 1022] ,
  "question" : [191]
 },
 "questions" : {
				"symbolic" : {
					"time" : 221,
					"question": "How many times is eval(A,A) satisfied in the evaluation of eval(plus(1,mult(4,5)),X)?",
					"answertype": "choice",
					"answer": [{"text": "3 times", "correct": true, "left": 0, "top": 260},
					           {"text": "0 times", "correct": false, "left": 0, "top": 290},
					           {"text": "1 time", "correct": false, "left": 0, "top": 320},
					           {"text": "4 times", "correct": false, "left": 0, "top": 350}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
 } 
},
"part9-cut" : {
 "indexes" : {
  "slide" : [0, 5, 41, 53, 105, 458, 621, 788, 892, 950, 1027] ,
  "question" : [621, 892, 950]
 },
 "questions" : {
				"split" : {
					"time" : 636,
					"question": "What does split/3 do?",
					"answertype": "choice",
					"answer": [{"text": "I have thought about this work", "correct": true, "left": 300, "top": 360}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
				"logicalmeaning" : {
					"time" : 915,
					"question": "What is the logical meaning of these clauses?",
					"answertype": "choice",
					"answer": [{"text": "1", "correct": true, "left": 0, "top": 245},
					           {"text": "2", "correct": false, "left": 0, "top": 275},
					           {"text": "3", "correct": false, "left": 0, "top": 305},
					           {"text": "4", "correct": false, "left": 0, "top": 335}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
				"logicalmeaning2" : {
					"time" : 961,
					"question": "What is the logical meaning of these clauses?",
					"answertype": "choice",
					"answer": [{"text": "1", "correct": false, "left": 0, "top": 245},
					           {"text": "2", "correct": false, "left": 0, "top": 275},
					           {"text": "3", "correct": true, "left": 0, "top": 305},
					           {"text": "4", "correct": false, "left": 0, "top": 335}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				}
 } 
},
"part10-negation" : {
 "indexes" : {
  "slide" : [0, 7, 23, 45, 119, 276, 317, 417, 446, 471, 502, 532, 582, 629] ,
  "question" : [45, 119, 417, 502]
 },
 "questions" : {
				"negationexample" : {
					"time" : 67,
					"question": "What does 'a:- !, 1=2' do?",
					"answertype": "choice",
					"answer": [{"text": "unifies 1 with 2", "correct": false, "left": 0, "top": 260},
					           {"text": "throws an exception", "correct": false, "left": 0, "top": 290},
					           {"text": "always succeeds", "correct": false, "left": 0, "top": 320},
					           {"text": "always fails", "correct": true, "left": 0, "top": 350}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
				"negationexample2" : {
					"time" : 138,
					"question": "What does this expression do?",
					"answertype": "choice",
					"answer": [{"text": "unifies the two arguments", "correct": false, "left": 0, "top": 275},
					           {"text": "succeeds if the arguments unify", "correct": false, "left": 0, "top": 305},
					           {"text": "succeeds if the arguments don't unify", "correct": true, "left": 0, "top": 335},
					           {"text": "always fails", "correct": false, "left": 0, "top": 365}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
				"cuttype" : {
					"time" : 426,
					"question": "What sort of cut is this?",
					"answertype": "choice",
					"answer": [{"text": "red", "correct": true, "left": 0, "top": 275},
					           {"text": "amber", "correct": false, "left": 0, "top": 305},
					           {"text": "green", "correct": false, "left": 0, "top": 335}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
 
				"bargin" : {
					"time" : 509,
					"question": "What happens if we ask 'bargin(R).'?",
					"answertype": "choice",
					"answer": [{"text": "R=theWrestlers (and then no more results)", "correct": true, "left": 0, "top": 245},
					           {"text": "R=theWrestlers and then loop for ever", "correct": false, "left": 0, "top": 275},
					           {"text": "R=theWrestlers, R=midsummerHouse", "correct": false, "left": 0, "top": 305},
					           {"text": "False", "correct": false, "left": 0, "top": 335}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				}
 } 
},
"part11-databases" : {
 "indexes" : {
  "slide" : [0, 4, 18, 34, 311] ,
  "question" : []
 },
 "questions" : {
 } 
},
"part12-countdown" : {
 "indexes" : {
  "slide" : [0, 5, 17, 32, 102, 122, 203, 288, 428, 538, 896, 897, 941, 1233] ,
  "question" : [203, 897]
 },
 "questions" : {
				"terminate" : {
					"time" : 223,
					"question": "Will this strategy terminate?",
					"answertype": "choice",
					"answer": [{"text": "It will always terminate", "correct": true, "left": 0, "top": 230},
					           {"text": "It will always terminate if there is a correct solution", "correct": false, "left": 0, "top": 260},
					           {"text": "It will not terminate if there are no solutions", "correct": false, "left": 0, "top": 290},
					           {"text": "It will always be quicker than a person", "correct": false, "left": 0, "top": 320}],
					           "buttonCheck": {"left": 425, "top": 350},
					           "buttonRetry": {"left": 425, "top": 350},
					           "buttonContinue": {"left": 425, "top": 380},
					           "toastCorrect": {"left": 425, "top": 320},
					           "toastIncorrect": {"left": 425, "top": 320}
				},
 
				"bargin" : {
					"time" : 909,
					"question": "Which part of the program is 'generate'?",
					"answertype": "choice",
					"answer": [{"text": "1", "correct": false, "left": 0, "top": 200},
					           {"text": "2", "correct": true, "left": 0, "top": 295},
					           {"text": "3", "correct": true, "left": 0, "top": 325},
					           {"text": "4", "correct": true, "left": 0, "top": 355}],
					           "buttonCheck": {"left": 445, "top": 350},
					           "buttonRetry": {"left": 445, "top": 350},
					           "buttonContinue": {"left": 445, "top": 380},
					           "toastCorrect": {"left": 445, "top": 320},
					           "toastIncorrect": {"left": 445, "top": 320}
				}
 } 
},
"part13-graphsearch" : {
 "indexes" : {
  "slide" : [0, 5, 17, 42, 107, 120, 179, 192, 323, 420, 430, 493, 556, 697, 774, 870, 931, 979] ,
  "question" : [430]
 },
 "questions" : {
				"cycle" : {
					"time" : 444,
					"question": "Which of these places would create a cycle?",
					"answertype": "choice",
					"answer": [{"text": "highest node", "correct": false, "left": 245, "top": 200},
					           {"text": "central node", "correct": false, "left": 338, "top": 284},
					           {"text": "lowest node", "correct": false, "left": 283, "top": 327},
					           {"text": "node furthest to the right", "correct": true, "left": 402, "top": 304}],
					           "buttonCheck": {"left": 445, "top": 350},
					           "buttonRetry": {"left": 445, "top": 350},
					           "buttonContinue": {"left": 445, "top": 380},
					           "toastCorrect": {"left": 445, "top": 320},
					           "toastIncorrect": {"left": 445, "top": 320}
				}
 } 
},
"part14-difference" : {
 "indexes" : {
  "slide" : [0, 6, 52, 88, 124, 165, 210, 265, 353, 391, 404, 417, 424, 433, 442, 479, 509, 534, 588, 632, 669, 753] ,
  "question" : [165, 632]
 },
 "questions" : {
				"prolog2ml" : {
					"time" : 176,
					"question": "What's the Prolog syntax for 1::(2::(3::A))?",
					"answertype": "choice",
					"answer": [{"text": "[1,2,3,A]", "correct": false, "left": 0, "top": 260},
					           {"text": "::(1,::(2,::(3,A)))", "correct": false, "left": 0, "top": 290},
					           {"text": "[1,2,3|A]", "correct": true, "left": 0, "top": 320},
					           {"text": "There is no way to express this", "correct": false, "left": 0, "top": 350}],
					           "buttonCheck": {"left": 445, "top": 350},
					           "buttonRetry": {"left": 445, "top": 350},
					           "buttonContinue": {"left": 445, "top": 380},
					           "toastCorrect": {"left": 445, "top": 320},
					           "toastIncorrect": {"left": 445, "top": 320}
				}, 
				"emptydiff" : {
					"time" : 654,
					"question": "What's the best way to write an empty difference list?",
					"answertype": "choice",
					"answer": [{"text": "[]", "correct": false, "left": 0, "top": 230},
					           {"text": "[]-[]", "correct": false, "left": 0, "top": 260},
					           {"text": "A-A", "correct": true, "left": 0, "top": 290},
					           {"text": "[A]", "correct": false, "left": 0, "top": 320}],
					           "buttonCheck": {"left": 445, "top": 350},
					           "buttonRetry": {"left": 445, "top": 350},
					           "buttonContinue": {"left": 445, "top": 380},
					           "toastCorrect": {"left": 445, "top": 320},
					           "toastIncorrect": {"left": 445, "top": 320}
				}
 } 
},
"part15-differenceexample" : {
 "indexes" : {
  "slide" : [0, 4, 26, 34, 75, 111, 248, 358, 392, 428] ,
  "question" : []
 },
 "questions" : {
 } 
},
"part16-sudoku" : {
 "indexes" : {
  "slide" : [0, 6, 29, 45, 140, 435, 461, 529, 633, 654, 682, 689] ,
  "question" : [435]
 },
 "questions" : {
				"sudokusolution" : {
					"time" : 442,
					"question": "What strategy did we adopt to build our solution?",
					"answertype": "choice",
					"answer": [{"text": "generate and test", "correct": true, "left": 0, "top": 245},
					           {"text": "graph search", "correct": false, "left": 0, "top": 275},
					           {"text": "ad-hoc program", "correct": false, "left": 0, "top": 305}],
					           "buttonCheck": {"left": 445, "top": 350},
					           "buttonRetry": {"left": 445, "top": 350},
					           "buttonContinue": {"left": 445, "top": 380},
					           "toastCorrect": {"left": 445, "top": 320},
					           "toastIncorrect": {"left": 445, "top": 320}
				}
 } 
},
"part17-constraints" : {
 "indexes" : {
  "slide" : [0, 6, 19, 44, 70, 110, 131, 198, 238, 254, 296, 303, 345, 351, 362, 416, 487, 528, 566, 657, 672, 690, 734, 800, 834, 1106] ,
  "question" : []
 },
 "questions" : {
 } 
}
};
