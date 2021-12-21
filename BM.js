let fs = require('fs');
let arg = process.argv;

str = fs.readFileSync('text.txt');
str = str.toString();
substr = fs.readFileSync('substring.txt');
substr = substr.toString();

answer = new Array();

for (i = 0; i < substr.length; i++){
	suff = substr.slice(substr.length - i, substr.length);
	bad_symbol = substr[substr.length - i - 1];
	flag = true;
	k = i;
	for (j = 1; j < substr.length - suff.length; j++){
		if ((substr.slice(j, j + suff.length) == suff) && (substr[j - 1] != bad_symbol)) {
			k = j;
			flag = false;
		}
	}
	if (flag) {
		len_suffix = 0;
		for (j = 0; j <= suff.length; j++){
			suff2 = suff.slice(suff.length - j, suff.length);
			if (substr.slice(0, suff2.length) == suff2){
				len_suffix = suff2.length;
			}
		}
		k = 0 - (suff.length - len_suffix);
	}
	k += 1;
	shift = substr.length - k - suff.length + 1;
	answer[i] = shift;
}

len_suffix = 0;
for (i = 1; i < substr.length; i++){
	suff = substr.slice(substr.length - i, substr.length);
	if (suff == substr.slice(0, suff.length)){
		len_suffix = suff.length;
	}
}

answer[substr.length] = substr.length - len_suffix;

i = 0
while (i < str.length - substr.length + 1) {
	right = i + substr.length - 1;
	count = 0;
	ip = substr.length - 1;
	for (j = right; j > right - substr.length; j--){
		if (str[j] != substr[ip]){
			break;
		} else {
			count++;
		}
		ip -= 1;
	}
	if (count == substr.length) {
		console.log(right - substr.length + 2);
	}
	i += answer[count];
}