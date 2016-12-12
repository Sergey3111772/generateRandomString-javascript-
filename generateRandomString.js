function generateRandomString(nLength)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < nLength; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	return text;    
}