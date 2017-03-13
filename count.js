/*
 * This Function stores the User into a localStorage variable
 * if an existing user is presen, the function reload the page
 * and ask for a new user to be inserted
 */
$(function person() {

	var person = prompt("Please enter your name", "Jorge Loboa");
	if (person != null) {
		document.getElementById("user").innerHTML = "HI " + person
				+ " Please Vote for your candidate";
	}
	var user = localStorage.getItem('person');
	if (person == localStorage.getItem('person')) {
		location.reload();
	}

});

/*
 * This function stores the number of votes casted by the user.
 * After votes are stored, they are retrieve from localStorage
 */
$(function() {
	var countCan1 = localStorage.getItem('countCan1');
	var countCan2 = localStorage.getItem('countCan2');
	var countCan3 = localStorage.getItem('countCan3');
	var countCan4 = localStorage.getItem('countCan4');
	var countCan5 = localStorage.getItem('countCan5');
	countCan1 = countCan1 ? parseInt(countCan1) : 0;
	countCan2 = countCan2 ? parseInt(countCan2) : 0;
	countCan3 = countCan3 ? parseInt(countCan3) : 0;
	countCan4 = countCan4 ? parseInt(countCan4) : 0;
	countCan5 = countCan5 ? parseInt(countCan5) : 0;
	var $displayCount1 = $('#displayCount1');
	var $displayCount2 = $('#displayCount2');
	var $displayCount3 = $('#displayCount3');
	var $displayCount4 = $('#displayCount4');
	var $displayCount5 = $('#displayCount5');
	$displayCount1.text(countCan1);
	$displayCount2.text(countCan2);
	$displayCount3.text(countCan3);
	$displayCount4.text(countCan4);
	$displayCount5.text(countCan5);

	/*
	 * This function set a limitation of 3 to the number of votes 
	 * enable per user and store the clicking events into variables
	 * stored in localStorage
	 * */
	$(function() {
		var vote = 3, $btncount = $('.countClicks'); //Access class that control buttons for voting
		$btncount.val($btncount.val() + ' (' + vote + ')')

		$btncount.click(function() {
			$btncount.val($btncount.val().replace(vote, vote - 1));
			vote--;
			if (vote == 0) {
				alert("You have voted 3 times, Thanks");
				location.reload();
				person();
			}
		})
	})

	$('#btnCan1').click(function() {
		$displayCount1.text(++countCan1);
		localStorage.setItem('countCan1', countCan1);
	});
	$('#btnCan2').click(function() {
		$displayCount2.text(++countCan2);
		localStorage.setItem('countCan2', countCan2);
	});
	$('#btnCan3').click(function() {
		$displayCount3.text(++countCan3);
		localStorage.setItem('countCan3', countCan3);
	});
	$('#btnCan4').click(function() {
		$displayCount4.text(++countCan4);
		localStorage.setItem('countCan4', countCan4);
	});
	$('#btnCan5').click(function() {
		$displayCount5.text(++countCan5);
		localStorage.setItem('countCan5', countCan5);
	});

});

// function to control the display of results stored locally in localstorage
$(function() {
	var $displayResults = $('#displayResults');
	$('#btnResults').click(function() {
		$('#resultrow').show()
	});

});
