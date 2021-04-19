function log(msg){
	console.log(msg);
}

function sum(arr) {
    var s = 0;
	for(i in arr){
		s += arr[i]
	}
	return s;
}

function pickPoker(data, user){
	select_row = Math.floor(Math.random() * data.length);
	pick_num = Math.ceil(Math.random() * data[select_row]);
	data[select_row] -= pick_num;
	if(data[select_row] == 0){
		data.splice(select_row, 1);
	}
	log(user + ' pick ' + pick_num + ' poker from row ' + (select_row + 1) + ", left pokers " + data);
	if(sum(data) == 0){
		return true;
	}else{
		return false;
	}
}

function FivePokerGame(){
	var gameData = [3, 5, 7];
	var users = ['User One', 'User Two'];
	var operator = Math.round(Math.random());
	log('=======> Game start, '+ users[operator] + ' first!');
	while(true){
		rlt = pickPoker(gameData, users[operator]);
		if(rlt == true){
			log('=======> Game over, ' + users[operator] + ' lose!');
			break;
		}
		operator = (operator + 1) % 2;
	}
	
}

FivePokerGame()
