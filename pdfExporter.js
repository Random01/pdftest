var PDFDocument = require('pdfkit');

function pdfExporter(documentDefinition, stream) {

    var doc = new PDFDocument();

    doc.pipe(stream);

    doc.fontSize(10)
        //.font('fonts/ipaexg.ttf')
        .text(englishLoremIpsum, 10, 10);

    doc.end();
}

var englishLoremIpsum = 
    'Lorem ipsum dolor sit amet, in harum voluptua duo, nisl accusata maiestatis cu sea. Ius eu dicit appetere adipisci, oratio ubique id pri, fugit causae eum ea. Ubique doming oporteat te nam, pro integre equidem id. Vim everti epicurei suscipiantur ad.'+
    'Sed prompta iuvaret principes ne, nam altera eirmod scripta no.Sea sumo dolore ad.Qui in legendos disputando reprehendunt.Ut quando nostrud adversarium sit, detracto evertitur honestatis te pri.At impetus regione mediocritatem cum.'+
    'Harum consulatu usu at, pri numquam epicuri in, an eum impetus omittantur. Pro ne veritus interesset. Unum eros vim an. Vix modo malorum ad, falli veritus minimum eos ad, lorem dolore vix ad. Quot omnis evertitur eos id. Te vis vide persius meliore, te pro officiis reformidans.'+
    'Vis odio graecis id.Debitis pericula temporibus pri ea.Est cu quaestio liberavisse, nam ut tibique interpretaris.Insolens molestiae an usu, probatus lobortis assentior ex nec.'+
    'At equidem assueverit ullamcorper duo.Nisl habeo veritus eu ius, error altera propriae ad eos.Et tale platonem constituam qui.Quas dissentiunt nec ne, eros malis quando eu eum, at vidit vitae ullamcorper mea.Ubique pertinacia has id.Duo ei veniam delicatissimi, ludus commodo duo ea.Eam agam iusto salutandi ei.'+
    'Ei mei vivendo iudicabit.Nec elitr suscipiantur ut, duo no debet consetetur sadipscing, bonorum accumsan recusabo id vis.Per ubique gloriatur reprehendunt ut, vix alia altera diceret et.Cu usu decore adipisci principes.'+
    'Per ea sapientem pertinacia, nemore aliquip graecis ad eam.Cum at audire intellegebat, id sit esse novum dicit.Te mucius expetendis scripserit vim, eum ferri malorum ea.Suas viris id ius, nihil legimus elaboraret sed ea, in erant virtute voluptatum pri. Mea platonem expetenda ea. Pri summo postulant definiebas at, sonet recusabo eu cum.'+
    'Ei facete tractatos mel. Dico semper ea eos, tale fabulas accommodare pri ei. Quo melius ornatus periculis in, elitr aliquid in cum. Alii oratio sea ex, elit theophrastus pri id, et vim deserunt consequuntur. Munere tempor accusamus sit et. Vim graecis ullamcorper delicatissimi eu, intellegat liberavisse ne vix.'+
    'Quod referrentur has an, ei dicant facilis vix. Veritus explicari constituto in usu, vel ut brute inimicus. Congue animal appetere eos te, ex vix dicunt dolores. Eius dissentias nec in, pri amet nibh id. Purto menandri platonem has id, his no sint facilis.'+
    'Case magna meliore est cu, probo theophrastus sit eu. Ex brute liber deseruisse vim, in partem sapientem adolescens vim. Ne sea nibh facilisi posidonium, in per posidonium persequeris necessitatibus. Cum eu justo diceret invenire. Ius atqui accusam interesset ut, modus civibus cum id, per eu mundi conceptam liberavisse.';

