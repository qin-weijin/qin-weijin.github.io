# XML 用于传输数据的标记语言

## XML DOM

// document.getElement

	getElementById("id")				
	getElementsByTagName("name")			
	getElementsByTagNameNS()		

// document.create

	document.createElement(nodename)				
	// create 元素节点
	// return elementnode

	document.createElementNS()				
	// create 元素节点	

	document.createAttribute(attributename)				
	// create 属性节点
	// return attrnode

	document.createAttributeNS(uri,name)	
	// create 属性节点
	// create attrnode

	document.createTextNode(text)				
	// create 文本节点	
	// return textnode

	document.createComment(text)				
	// create 注释节点
	// return commentnode

	document.createCDATASection()
	// create 节点 CDATA区段
	
	document.createDocumentFragment()		
	// create DocumentFragment对象，虚拟的节点对象
	// return DocumentFragment对象

	document.createEvent()
	// create Event 对象
	
	document.createEntityReference(name)	
	// create EntityReference 对象
	// return EntityReference 对象
	
	document.createProcessingInstruction()
	// create  ProcessingInstruction 对象
	// return  ProcessingInstruction 对象

	document.createRange()					
	// create  Range 对象
	// return  Range 对象	

	document.createExpression()
	// create XPath表达式

// Document 对象的属性

	async				规定 XML 文件的下载是否应当被同步处理
	childNodes			返回属于文档的子节点的节点列表。
	doctype				返回与文档相关的文档类型声明 (DTD)。
	documentElement		返回文档的根节点
	documentURI			设置或返回文档的位置	
	domConfig			返回normalizeDocument()被调用时所使用的配置	
	firstChild			返回文档的首个子节点
	implementation		返回处理该文档的 DOMImplementation 对象。	
	inputEncoding		返回用于文档的编码方式（在解析时）。	
	lastChild			返回文档的最后一个子节点。
	nodeName			依据节点的类型返回其名称。
	nodeType			返回节点的节点类型。
	nodeValue			根据节点的类型来设置或返回节点的值。
	strictErrorChecking	设置或返回是否强制进行错误检查。	
	text				返回节点及其后代的文本（仅用于 IE）
	xml					返回节点及其后代的 XML（仅用于 IE）
	xmlEncoding			返回文档的编码方法。	N
	xmlStandalone		设置或返回文档是否为 standalone。	
	xmlVersion			设置或返回文档的 XML 版本。	

// Document 对象的方法

	adoptNode(sourcenode)			从另一个文档向本文档选定一个节点，然后返回被选节点。	
	evaluate()						计算一个 XPath 表达式。	
	importNode()					把一个节点从另一个文档复制到该文档以便应用。
	loadXML()						通过解析XML标签字符串来组成文档。	 	 	 	 
	normalizeDocument()	 	
	renameNode()					重命名元素或者属性节点。

## A1.DTD结构与引用

<!-- 1.作用 -->

	<!-- DTD(文档类型定义) "程序间数据交换" "标记符" "语法规则" -->

    1.描述XML文件的格式
    2.使团队能以DTD文件的标准交换数据
    3.验证外部数据、自身数据、应用程序是否符合DTD文件的标准

