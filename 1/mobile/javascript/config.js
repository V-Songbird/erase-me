	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#000000";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="http://www.nexus-ro.net";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#4e503f";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Yes";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.InstructionsButtonVisible="Show";bookConfig.bgBeginColor="#fbfcfd";bookConfig.bgEndColor="#eee9de";bookConfig.bgMRotation="-90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=12;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2329;;bookConfig.securityType="1";bookConfig.bookTitle="La Historia Comienza";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "Spanish",btnFirstPage:"Primera Página",btnNextPage:"Página siguiente",btnLastPage:"Última Página",btnPrePage:"Página Anterior",btnDownload:"Descargar",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Borrar",frmSearchPrompt:"Clear",btnBookMark:"Tabla de contenidos",btnHelp:"Ayuda",btnHome:"Inicio",btnFullScreen:"Permitir Pantalla Completa",btnDisableFullScreen:"Deshabilitar Pantalla Completa",btnSoundOn:"Sonido Encendido",btnSoundOff:"Sonido Apagado",btnShareEmail:"Compartir",btnSocialShare:"Redes Sociales",btnZoomIn:"Agrandar",btnZoomOut:"Alejar",btnDragToMove:"Modo de Arrastre",btnAutoFlip:"Auto pasar",btnStopAutoFlip:"Detener Auto Pasar",btnGoToHome:"Volver al inicio",frmHelpCaption:"Ayuda",frmHelpTip1:"Ayuda uno",frmHelpTip2:"Arrastrar el Borde con el Maus",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas las Páginas",frmPrintPrintCurrentPage:"Imprimir Página actual",frmPrintPrintRange:"Imprimir Páginas:",frmPrintExampleCaption:"Ejemplo: 2,5,8-26",frmPrintPreparePage:"Preparando la Página:",frmPrintPrintFailed:"Error de Impresión:",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",loginCaption:"Entrar",loginInvalidPassword:"Contraseña no válida!",loginPasswordLabel:"Contraseña:",loginBtnLogin:"Entrar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Acerca de",frnAboutCaption:"Acerca de y Contacto",btnSinglePage:"Página Simple",btnDoublePage:"Página doble",btnSwicthLanguage:"Cambiar el Idioma",tipChangeLanguage:"Elegir un Idioma...",btnMoreOptionsLeft:"Mas Opciones",btnMoreOptionsRight:"Mas Opciones",btnFit:"Ajustar la Ventana",smallModeCaption:"Click para ver Pantalla Completa",btnAddAnnotation:"Agregar Notas",btnAnnotation:"Notas",FlipPageEditor_SaveAndExit:"Guardar y Salir",FlipPageEditor_Exit:"Salir",DrawToolWindow_Redo:"Rehacer",DrawToolWindow_Undo:"Deshacer",DrawToolWindow_Clear:"Limpiar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Ancho",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Borrador",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Ancho de Borde",TStuff_BorderAlph:"Borde Alfa",TStuff_BorderColor:"Color del Borde",DrawToolWindow_TextNote:"Texto Nota",AnnotMark:"Marcador",lastpagebtnHelp:"Ultima Página",firstpagebtnHelp:"Primera Página",homebtnHelp:"Volver a la Página Principal",aboubtnHelp:"Acerca de",screenbtnHelp:"Abrir en Pantalla Completa",helpbtnHelp:"Mostrar la Ayuda",searchbtnHelp:"Buscar en Páginas",pagesbtnHelp:"Ver las miniaturas de este Folleto",bookmarkbtnHelp:"Abrir Marcador",AnnotmarkbtnHelp:"Abrir la Tabla de Contenidos",printbtnHelp:"Imprimir el folleto",soundbtnHelp:"Prender o Apagar el Sonido",sharebtnHelp:"Enviar Email a",socialSharebtnHelp:"Redes Sociales",zoominbtnHelp:"Agrandar",downloadbtnHelp:"Descargar el folleto",pagemodlebtnHelp:"Cambiar entre Modo de Página Simple y Doble",languagebtnHelp:"Cambiar Idioma",annotationbtnHelp:"Agregar Anotación",addbookmarkbtnHelp:"Agregar Marcador",removebookmarkbtnHelp:"Eliminar Marcador",updatebookmarkbtnHelp:"Actualizar Marcador",btnShoppingCart:"Carrito de Compras",Help_ShoppingCartbtn:"Ayudar Carrito de Compras",Help_btnNextPage:"Siguiente Página",Help_btnPrePage:"Anterior Página",Help_btnAutoFlip:"Auto pasar",Help_StopAutoFlip:"Detener auto pasar",btnaddbookmark:"Agregar",btndeletebookmark:"Eliminar",btnupdatebookmark:"Actualizar",frmyourbookmarks:"Mis Anotaciones",frmitems:"Artículos",DownloadFullPublication:"Publicación Completa",DownloadCurrentPage:"Página Actual",DownloadAttachedFiles:"Archivos Adjuntos",lblLink:"Enlace",btnCopy:"Botón Copiar",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"¿Desea recuperar la sesión anterior?",tmpl_Backgoundsoundon:"Fondo Sonido Encendido",tmpl_Backgoundsoundoff:"Fondo Sonido Apagado ",tmpl_Flipsoundon:"Flip Sonido Encendido",tmpl_Flipsoundoff:"Flip Sonido Apagado ",Help_PageIndex:"Número de actual Página",tmpl_PrintPageRanges:"Rango de Página",tmpl_PrintPreview:"Previsualizar",btnSelection:"Seleccionar Texto",loginNameLabel:"Nombre:",btnGotoPage:"Ir a Página",btnSettings:"Configuración",soundSettingTitle:"Sonido Configuración",closeFlipSound:"Sonido de pase de cierre",closeBackgroundSound:"Cerrar el Sonido de Fondo",frmShareCaption:"Compartiendo",frmShareLinkLabel:"Enlace:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartir con grupo",TAnnoActionPropertyStuff_GotoPage:"Ir a página ",btnPageBack:"Retroceder",btnPageForward:"Adelante",SelectTextCopy:"Copiar Texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrito de Compras",TStuffCart_DetailedQuantity:"Cantidad",TStuffCart_DetailedPrice:"Precio",ShappingCart_Close:"Cerrar",ShappingCart_CheckOut:"Proceso",ShappingCart_Item:"Artículo",ShappingCart_Total:"Total precio",ShappingCart_AddCart:"Añadir a carrito",ShappingCart_InStock:"En Stock",TStuffCart_DetailedCost:"Costo de transporte",TStuffCart_DetailedTime:"Tiempo de entrega",TStuffCart_DetailedDay:"día(s)",ShappingCart_NotStock:"Poco en stock",btnCrop:"Ajustar",btnDragButton:"Arrastrar",btnFlipBook:"Libro flip",btnSlideMode:"Modo de presentación",btnSinglePageMode:"Modo de página sencilla",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Cerrar",btnDoublePage:"Página doble",btnBookStatus:"Book View",checkBoxInsert:"Ingrese página actual",lblLast:"Esta es la última página.",lblFirst:"Esta es la primera página.",lblFullscreen:"Clic para ver en pantalla completa",lblName:"Nombre",lblPassword:"Contraseña",lblLogin:"Entrar",lblCancel:"Cancelar",lblNoName:"Nombre de usuario no puede estar vacío.",lblNoPassword:"Contraseña no puede estar vacía.",lblNoCorrectLogin:"Ingrese el nombre y contraseña correctos.",btnVideo:"Galería de video",btnSlideShow:"Presentación",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",btnDragToMove:"Modo de Arrastre",btnPositionToMove:"Mover por posición del mouse",lblHelp1:"Arrastre la esquina de la página para ver",lblHelp2:"Doble clic para acercar y alejar",lblCopy:"Copiar",lblAddToPage:"añadir a página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Borrar",lblRemoveAll:"Quitar todo",tltCursor:"cursor",tltAddHighlight:"añadir resaltado",tltAddTexts:"añadir textos",tltAddShapes:"añadir formas",tltAddNotes:"añadir notas",tltAddImageFile:"añadir archivo de imagen",tltAddSignature:"añadir firma",tltAddLine:"añadir línea",tltAddArrow:"añadir flecha",tltAddRect:"añadir recta",tltAddEllipse:"añadir elipse",lblDoubleClickToZoomIn:"Doble clic para acercar",frmShareCaption:"Compartiendo",frmShareLabel:"Comparir",frmShareInfo:"Puedes compartir tu publicación fácilmente a las redes sociales. Sólo haz clic abajo.",frminsertLabel:"Insertar a sitio",frminsertInfo:"Ue el código debajo para insertar en su sitio.",btnQRCode:"Clic para escanear código QR",btnRotateLeft:"Rotar a la izquierda",btnRotateRight:"Rotar a la derecha",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20176143274945","alpha":"1","location":{"tannoName":"swf1","x":"0.1045751633986928","y":"0.041666666666666664","width":"0.4801470588235294","height":"0.3529040404040404","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/decoration11.swf"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20176143278371","alpha":"0.25","location":{"tannoName":"swf2","x":"0.11764705882352938","y":"0.17045454545454544","width":"0.8875","height":"0.440530303030303","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/star18.swf"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20176143276863","alpha":"1","location":{"tannoName":"swf1","x":"0.10784313725490197","y":"0.04292929292929293","width":"0.492156862745098","height":"0.27178030303030304","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/firework05.swf"}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20176143275221","alpha":"1","location":{"tannoName":"swf3","x":"0.6094771241830066","y":"-0.06818181818181818","width":"0.31233660130718954","height":"0.24444444444444444","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/heart01.swf"},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"20176143274391","alpha":"0","location":{"tannoName":"button1","x":"0.2973856209150327","y":"0.5707070707070707","width":"0.4078431372549019","height":"0.10454545454545454","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":"<TEXTFORMAT LEFTMARGIN=\"2\"><P ALIGN=\"LEFT\"><FONT FACE=\"Arial\" SIZE=\"12\" COLOR=\"#FFFFFF\" LETTERSPACING=\"0\" KERNING=\"0\">Da Click \&gt;\&lt;</FONT></P></TEXTFORMAT>"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_bottomLight10.swf","buttonCaption":"","captionY":"35","HRate":"0.005051","Format":{"font":"Tahoma","size":"18","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://ragnatop.org/index.php?%20a=in\&u=NexusRO","linkTarget":"_blank"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20176143277827","alpha":"0.5","location":{"tannoName":"swf4","x":"0.26143790849673204","y":"0.2916666666666667","width":"0.16339869281045752","height":"0.12626262626262627","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/sunshine02.swf"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoSWF","annoId":"20176143271280","alpha":"1","location":{"tannoName":"swf5","x":"0.3709150326797386","y":"0.3939393939393939","width":"0.4065359477124183","height":"0.2681818181818182","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"swfURL":"./files/pageConfig/star23.swf"}]]};
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