var japaniseLoremIpsum =
    'しゅ䏩 觚𐤦びゃおぼ べビョぷ詎あ 祣蟤鄯詪饊 と盥しょ, へペ苨 ぎょ儥い勩驦 ギェ尥稧驌ꤎ 楃ぺ饃褩䥺 た餩 姤ヨと盥しょ べビョぷ詎あ 囤ぎょ儥 ちゃめ, 积䋥苯す䋤 姌グァきゃ妧ひゃ 矤夯廤は雦 ショ婧 楌堦ム, 䪦キョ矤 栨軩 せ槜䧨ヒャじょ 姤ヨと盥しょ 詃椩ぴゅ ぢ堨覎埨䧪 褚ぱ㤣卤づ 绨㨣レ゜馨クァ 軣りゅ, ぎきゅ绨 堦ム を覌や駧䝧 へペ苨ぎきゅ 婃ご谨饜饦 覩焨蝥捯ぞ 鎌榯栨軩堥 馺フョ ゞ韩ぐ ぞか 軩堥べ ぎょ儥い勩驦 覩焨蝥捯ぞ 觚𐤦びゃおぼ, せ槜 い勩驦 か苦ヒェ褤饥 詃椩ぴゅ廥ぎゅ 觚𐤦びゃおぼ, にゃりょ 蝥捯ぞ 积䋥苯す䋤 ひた餩槎ちゅ 禺㫤䩚秦ぜ' +
    'ゆ椦觚 蝣滩 だフィェ窯ゞ韩 鎌榯栨軩堥 馺フョり を覌 穞難きょぴょにょ 祣蟤鄯詪饊, 廥ぎゅし 饨ほ ギェ尥稧驌ꤎ 绨㨣レ゜ 馨クァ, えちょナ狦団 磊うじゅゆ椦 ばひゅ䥚しゅ䏩 埩䶥 グォ㫨りゃ 蝥捯ぞ きょぴょ ぐびょも礯楌 觟獣餥䪦キョ, ꤎチェ以 億囤 ぐびょも礯楌 姌グァきゃ妧ひゃ 绨㨣 せ槜䧨 フョりヴュふ穯 にゅ果焯䣵っ, 绣フォ 槥駜ぎゃ 楃ぺ饃褩䥺 觟獣餥䪦キョ ん蝣滩 䨺䩦な拥馺 姯槥駜ぎゃ䩎 軣りゅキュ禨䥵 ご谨, 滩れさ億囤 ッ鰧餣ケ櫦 しゅ䏩ちゃ 礯楌, 苯す䋤 褤饥 チェ以ちぽ绣 べビョぷ詎あ しゃキャざヅに' +    '詪饊 クァ毚窨 滩れさ億囤 积䋥苯す䋤 ちゃめ勯愦襧 しゃキャざヅに 矤夯廤は雦 しゅ䏩ちゃ や駧, を覌や ひゅ䥚 穞難きょぴょにょ を覌や駧䝧 觟獣餥䪦キョ, えちょナ狦団 磊うじゅゆ椦 觟獣餥䪦キョ 𐤦 びゃお 盥しょ 鰣ず 廥ぎゅし 姯槥駜ぎゃ䩎 覩焨蝥捯ぞ らズ苩びゅ篞 馺フョ 廥ぎゅし ッ鰧餣ケ櫦 しゃキャざヅに' +
    'ひゃしゃ で갣ジュ て馦 鄢そくよぢゃ あ㠨揥 しゲヴィェ壪襊 で갣ジュ て馦 雦祣蟤 キュ禨, で갣 礨ショ婧 フョりヴュふ穯 姯槥駜ぎゃ䩎 姌グァきゃ妧ひゃ 妧ひゃしゃ ぜ褚 せ槜䧨ヒャじょ 觚𐤦 びゃおぼ 矤夯廤は雦 鰣ずぴ稪µ 軣りゅキュ禨䥵 栨軩 夯廤は, きょぴょ 婃ご谨饜饦 ぢ堨覎埨䧪 㠨揥槣みゅぶ ヴュふ穯' +
    '獣餥 姤ヨと盥しょ らズ苩びゅ篞 楌堦ム えちょ チェ以ちぽ绣 鰣ずぴ稪µ 軣りゅキュ禨䥵 櫦饣坨, 禺㫤䩚秦ぜ 姤ヨと盥しょ 槎ちゅ 𐤦 びゃお, 䝧ギェ ヴュふ穯 ッ鰧餣ケ櫦 鎌榯栨軩堥 廤は 槣みゅぶ 积䋥苯す䋤 毚窨諤がウォ 祣蟤鄯詪饊, 褚ぱ㤣卤づ ばひゅ䥚しゅ䏩 蟤鄯 䩚秦ぜ, フォ䋨秚䪥䪩 楃ぺ饃褩䥺 ぜ褚 諤がウォ ヴュふ穯.ろツァん蝣 姯槥駜ぎゃ䩎 ぬ婃 べビョぷ詎あ 㠨揥槣みゅぶ ナ狦 詃椩ぴゅ, 饣坨馤Ủつ にゅ果焯䣵っ 坨馤 苯す䋤' +
    '妧ひゃしゃ フョりヴュふ穯 しゃキャざヅに 軣りゅキュ禨䥵 窨諤, 鎌榯 䨺䩦な拥馺 禺㫤䩚秦ぜ ナ狦団, と盥しょ 褤饥 滩れさ億囤 绨㨣レ゜ 馨クァ 矤夯廤は雦 きゃ妧 ゞ韩ぐ 姯槥駜ぎゃ䩎 鄩ゝにゃりょ䛤, 觚𐤦 びゃおぼ 毚窨諤がウォ グォ㫨りゃ 詪饊 か苦ヒェ褤饥 えちょナ狦団 绨㨣レ゜ 馨クァ 夯廤は 卤づ 姯槥駜ぎゃ䩎 にゅ果焯䣵っ 姤ヨと盥しょ 焯䣵っ ナ狦 がウォ 禺㫤䩚秦ぜ 鄢そくよぢゃ 尥稧驌, えちょナ狦団 へペ苨ぎきゅ 觚𐤦 ヒャじょ姯 フォ䋨秚䪥䪩 覩焨蝥捯ぞ へペ苨ぎきゅ 鎌榯栨 饨ほ' +
    '覎埨 ひた餩槎ちゅ 楃ぺ饃褩䥺 廥ぎゅし, ゲヴィェ 积䋥苯す䋤 ぐびょも礯楌 ひた餩槎ちゅ ゲヴィェ壪 い勩 を覌や駧䝧 鰣ずぴ稪µ 鰧餣ケ, キュ禨䥵 ぢ堨覎埨䧪 か苦ヒェ褤饥 㠨揥槣みゅぶ 驌ꤎ, だフィェ ズ苩びゅ フョりヴュふ穯 ぐびょも礯楌 しゲヴィェ壪襊 りヴュ 姤ヨと盥しょ ちゃめ勯愦襧 に軣りゅ 驦礨 礨ショ婧埩䶥 ッ鰧餣ケ櫦 觟獣餥䪦キョ クァ毚窨, 楌堦ム ギェ尥稧驌ꤎ 覩焨蝥捯ぞ へペ苨ぎきゅ キュ禨' +
    '滩れさ億囤 詃椩ぴゅ廥ぎゅ ぎきゅ しゅ䏩ちゃ, 褚ぱ㤣 しゅ䏩 べビョぷ詎あ ばひゅ䥚しゅ䏩 襧楃ぺ グォ㫨 饣坨馤Ủつ 軣りゅキュ禨䥵, 觚𐤦 フォ䋨秚䪥䪩 で갣ジュ て馦 軩堥べ 夯廤は Ủつ ぎょ儥い勩驦 えちょナ狦団 毚窨諤がウォ, じゃグォ㫨りゃ鍯 磊うじゅゆ椦 で갣ジュ 栨軩 禺㫤 チェ以ちぽ绣 か苦ヒェ褤饥 姌グァきゃ妧ひゃ へペ苨 ぴ稪 か苦ヒェ褤饥 にゅ果焯䣵っ 褤饥ッ ꤎチェ以 ちゃめ 䨺䩦な拥馺 フョりヴュふ穯 ばひゅ䥚しゅ䏩, .ろ .ろツァん蝣 褚ぱ㤣卤づ 詃椩ぴゅ廥ぎゅ 䪥䪩䨺' +
    '槣みゅ べビョぷ詎あ ばひゅ䥚しゅ䏩 ずぴ稪, ショ婧 积䋥苯す䋤 か苦ヒェ褤饥 ッ鰧餣ケ櫦 だフィェ窯 餣ケ.ろツァん蝣 ばひゅ䥚しゅ䏩 祣蟤鄯詪饊 い勩驦, 穞難きょぴょにょ 堦ム饨ほぬ 姯槥駜ぎゃ䩎 卤づ 鄩ゝにゃ ぢ堨覎埨䧪 毚窨諤がウォ グォ㫨りゃ.ろ 㨣レ゜ 馨.ろ 禺㫤䩚秦ぜ 軣りゅキュ禨䥵 ずぴ稪 鄩ゝにゃりょ䛤 へペ苨ぎきゅ 祣蟤鄯詪饊 䧪ひ, 鄩ゝにゃりょ䛤 しゲヴィェ壪襊 鎌榯 に軣りゅ, 礨ショ婧 䛤じゃ にゅ果焯䣵っ しゃキャざヅに ぴ稪.ろツァ ギェ尥稧驌ꤎ 鎌榯栨軩堥, 饨ほ にゅ果焯䣵っ べビョぷ詎あ 饃褩䥺' +
    '難きょぴょ 䣵っ ひた餩槎ちゅ 鄩ゝにゃりょ䛤 觚𐤦 びゃおぼ 襧楃ぺ ギェ尥稧驌ꤎ だフィェ窯ゞ韩 詃椩ぴゅ廥ぎゅ 姌グァ, 鰧餣ケ 姤ヨと盥しょ しゃキャざヅに ぎきゅ ぜ褚 尥稧驌 滩れさ億囤 磊うじゅゆ椦 ヅに 䨺䩦な拥馺 覩焨蝥捯ぞ ばひゅ䥚しゅ䏩 にょ积䋥, 鄩ゝにゃりょ䛤 じゃグォ㫨りゃ鍯 禺㫤䩚秦ぜ 鎌榯栨 キャざ, 鎌榯 ゲヴィェ壪 覩焨蝥捯ぞ 褚ぱ㤣卤づ で갣ジュ 禺㫤䩚秦ぜ しゃキャざヅに 詃椩';

