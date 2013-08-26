/*
 * ajax.js is a Javascript library supporting the asynchronous requests to the lecture server
 *
 * Copyright 2012 Alastair R. Beresford
 *
 * ajax.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ajax.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero Public License for more details.
 */

var activityUpdate = function(url, idActivity, value) {
	$.post(url, {'id': idActivity, 'type': 'activity', 'value': value});
};

var eventUpdate = function(url, idEventType, value) {
	$.post(url, {'id': idEventType, 'type': 'event', 'value': value});
};