 var arr=[];
 var setting = {
    data: {
        simpleData: {
            enable: true, //使用简单数据模式
            idKey: "id", //唯一标识
            pIdKey: "fid", //父节点的唯一标识  
            rootPId: 0 //根节点
        },
        key: {
            name: "name" //节点名称
        }
    },
    view: {
        showLine: true, //显示节点之间的连线
        fontCss: { 'color': 'black', 'font-weight': 'bold' 
        			,'text-shadow':'1px 1px 2px #ffffcc'}, //字体样式
    },
};
function msg1()
 {
 	var text;
 	text=$("#msg").val();
 	arr.length = 0;
	var k=1;
	var text1 = text.split("\n");
	var len=text1.length;
	var flag1;
	for(var i=0;i<len;i++)
	{
		if(text1[i].length!=0)
		{
			var b=text1[i].split(/[:：级、,， 。 .]/);			
			if(b[0]=="导师")
			{
				arr[k-1]={id :k,name:"导师："+b[1],fid:0};
				flag1=k;
				k++;
			}
			else if (b.length!=0)
			{
				var oj={id :k,name:b[1],fid:flag1} ;
				//console.log(b[1]);
				for(var j=flag1;j<k-1;j++)
				{
					if(oj.name==arr[j].name)
						break; 
				}
				if(j>=(k-1))
				{
					arr.push(oj);
					k++; 
				}
				
				oj={id:k,name:b[0]+"级",fid:j+1};
				var z;
				for(z=j;z<k-1;z++)
				{
					if(oj.name==arr[z].name&&arr[j].name==arr[arr[z].fid-1].name)
						break;	
				}
				var flag;
				if(z>=(k-1))
				{
					flag=k;
					arr.push(oj);
					k++;
				}
				else
					var flag=z+1;
				for(var m=2;m<b.length;m++)
				{
					if(b[m].length!=0)			
					{
						oj={id:k,name:b[m],fid:flag};
						arr.push(oj);
						k++;
					}
					
				}
			}
		}
	}
	console.log(arr);
}
