# Task 1 - Backend 

Senden Heroku üzerinde node.js ile basit bir uygulama yazmanı istiyoruz. https://katilimci-app-ismi.herokuapp.com/getRecord adresine aşağıdaki formatta HTTP POST isteği yapacağız.

## Örnek istek:
```
{
      "key" : "chp8vgSkJDbyDKAS"
}
```
Bu uygulama aşağıdaki bilgilerle mongoDB'ye bağlanmalı ve "records" kolleksiyonundan senden istediğimiz kaydı bulup dönmeli; mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon

Beklediğimiz cevabın formatı da aşağıda:

## Örnek cevap:
```
{
      "key" : "chp8vgSkJDbyDKAS",
      "value" : "9sScg6DaMLbMTgLdPADPYJTyOd6AgHDs9SZNkgGTlHeQF",
      "createdAt" : "2016-01-26"
}
```
Sonrasında kodunun repo'sunu public bir şekilde Github'a gönder.

Github reponun ve Heroku'da açtığın uygulamanın adresini hackathon@getir.com'a email at.
