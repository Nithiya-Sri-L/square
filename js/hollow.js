var a=parseInt(prompt("enter a number"));
string="";
for(let i=0; i<a; i++)
{
	for(let j=0; j<a; j++)
	{
		if(i==0 || j==0 || i==a-1 ||j==a-1)
		{
		string+="*"
		}
        else
		{
		 string+=" "
		}
	}
	string+="\n"
}
console.log(string);