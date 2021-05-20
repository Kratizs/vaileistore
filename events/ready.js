module.exports = async(client) => {
  console.log(
    "Bot iniciado com " +
      client.users.cache.size +
      " usuários, em " +
      client.channels.cache.size +
      " canais de " +
      client.guilds.cache.size +
      " servidores."
  );

  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("Online com: **" + client.users.cache.size + "** Usuários **" + client.guilds.cache.size + "** Servidores");


/* Caso eu queira ver o nome dos servidores
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name);
  })

*/

  //Dólar
  const Discord = require("discord.js")
  const fs = require('fs');
  var request = require("request");
  const database = './verify/';
  const database2 = './verify2/';
  var url = "https://economia.awesomeapi.com.br/json/all/USD-BRL";
  var url2 = "https://economia.awesomeapi.com.br/json/all/EUR-BRL";
  const path = require('path');


  const database98 = './verify/';
  fs.readdir(database98, (err, files98) => {

  const database99 = './verify2/';
  fs.readdir(database99, (err, files99) => {

  client.guilds.cache.get("822439547681243207").channels.cache.get("830653903410036777").setName(`🎰 • ${files98.length} Canais Dólar`);

  client.guilds.cache.get("822439547681243207").channels.cache.get("830653949932470283").setName(`🎰 • ${files99.length} Canais Euro`);

  })
  })

  //Sistema 

    fs.readdir(database, (err, files) => {
    files.forEach(file => {
    let verificacao2 = file.substr(0,45);
    let verificacao3 = eval(verificacao2);

    if(typeof verificacao3 === 'undefined') {
      fs.unlinkSync("./verify/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {

    }

    let verificacao = eval(file);

    if(typeof verificacao === 'undefined') {
      fs.unlinkSync("./verify/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {

    }
    })
  });

    fs.readdir(database2, (err, files) => {
    files.forEach(file => {
    let verificacao2 = file.substr(0,45);
    let verificacao3 = eval(verificacao2);
    if(typeof verificacao3 === 'undefined') {
      fs.unlinkSync("./verify2/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {

    }

    let verificacao = eval(file);

    if(typeof verificacao === 'undefined') {
      fs.unlinkSync("./verify2/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {
  
    }
    })
})

setInterval(() => {
    fs.readdir(database, (err, files) => {
    files.forEach(file => {
    let verificacao2 = file.substr(0,45);
    let verificacao3 = eval(verificacao2);
    if(typeof verificacao3 === 'undefined') {
      fs.unlinkSync("./verify/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {

    }

    let verificacao = eval(file);

    if(typeof verificacao === 'undefined') {
      fs.unlinkSync("./verify/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {
  
    }
    })
})
    fs.readdir(database2, (err, files) => {
    files.forEach(file => {
    let verificacao2 = file.substr(0,45);
    let verificacao3 = eval(verificacao2);
    if(typeof verificacao3 === 'undefined') {
      fs.unlinkSync("./verify2/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {

    }

    let verificacao = eval(file);

    if(typeof verificacao === 'undefined') {
      fs.unlinkSync("./verify2/"+file);
      console.log("CANAL INVALIDO NEUTRALIZADO")
    } else {
  
    }
    })
})
  }, 0);

  var channel = client.guilds.cache.get("639886278657310754").channels.cache.get("800532936301609001")
  channel.messages.fetch("802352109232193547").then(message => {
  setInterval(() => {
    request(url,async function (err, response, body) {
      if (err) {
        console.log(err);
      }
      body = JSON.parse(body);
      var pegarvalor = body.USD.ask;
      var valor = pegarvalor.substr(0, 4);
      var valorfinal = valor.replace(".", ",");

      //Fotos das moedas
  
      var fotodolar = "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"
  
      //Embeds

    if (valorfinal === message.content) {
      console.log("Dólar não mudou")

    } else if (valorfinal > message.content){
    var dolar = "Dólar subiu 😔"
    var chard = "📈"
    var cor = "#FF0000"
    const embed = new Discord.MessageEmbed()
    .setTitle(dolar)
    .setColor(cor)
    .setThumbnail(fotodolar)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database, (err, files) => {
    files.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(dolar)
    await message.edit(valorfinal)

    } else {
    var dolar = "Dólar caiu 😁"
    var chard = "📉"
    var cor = "#008000"
    const embed = new Discord.MessageEmbed()
    .setTitle(dolar)
    .setColor(cor)
    .setThumbnail(fotodolar)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database, (err, files) => {
    files.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});   console.log(dolar)
    await message.edit(valorfinal)
    }

});
  }, 60 * 1000)
})
  channel.messages.fetch("802361369294274573").then(message => {
  var schedule = require('node-schedule');
  var rule = new schedule.RecurrenceRule();
 
  rule.tz = 'America/Sao_Paulo';
  
  rule.second = 0;
  rule.minute = 0;
  rule.hour = 0;
  
  var j = schedule.scheduleJob(rule, function(){

  request(url, async function(err, response, body) {
    if (err) {
      console.log(err);
    }

      body = JSON.parse(body);
      var pegarvalor = body.USD.ask;
      var valor = pegarvalor.substr(0, 4);
      var valorfinal = valor.replace(".", ",");

      //Fotos das moedas
  
      var fotodolar = "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"
  
      //Embeds

    if (valorfinal === message.content) {
    var dolar = "Relatorio Diário: Dólar ta na mesma!"
    var chard = "📊"
    var cor = "#00BFFF"
    const embed = new Discord.MessageEmbed()
    .setTitle(dolar)
    .setColor(cor)
    .setThumbnail(fotodolar)
    .setTimestamp()
    .setDescription(`${chard} Continuamos nos R$${valorfinal}`)

    fs.readdir(database, (err, files) => {
    files.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(dolar)

    } else if (valorfinal > message.content){
    var dolar = "Relatorio Diário: Dólar Subiu!"
    var chard = "📈"
    var cor = "#FF0000"
    const embed = new Discord.MessageEmbed()
    .setTitle(dolar)
    .setColor(cor)
    .setThumbnail(fotodolar)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database, (err, files) => {
    files.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(dolar)

    } else {
    var dolar = "Relatorio Diário: Dólar abaixou!"
    var chard = "📉"
    var cor = "#008000"
    const embed = new Discord.MessageEmbed()
    .setTitle(dolar)
    .setColor(cor)
    .setThumbnail(fotodolar)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database, (err, files) => {
    files.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(dolar)
    }

    await message.edit(valorfinal)
})
})
})

// Euro

  var channel = client.guilds.cache.get("639886278657310754").channels.cache.get("800532936301609001")
  channel.messages.fetch("823539366533005312").then(message => {
  setInterval(() => {
    request(url2,async function (err, response, body) {
      if (err) {
        console.log(err);
      }
      body = JSON.parse(body);
      var pegarvalor = body.EUR.ask;
      var valor = pegarvalor.substr(0, 4);
      var valorfinal = valor.replace(".", ",");

      //Fotos das moedas
  
      var fotoeuro = "https://images.vexels.com/media/users/3/130199/isolated/preview/68a438060e0dba26de4ff4745f44a144-iacute-cone-de-moeda-euro-plana-by-vexels.png"
  
      //Embeds

    if (valorfinal === message.content) {
      console.log("Euro não mudou")

    } else if (valorfinal > message.content){
    var euro = "Euro subiu 😔"
    var chard = "📈"
    var cor = "#FF0000"
    const embed = new Discord.MessageEmbed()
    .setTitle(euro)
    .setColor(cor)
    .setThumbnail(fotoeuro)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database2, (err, files2) => {
    files2.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(euro)
    await message.edit(valorfinal)

    } else {
    var euro = "Euro caiu 😁"
    var chard = "📉"
    var cor = "#008000"
    const embed = new Discord.MessageEmbed()
    .setTitle(euro)
    .setColor(cor)
    .setThumbnail(fotoeuro)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database2, (err, files2) => {
    files2.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});   console.log(euro)
    await message.edit(valorfinal)
    }

});
  }, 60 * 1000)
})
  channel.messages.fetch("823539375648014366").then(message => {
  var schedule = require('node-schedule');
  var rule = new schedule.RecurrenceRule();
 
  rule.tz = 'America/Sao_Paulo';
  
  rule.second = 0;
  rule.minute = 0;
  rule.hour = 0;
  
  var j = schedule.scheduleJob(rule, function(){

  request(url2, async function(err, response, body) {
    if (err) {
      console.log(err);
    }

      body = JSON.parse(body);
      var pegarvalor = body.EUR.ask;
      var valor = pegarvalor.substr(0, 4);
      var valorfinal = valor.replace(".", ",");

      //Fotos das moedas
  
      var fotoeuro = "https://images.vexels.com/media/users/3/130199/isolated/preview/68a438060e0dba26de4ff4745f44a144-iacute-cone-de-moeda-euro-plana-by-vexels.png"
  
      //Embeds

    if (valorfinal === message.content) {
    var euro = "Relatorio Diário: Euro ta na mesma!"
    var chard = "📊"
    var cor = "#00BFFF"
    const embed = new Discord.MessageEmbed()
    .setTitle(euro)
    .setColor(cor)
    .setThumbnail(fotoeuro)
    .setTimestamp()
    .setDescription(`${chard} Continuamos nos R$${valorfinal}`)

    fs.readdir(database2, (err, files2) => {
    files2.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(dolar)

    } else if (valorfinal > message.content){
    var euro = "Relatorio Diário: Euro Subiu!"
    var chard = "📈"
    var cor = "#FF0000"
    const embed = new Discord.MessageEmbed()
    .setTitle(euro)
    .setColor(cor)
    .setThumbnail(fotoeuro)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database2, (err, files2) => {
    files2.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(euro)

    } else {
    var euro = "Relatorio Diário: Euro abaixou!"
    var chard = "📉"
    var cor = "#008000"
    const embed = new Discord.MessageEmbed()
    .setTitle(euro)
    .setColor(cor)
    .setThumbnail(fotoeuro)
    .setTimestamp()
    .setDescription(`${chard} de R$${message.content} para R$${valorfinal}`)

    fs.readdir(database2, (err, files2) => {
    files2.forEach(file => {
  
    var mandar = file+".send(embed)";
    eval(mandar);
    })
});
    console.log(euro)
    }

    await message.edit(valorfinal)
})
})
})

    

  //Separação
  
  let s = [
    { name: `🪐 Pensando se vale a pena acordar todo dia`, type: 'WATCHING',},
    { name: `🤙 Levanta que a derrota não vem sozinha`, type: 'WATCHING',},
    { name: `🎶 Lo-Fi`, type: 'LISTENING',},
    { name: `📮 Vote em mim -votar`, type: 'PLAYING',},
    { name: `🔥 Crie limites e supere-os`, type: 'LISTENING',},
    { name: `✨ Viver é estar preparado para derrotas`, type: 'WATCHING',},
    { name: `💖 Use -ajuda`, type: 'PLAYING',},
    { name: `🥰 Entra no meu servidor de suporte ae -suporte`, type: 'LISTENING',} 
  ];

  function st() {
    let rs = s[Math.floor(Math.random() * s.length)];
    client.user.setActivity(rs);
  }



  st();
  setInterval(() => st(), 25000); //10000 = 10 segundos

};