<!-- 2.引用与定义 -->

	<!-- 外部引用，<!DOCTYPE 根元素 SYSTEM "文件名"> -->
    <!DOCTYPE  note  SYSTEM "note.dtd">

	<!-- XML中声明DTD，<!DOCTYPE 根元素 [元素声明]> -->
    <!DOCTYPE note [
      <!ELEMENT note (to,from,heading,body)>
      <!ELEMENT to      (#PCDATA)>
      <!ELEMENT from    (#PCDATA)>
      <!ELEMENT heading (#PCDATA)>
      <!ELEMENT body    (#PCDATA)>
    ]>

    <!-- 说明 -->
    <!-- !DOCTYPE note    	定义文档类型为note -->
    <!-- !ELEMENT note()    定义note有四个元素 -->
    <!-- 定义 to from heading body 元素 为 "#PCDATA" 类型 -->


<!-- 3.XML结构 -->

	1.元素
	2.属性
	3.实体
	4.PCDATA 标签中的文本，会被解析器解析的文本。
	5.CDATA  字符数据，不会被解析器解析的文本。

	<!-- 1.元素 -->

		HTML
		<body></body>
		<table></table>

		XML
		<note></note>
		<message></message>

	<!-- 3.实体 -->

		<!--实体会被展开 

		实体引用		字符
		&lt;			<
		&gt;			>
		&amp;			&
		&quot;			"
		&apos;			'	 

		-->	

## B1 DTD 元素


<!-- DTD元素声明 -->

	<!ELEMENT 元素名称 类别>
	<!ELEMENT 元素名称 (元素内容)>

<!-- 空元素 -->

	<!ELEMENT 元素名称 EMPTY>					
	<!ELEMENT br EMPTY>							<!-- 例 -->

<!-- 只有PCDATA的元素 -->

	<!ELEMENT 元素名称 (#PCDATA)>					
	<!ELEMENT from (#PCDATA)>					<!-- 例 -->

<!-- ANY 可包含任何可解析数据的组合 -->

	<!ELEMENT 元素名称 ANY>
	<!ELEMENT note ANY>							<!-- 例 -->

<!-- 带有多个元素 -->

	<!ELEMENT 元素名称 (子元素名称 1,子元素名称 2,.....)>

	<!ELEMENT note (to,from,heading,body)>		<!-- 例 -->
	<!ELEMENT to      (#PCDATA)>
	<!ELEMENT from    (#PCDATA)>
	<!ELEMENT heading (#PCDATA)>
	<!ELEMENT body    (#PCDATA)>	

<!-- 只出现一次的元素 -->

	<!ELEMENT 元素名称 (子元素名称)>
	<!ELEMENT note (message)>

<!-- 最少出现一次的元素 -->
	<!ELEMENT 元素名称 (子元素名称+)>
	<!ELEMENT note (message+)>					<!-- 例 -->

<!-- 出现零次或多次的元素 -->
	<!ELEMENT 元素名称 (子元素名称*)>
	<!ELEMENT note (message*)>					<!-- 例 -->

<!-- 出现零次或一次的元素 -->
	<!ELEMENT 元素名称 (子元素名称?)>
	<!ELEMENT note (message?)>					<!-- 例 -->

<!-- 声明“非.../既...”类型的内容 -->
	<!ELEMENT note (to,from,header,(message|body))>

<!-- 声明混合型的内容 -->
	<!ELEMENT note (#PCDATA|to|from|header|message)*>

## B2 DTD 属性


<!-- 属性声明 ATTLIST -->

	<!ATTLIST 元素名称 属性名称 属性类型 默认值>

	DTD 实例:
	<!ATTLIST payment type CDATA "check">

	XML 实例:
	<payment type="check" />

<!-- 属性类型 -->

	CDATA			字符数据 (character data)
	(en1|en2|..)	此值是枚举列表中的一个值
	ID				唯一的 id
	IDREF			另外一个元素的 id
	IDREFS			其他 id 的列表
	NMTOKEN			合法的 XML 名称
	NMTOKENS		合法的 XML 名称的列表
	ENTITY			值是一个实体
	ENTITIES		值是一个实体列表
	NOTATION		此值是符号的名称
	xml:			值是一个预定义的 XML 值

<!-- 属性定义 -->

	值 				属性的默认值
	#REQUIRED		属性值是必需的
	#IMPLIED		属性不是必需的
	#FIXED value	属性值是固定的



<!-- 规定一个默认的属性值 -->

	<!-- 定义square元素，CDATA 类型、"width" 属性、空元素、默认值为0  -->

	DTD:
	<!ELEMENT square EMPTY>				<!-- 1.定义square元素 -->
	<!ATTLIST square width CDATA "0">	<!-- 2.定义square属性 -->

	合法的 XML:
	<square width="100" />				<!-- 3.在XML中使用 -->

<!-- #IMPLIED 没有默认值，不强制包含属性-->

	<!ATTLIST 元素名称 属性名称 属性类型 #IMPLIED>

	DTD:
	<!ATTLIST contact fax CDATA #IMPLIED>

	合法的 XML:
	<contact fax="555-667788" />
	<contact />							

<!-- #REQUIRED 没有默认值，强制包含属性-->

	<!ATTLIST 元素名称 属性名称 属性类型 #REQUIRED>

	DTD:
	<!ATTLIST person number CDATA #REQUIRED>

	合法的 XML:<person number="5677" />
	<!-- <person />这样定义是非法的 -->

<!-- #FIXED 属性拥有固定的值，并不允许作者改变-->

	<!ATTLIST 元素名称 属性名称 属性类型 #FIXED "value">

	DTD:
	<!ATTLIST sender company CDATA #FIXED "Microsoft">

	合法的 XML:<sender company="Microsoft" />
	<!-- <sender company="W3School" />这样定义是非法的 -->

	<!-- 定义多个值的属性 -->

	<!ATTLIST 元素名称 属性名称 (en1|en2|..) 默认值>

	DTD:
	<!ATTLIST payment type (check|cash) "cash">
	合法的XML:
	<payment type="check" />
	<payment type="cash" />

## B3 DTD 实体


<!-- 实体声明 -->

	<!-- 1.代替字符串 -->

	<!ENTITY 实体名称 "实体的值">

	DTD:
	<!ENTITY writer "Bill Gates">
	<!ENTITY copyright "Copyright W3School.com.cn">

	XML:
	<author>&writer;&copyright;</author>


	<!-- 2.代替URL -->

	<!ENTITY 实体名称 SYSTEM "URI/URL">

	DTD:
	<!ENTITY writer SYSTEM "http://www.w3school.com.cn/dtd/entities.dtd">
	<!ENTITY copyright SYSTEM "http://www.w3school.com.cn/dtd/entities.dtd">

	XML:
	<author>&writer;&copyright;</author>

## B4 DTD 验证


<!-- xml验证 -->

	<!-- load( )    验证文件，
		 loadXML( ) 验证字符串 -->

	<html>
	<body>
	<script>
	var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async="false";
	// 当设置为false时关闭验证
	xmlDoc.validateOnParse="true";
	// 被验证文件
	xmlDoc.load("note_dtd_error.xml");

	// errorCode()返回错误code
	document.write("<br>Error Code: ");
	document.write(xmlDoc.parseError.errorCode);
	// reason返回错误对象
	document.write("<br>Error Reason: ");
	document.write(xmlDoc.parseError.reason);
	// 返回错误的连接
	document.write("<br>Error Line: ");
	document.write(xmlDoc.parseError.line);
	</script>

	</body>
	</html>