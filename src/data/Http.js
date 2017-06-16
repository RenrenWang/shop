const  BASEURL='http://118.178.224.224:6080/appsrv';
export default{
    BASEURL,
    HOMEGOODS:BASEURL+'/homeInfo.action?homeType=HF',
    KINDURL:BASEURL+'/homeInfo.action?homeType=FF',
    shopsUrl:BASEURL+'/homeInfo.action?shopInfo=',
    PRODUCTDETAIL:BASEURL+'/homeInfo.action?homeType=FS&prdCd=',
    kindList:[{"ptyIds":1,"ptyCd":"FZ","ptyName":"女装","ptyImg":"/appimage/kind_1.png","ptyFlag":"Y"},{"ptyIds":2,"ptyCd":"MZ","ptyName":"男装","ptyImg":"/appimage/kind_2.png","ptyFlag":"Y"},{"ptyIds":3,"ptyCd":"TZ","ptyName":"美装","ptyImg":"/appimage/kind_3.png","ptyFlag":"Y"},{"ptyIds":4,"ptyCd":"PX","ptyName":"配饰","ptyImg":"/appimage/kind_4.png","ptyFlag":"Y"},{"ptyIds":5,"ptyCd":"XP","ptyName":"鞋品","ptyImg":"/appimage/kind_5.png","ptyFlag":"Y"},{"ptyIds":6,"ptyCd":"XB","ptyName":"箱包","ptyImg":"/appimage/kind_6.png","ptyFlag":"Y"},{"ptyIds":7,"ptyCd":"JJ","ptyName":"居家","ptyImg":"/appimage/kind_7.png","ptyFlag":"Y"},{"ptyIds":8,"ptyCd":"MY","ptyName":"美食","ptyImg":"/appimage/kind_8.png","ptyFlag":"Y"},{"ptyIds":9,"ptyCd":"SM","ptyName":"数码","ptyImg":"/appimage/kind_9.png","ptyFlag":"Y"},{"ptyIds":10,"ptyCd":"OT","ptyName":"其它","ptyImg":"/appimage/kind_10.png","ptyFlag":"Y"}],

}

