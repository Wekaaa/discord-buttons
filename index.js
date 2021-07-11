const { Discord , Client } = require('discord.js');
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');

client.cekilisrole = "863743662365343754" // ÇEKİLİŞ KATILIMICISI ROLÜ
client.etkinlikrole = "863743701653389332" //ETKİNLİK KATILIMCIISI ROLÜ

client.botsahip = "607926085551783968" // KENDİ İDNİZ (!BUTTON) MESAJINI KULLANABİLİCEK KİŞİ
client.Token = "ODYzNDE2MDg1MjIzMzA5MzMy.YOmk5A.081g32KVt0S-g-RXWZZlvs2xYLY" // BOTUNUZUN TOKENİ (İNTENTLERİ AÇMAYI UNUTMAYIN)
       
//////////////////


 client.on("message", (message) => {
          if (message.author.id !== client.botsahip) return;
          if (message.content !== "!button") return;

          let ed = new MessageButton()
         .setID('etkinlikduyuru') 
         .setStyle('red') // RENKLERE BAKMAK İÇİN https://discord.js.org/#/docs/main/master/class/MessageButton
         .setLabel('Etkinlik Duyuru') ;
       
         let ck = new MessageButton()
         .setID('cekiliskatılımcısı')
         .setStyle('green') // RENKLERE BAKMAK İÇİN https://discord.js.org/#/docs/main/master/class/MessageButton
         .setLabel('Çekiliş Katılımıcısı') ;

         if (message.content === "!button" || message.author.id === Settings.Weka || message.author.bot) return message.channel.send(`Sunucumuzda \`@everyone\` , \`@here\`   gibi seni rahatsız eden bildirimlerden uzak duruyoruz. Sunucumuza katıldığın andan itibaren <@&${client.cekilisrole}> ve <@&${client.etkinlikrole}> rolü üzerine otomatik olarak verildi. Eğer bildirimlerden rahatsız oluyorsan butona basarak rolleri üzerinden kaldırabilirsin!`, { 
          buttons: [ ck, ed]
        });



      })

client.on('clickButton', async (button) => {

  if (button.id === 'etkinlikduyuru') {
    if (button.clicker.member.roles.cache.get(client.etkinlikrole)) {
        await button.clicker.member.roles.remove(client.etkinlikrole)
        await button.think(true);
        await button.reply.edit("Etkinlik Duyuru Rolü Üzerinizden Alındı!")
    } else {
        await button.clicker.member.roles.add(client.etkinlikrole)
        await button.think(true);
        await button.reply.edit("Etkinlik Duyuru Rolü Üzerinize Verildi!")
    }
}


if (button.id === 'cekiliskatılımcısı') {
  if (button.clicker.member.roles.cache.get(client.cekilisrole)) {
      await button.clicker.member.roles.remove(client.cekilisrole)
      await button.think(true);
      await button.reply.edit("Çekiliş Katılımcısı Rolü Üzerinizden Alındı!")
  } else {
      await button.clicker.member.roles.add(client.cekilisrole)
      await button.think(true);
      await button.reply.edit("Çekiliş Katılımcısı Rolü Üzerinize Verildi!")
  }
}
})



client.login(client.Token);