var chiniseLoremIpsum = 
    '笓粊鑕鬞鬠 婸媥媕 輗 鬖鰝鰨 肒芅邥 輗 敁柧 駇僾 墆 轛轝酅 鞂駇僾 偩勓埳 驧鬤 踣 燚璒瘭 鬎鯪鯠 雥齆犪, 愮揫 筩 覿讄讅 玾珆玸, 橀槶 殍涾烰 繠繗繓 鋈 坽姎 痵 彃慔慛 殍涾烰 郚釢 簥翷臒 箄縴儳 輑鄟銆 趍, 杍肜阰 晛桼桾 烺焆琀 酳 贄蹝, 鏊鏎顜 棷棫椓 韰頯 跣 蒏 箷箯緷 儮嬼懫 舿萐菿 燖燏, 琀痑 紵脭脧 儋圚墝 藚藦藞 痵, 踆跾踄 噾噿嚁 穊 跜軥'+
    '膗 粞絧絏 羳蟪蠁 杍肜, 緦膣膗 輘輠輗 蹢鎒鎛 讔雥 慔 瑽 啅婰 輘輠輗 鏀顝饇 嫬廙彯, 慖 臌薠 螷蟞覮 媓幁惁 邆錉霋, 蔏 蟷蠉蟼 烺焆琀 熤熡磎 澉澂 舝 溿煔煃 薽薸蟛 鬋鯫鯚 擙樲 戫摴撦 鱐鱍鱕 腠 擙樲, 鏾鐇闠 碞碠粻 黫鼱 蜭, 鳱 璻甔礔 婰婜孲 馻噈嫶 釂鱞 烍烚珜 檹瀔濼 葮 唗哱, 睆稃 羳蟪蠁 訬軗郲 煘煓瑐 輘, 憢 郙鬯 趍跠跬 姴怤昢 噅尰 櫧櫋瀩 祪笰笱 皵碡碙 膗, 脀蚅 滈 趡趛踠 軥軱逴'+
    '禠 肵苂苃 莔莋莥 媝寔嵒 鬐鶤 鋑鋡髬 萷葋蒎 濼濷 僣, 醙醠鍖 饓鶪齠 剆坲姏 瞂 藦藞 倱哻圁 殍涾烰 滍 蒘蝆, 磏磑禠 薽薸蟛 瀷瀹藶 磑 唲堔, 屼汆 錖霒馞 嶭嶴憝 瞂 岋巠帎 蚔趵郚 礯籔羻 腠 滭滹, 齫儽 踣 僣劁嘕 樛槷殦 藒襓謥, 仉圠 舝 臡虈觿 剆坲姏 踸躽輷 廲籗糴 熿熼燛 蓨蝪 慖'+
    '鸃鼞欘 螾褾賹 硾 蝑蝞, 滘 銇韎餀 柦柋牬 綌綄罨 魡鳱, 尳廅 鳭 諿蹅輶 忁曨曣 驧鬤鸕 壾嵷幓 簻臗藱 魵 碢禗 尳廅 踙 忷扴汥 峷敊浭, 銙 曮禷 繠繗繓 舿萐菿 圁垺 滍 箛箙舕 鵁麍儱 隒雸頍 溿 肵苂苃 饓鶪齠 溗煂, 踣 駍駔鳿 繠繗繓 鑏鑆驈 涾烰'+
    '跠 滈溔 榃痯痻 褅褌諃 鏙闛颾, 爧躨 轒醭鏹 瘑睯碫 樆樦潏 槏 徖梜 蓂蓌蓖 鼀齕櫌 稯, 醑醏錛 斪昮朐 蒝蒧蓏 痵 艜薤 溿 潧潣 嫀嵥嵧 嬽巃攇 倓剟唗, 嬽巃攇 薠薞薘 驐鷑鷩 蛶 杺枙, 滍 澓澋 錖霒馞 檹瀔濼 梜淊淭 筩 惵揯 廲籗糴 腷腯葹 藽轚酁, 靮傿 璸瓁穟 侺咥垵 翍脝艴 骱 疿疶砳 鱐鱍鱕 駺駹 誙, 嗛嗕 猺矠筸 滭滹漇 嫀, 鋑鋡髬 噾噿嚁 鎈巂鞪 憉 騉鬵'+
    '綄罨 篧糑縒 箄縴儳 蝯, 珋疧 銙 禖穊稯 濇燖燏 饓鶪齠 偢偣唲 檌檒濦 筡 鈁陾, 埱娵 鉾 鶟儹巏 枅杺枙 瀷瀹藶 墋墂 痯 駽髾髽 荾莯袎 跐鉠鉣 稨窨箌 蒘蝆蜪 慛 蘥蠩, 曏樴橉 綌綄罨 跐鉠 嵷, 豥 譺鐼霺 萰葍萯 躨钀钁 箄縴 嬦憼檓 螾褾賹 圞趲 墏, 聧蔩 勯噚嶢 礯籔羻 滘'+
    '齝囃 鋡 醑醏錛 裺觨誖 鞂駇僾, 榬榼榳 鏙闛颾 烗猀 蒮 裌覅 鮛鮥鴮 鸃鼞欘 暲 蝯 嫆嫊 咍垀坽 骹麇嚍 簼繰 牚猳琭 墂嫫嵾 茇茺苶 嵧, 禫穛 鳼 悊惀桷 蒝蒧蓏 烗猀珖, 嗼嗹 瀗犡礝 溗煂獂 觢 珜疿 筩 蟣襋謯 胾臷菨, 崺崸 縢羱聬 忷扴汥 豥 蔰 鬞鬠 箛箙舕 馦騧騜 蜬蝁蜠'+
    '賗 轗鐔飂 爂犤繵 貕貔, 彶忣 嬃 躆轖轕 臡虈觿 跣鉌 醑醏錛 鼥儴壛 歅, 腠 餩骹 虥諰諨 輲輹輴, 磏 獝瘝 蹢鎒鎛 樧槧樈 灡蠵讔 輗 眅眊 鳼鳹鴅 湹渵焲 奫嫮嫳, 袘觕 觢 綌綄罨 樏殣氀, 錉霋 榃 驐鷑鷩 僤凘墈 駺駹鮚 欿殽 褅 皾籈譧 瓥籪艭 纑臞蘬, 郹酟 轒醭鏹 喥喓堮 毊灚襳 鋟, 踆 靮傿 顊顃餭 藒襓謥 葞萴葂' +
    '媓幁惁 螏螉褩 蠬襱覾 廙彯 豥, 蔍 齹鑶鸓 埱娵徖 輘輠 皵碡碙 驐鷑鷩 駓駗鴀 筩筡 儇 峬峿峹 泏狔狑 痑祣筇 懱斔 緅, 枅杺枙 偢偣唲 耏胠臿 輗 嫆嫊, 檒濦 偢偣唲 堔埧娾 巕氍爟 輘 嬽巃攇 饓鶪齠 勫嫢 僣, 榎 鷡鷢 慖摲摓 褣諝趥 羭聧蔩 湸湤 韎 厏吪吙 婸媥媕 譋轐鏕, 蔝蓶 漦澌潬 鑴鱱爧 揗斝湁 蜭, 箄縴 鋟 莦莚虙 驧鬤鸕 橀 褗褆諓 趡趛踠 毚丮厹 臒薽' +
    '熿熼燛 鈁陾靰 箖緌翢 彔抳 蔏, 楋 恦拻 稨窨箌 羳蟪蠁 韎餀 綧 垺垼娕 鼀齕櫌, 螷蟞 鋟 蜭蜸覟 潿熥獘 笓粊紒 藙藨蠈 鳻嶬幧 蛚袲褁 鉾銇 壿, 驐鷑鷩 躨钀钁 笀耔 徲, 嗛嗕塨 榶榩榿 砫粍紞 戣椵 箷 馺骱魡 齹鑶鸓 搋朠楟 箑箖 磏, 憢憉摮 珶珸珿 覛谼貆 鋄銶 蔏 薝薢蟌 輲輹輴 蠬襱覾 銪 廞徲, 跠 芘芛 嬽巃攇 萷葋蒎 紏蚙迻';
      

exports.pdfExporter = pdfExporter;