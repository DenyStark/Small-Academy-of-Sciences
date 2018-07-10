function alfabeta(aaa){
var k=0;
do 
	{
	r=aaa/3;
	aaa=r;
	k=k+1;
	}
while (r>=1)
return k;
}

function div(val,by){
		return (val-(val%by))/by;
}

function delenie(element){
if (element%3==0) {
w=1
u=0;
while (element % Math.pow(3,w)==0) 
{
	element=element/3;
	u=u+1;
	}
}
else u=0;
return u;
}

function avtomat() {
mtemp=document.getElementById("first");
ntemp=document.getElementById("last");
m=Number(document.getElementById("first").value);
n=Number(document.getElementById("last").value);
rezult=document.getElementById("rez");
if (isNaN(m)|isNaN(n)|n<=0|m<=0)
{ alert ("Введіть число більше нуля!")}
else if (mtemp.length>8 | ntemp.length>8)
	{alert ("Введіть числа меньше 8 знаків")}
	else if (m<=3 | n<=4) 
			{alert ("Число m має бути більше 3, число n більше 4!")}
		else if (m>=n) 
			alert("Введіть правильне значення m та n!")
			else if (n/m==3) {
				document.getElementById('rez').style.display ="";
				rezult.innerHTML="Помножте <b>"+m+"</b> на <b>3</b> для того, щоб отримати число <b>"+n+"</b>"
				}
				else if (delenie(n/m)>1){
					koloper=delenie(n/m);
					rezult.innerHTML="Кількість операцій: <b>"+koloper+"</b><br>"+n+" = "+m
					for (o=1; o<koloper+1;o++){
					rezult.innerHTML=rezult.innerHTML+" &lowast; 3"
					}
				}
				
			else {
				document.getElementById('rez').style.display ="";
			if ((n % 3)==0) {
					n0=n;
					rezult.innerHTML="1) <b>"+n+"</b> ділиться на 3 націло<br>"
					}
			 else {
					n0=3*n;
					rezult.innerHTML="1) <b>"+n+"</b> ділиться на 3 з залишком<br>"
					}
			alfa=alfabeta(m)-1;
			rezult.innerHTML=rezult.innerHTML+"2)  <b><i>&alpha;</i></b> = "+alfa+"; <img  src='img/alpha.jpg'><br>"; 
			beta=alfabeta(n0)-1;
			rezult.innerHTML=rezult.innerHTML+"3) <b><i>&beta;</i></b> = "+beta+"; <img  src='img/beta.jpg'><br>"; 
			t=beta-alfa;
			rezult.innerHTML=rezult.innerHTML+"4) <b><i>t</i></b>  = "+t+"; <img  src='img/t.jpg'><br>"; 
			tempval=m*Math.pow(3, t);
			nu=0;
			if (tempval>=n0) 
				nu=t;
				else 
					nu=t+1; 
			rezult.innerHTML=rezult.innerHTML+"5) <b><i>&nu;</i></b> = "+nu+";<br><img  src='img/nju.jpg'><br>";
			p=(m*Math.pow(3, nu))-n0;
			rezult.innerHTML=rezult.innerHTML+"6) <b><i>p</i></b> = "+p+";<img  src='img/p.jpg'><br>";
			k=alfabeta(p)-1;
			rezult.innerHTML=rezult.innerHTML+"7) <b><i>k</i></b> = "+k+"<br>";
			rezult.innerHTML=rezult.innerHTML+"8) Розклад числа <i>p</i>: <b>"+p+"</b> = ";
			tempk=0;
			sum=0;
			i=0;
			maskoef=[];
			for (j=0; j<alfabeta(p); j++)
			{
			maskoef[j]=0;
			}
			do {
				tempk=alfabeta(p)-1;
				koef=div(p, Math.pow(3,tempk));
				maskoef[tempk]=koef;
				sum=sum+koef;
				rezult.innerHTML=rezult.innerHTML+koef+"&lowast;3"+"<sup>"+tempk+"</sup>";
				p=p-koef*Math.pow(3,tempk);
				if (p>0) rezult.innerHTML=rezult.innerHTML+" + "
			}
			while (p>0)
			kol=0;
			if (k<=nu+1) {
					kol=nu+sum;
					if ((n % 3)!=0)
					{kol=kol+1}
					else kol=kol;
					rezult.innerHTML=rezult.innerHTML+"<br><img  src='img/rozklad.jpg'><br>9) Кількість операцій: <b>"+kol+"</b>";
					}
					
				else {
					w=delenie(m);
					rezult.innerHTML=rezult.innerHTML+"<br><i>Число "+m+" ділиться націло на 3 у степені "+w+"</i>";
						s1=0;
						s2=0;
						for (i=1; i<nu+2; i++)
							{
							s1=s1+maskoef[i];
							}
						j=k
						while (j>=nu-w && j-nu-(w+1)>=0)
							{
								s2=s2+maskoef[j]*Math.pow(3,j-nu-(w+1));
								j=j-1;
							}
						kol=nu+2*w+s1+s2;
					rezult.innerHTML=rezult.innerHTML+"<br><img  src='img/rozklad.jpg'><br>9) Кількість операцій: <b>"+kol+"</b>";
					}
					if (k<=nu+1){//случай k<=nyi+1
					rezult.innerHTML=rezult.innerHTML+"<br><img  src='img/k_menshe.jpg'><br><img  src='img/kol_k_menshe.jpg'><br>10) Перехід: <br><img src='img/rozklad_k_menshe.jpg'><br>";
					kolskob=k-1;
					if ((n % 3)!=0) {kolskob=kolskob+1}
					for (i=1;i<kolskob+1;i++){
						rezult.innerHTML=rezult.innerHTML+"("
						}
					power=nu+1-k;
					if (power>0) 
						{rezult.innerHTML=rezult.innerHTML+m+"*3<sup>"+power+"</sup>"}
						else {rezult.innerHTML=rezult.innerHTML+m}
					i=k;
					while (i>1){
						rezult.innerHTML=rezult.innerHTML+" &minus; "+"3&lowast;"+maskoef[i]+")&lowast;3"
						i=i-1;
						}
					if (maskoef[1]>0)
						{rezult.innerHTML=rezult.innerHTML+" &minus; 3&lowast;"+maskoef[1]}
					if ((n % 3)!=0){
					rezult.innerHTML=rezult.innerHTML+")/3";
					}
					rezult.innerHTML=rezult.innerHTML+" = "+n;
					}
					else {//k>=nju+2
					rezult.innerHTML=rezult.innerHTML+"<br><img  src='img/k_bolshe.jpg'><br>10) Перехід: <br>";
					rezult.innerHTML=rezult.innerHTML+"(...("+m+"&#47;3<sup>"+w+"</sup>&nbsp;&minus;3&nbsp;(a<sub>"+k+"</sub>&lowast;3<sup>"+k+" &minus; "+nu+" &minus; ("+w+" + 1)</sup> + a<sub>"+k+" &minus; 1</sub>&lowast;3<sup>"+k+" &minus; "+nu+" &minus; ("+w+" + 1) &minus; 1</sup> + ... + a<sub>"+nu+"+("+w+" + 2)</sub>&lowast;3<sup>1</sup> + a<sub>"+nu+" + ("+w+" + 1)</sub>))&lowast;3 &minus; 3a<sub>"+nu+" + " +w+"</sub>)&lowast;3 &minus; ... &minus; 3a<sub>2</sub>)&lowast;3 &minus; 3a<sub>1</sub>";
					rezult.innerHTML=rezult.innerHTML+" = "+n+"<br><img  src='img/rozklad_k_bolshe.jpg'>";
									
					}
					
					rezult.innerHTML=rezult.innerHTML+"<br><font style='font-size:80%;' color='#68838B'>*Під множенням трійки на число слід розуміти, що число вказує на те, скільки разів треба повторити дану операцію.</font>"
					}
					
					if (!picture.checked) {
					for (i=0; i<30; i++){
						document.getElementsByTagName('img')[i].classList.add('vis');
}
					}
				
	}

