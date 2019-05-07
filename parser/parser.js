var fs = require('fs');
var WorkingIP=[];
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('test.log', { start: 0, end: 10000 })
});
var streamWrite = fs.createWriteStream("my_file.txt");
function printConnectinfo(ARR,i)//вывод информации о подключении в нужном формате
{
    return ARR[i][4]+" connected at "+ ARR[i][0]+" "+ARR[i][1];
}
function AppendToFile(filename,text)
{
    fs.appendFile(filename, text+"\n", function (err) {});
}

lineReader.on('line', function (line) {
    var DataInLine;
    if (line.includes(" connected") == true)
    {
        DataInLine=line.split(" ");
        for(var i in WorkingIP)
        {
            if(DataInLine[4]==WorkingIP[i][4])//если следующий найденый такой же аддресс это снова подключение, значит был реконект
            {
                console.log(printConnectinfo(WorkingIP,i)+"  reconnect");
                AppendToFile("result.cvs",printConnectinfo(WorkingIP,i)+"  reconnect");
                delete WorkingIP[i];//убираем елемент из массивов, так как данный адресс подключения обработан
                
            }
            
        }
        WorkingIP.push(line.split(" "));//добавляем найденный новый коннект в массив
        
    }
    if (line.includes("disconnected") == true)
    {
        DataInLine=line.split(" ");
        for(var i in WorkingIP)
        {
            if(DataInLine[4]==WorkingIP[i][4])
            {
                console.log(printConnectinfo(WorkingIP,i)+"| disconected at "+DataInLine[0]+" "+DataInLine[1]+" by reason  "+ DataInLine[7]);
                AppendToFile("result.cvs",printConnectinfo(WorkingIP,i)+"| disconected at "+DataInLine[0]+" "+DataInLine[1]+" by reason  "+ DataInLine[7]);
                delete WorkingIP[i];//убираем елемент из массивов, так как данный адресс подключения обработан
            }
        }
    }
 
});
lineReader.on('close',function()//информация о соединениях что не были завешены
{
    console.log("----------------no disconnect or reconnect------");
    AppendToFile("result.cvs","----------------no disconnect or reconnect------");
    for(var i in WorkingIP)
    {
        console.log(printConnectinfo(WorkingIP,i));
        AppendToFile("result.cvs",printConnectinfo(WorkingIP,i));
    }

});
