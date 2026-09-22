(() => {
  'use strict';

  const metrics = [
    ['heel', 'かかと保持・靴ずれ'],
    ['fatigue', '長時間の疲れにくさ'],
    ['forefoot', '前足部・横幅'],
    ['cushion', 'クッション性'],
    ['softness', '足当たりの柔らかさ'],
    ['stability', '歩行時の安定性']
  ];

  const products = [
    {
      id:'sd007451', baseline:true, rank:0,
      brand:'maRe maRe', title:'つやリボンパンプ', code:'SD007451',
      price:'購入時 ¥6,600', status:'基準モデル（旧モデル）',
      heel:'約2.5cm', width:'幅広向け（EE数値は一次確認できず）', sizes:'LL / 24.5cmを使用', weight:'—', toe:'ラウンド系',
      confidence:'基準：実使用＋公式情報',
      url:'https://www.maremare-store.com/campaign/2023/02/27/2451/',
      reviewUrl:'https://www.maremare-store.com/campaign/2023/02/27/2451/',
      images:[
        {label:'公式・商品/着用', alt:'maRe maRe SD007451 公式紹介画像', sources:['https://www.maremare-store.com/wp-content/uploads/2023/02/WPSD9-3-scaled.jpg']},
        {label:'公式・着用', alt:'maRe maRe SD007451 公式着用画像', sources:['https://www.maremare-store.com/wp-content/uploads/2023/02/WPSD8-3.jpg']}
      ],
      ratings:{heel:4.5,fatigue:8.0,forefoot:8.5,cushion:7.5,softness:9.0,stability:7.5},
      diffs:{heel:'基準',fatigue:'基準',forefoot:'基準',cushion:'基準',softness:'基準',stability:'基準'},
      compare:'基準：横幅は合うが、かかと抜け・靴ずれが実際に発生。',
      fit:'横幅は実使用で「ピッタリ」。一方、前後方向が少し緩い可能性があり、かかとの抜け・靴ずれが現在の改善ポイント。',
      good:'柔らかな人工皮革と低めのヒール。現状、横幅方向のフィットは良好。',
      caution:'公式一次情報ではEEという数値表記を直接確認できなかったため「EE系」とは断定しない。新候補では幅を広げすぎず、かかと保持を上げることが重要。',
      reviews:[
        {text:'公式特集では、幅広・甲高を含むリピーターから、柔らかさや長時間使用の楽さを評価する声が紹介されている。', source:'maRe maRe公式特集', url:'https://www.maremare-store.com/campaign/2023/02/27/2451/'}
      ]
    },
    {
      id:'sgt606', rank:1,
      brand:'MOONSTAR SUGATA', title:'MS SGT606', code:'48900516',
      price:'¥8,250', status:'販売中／サイズ別在庫は公式で確認',
      heel:'3.0cm', width:'3E', sizes:'22.0–26.0cm', weight:'約185g (23.0cm)', toe:'ソフトスクエア',
      confidence:'評価確度：高',
      url:'https://www.moonstar.co.jp/store/products/detail/48900516',
      reviewUrl:'https://review.rakuten.co.jp/item/1/221738_10037499/1.1/',
      images:[
        {label:'公式・商品', alt:'MOONSTAR SUGATA MS SGT606 ブラック', sources:['https://www.moonstar.co.jp/store/upload/save_image/48900516_3.jpg']}
      ],
      ratings:{heel:9.0,fatigue:9.0,forefoot:8.5,cushion:9.0,softness:8.5,stability:9.0},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'→',cushion:'↑↑',softness:'→',stability:'↑↑'},
      compare:'3Eを確保しつつ、履き口パッドで踵保持を明確に強化。',
      fit:'今回の課題に最も直接的。公式が履き口パッドで踵へのフィット感を高め、踵抜けしにくくする設計を明示している。',
      good:'アナトミーインソール＋マザータッチ、ボロネーゼ製法、中央部をくぼませた独自アウトソール。3cm・3E・約185g。',
      caution:'普段24.0〜24.5cmの購入者が24.5cmでは踵に約1cm余り、24.0cmでぴったりになった例がある。甲側がきついという別レビューもあるため両サイズ比較が重要。',
      reviews:[
        {text:'普段24.0〜24.5cmの購入者は24.5cmで踵が約1cm余り、24.0cmへ交換するとぴったりだった。今回の足長条件に近く参考度が高い。', source:'楽天・ムーンスター公式ショップ購入者', url:'https://review.rakuten.co.jp/item/1/221738_10037499/1.1/'},
        {text:'仕事でよく歩く購入者から、痛みが出にくくヒール高も負担になりにくいとの評価がある。一方、甲側の圧迫を感じた例もある。', source:'楽天・ムーンスター公式ショップ購入者', url:'https://review.rakuten.co.jp/item/1/221738_10037499/1.1/'}
      ]
    },
    {
      id:'lo17100', rank:2,
      brand:'Lady worker / ASICS Trading', title:'LO-17100', code:'LO-17100',
      price:'通常 ¥6,490（調査時セール ¥5,192）', status:'閉店セール対象／サイズ別在庫は公式で確認',
      heel:'約3.0cm', width:'3E相当', sizes:'21.5–25.0cm', weight:'約210g (23.0cm)', toe:'ラウンド',
      confidence:'評価確度：中〜高（構造根拠が強い）',
      url:'https://www.asics-trading.co.jp/shop/g/g1656008215/',
      reviewUrl:'',
      images:[
        {label:'公式・商品', alt:'Lady worker LO-17100 ブラック', sources:['https://www.asics-trading.co.jp/img/goods/L/LO-17100_008.jpg']},
        {label:'公式・かかと', alt:'Lady worker LO-17100 ブラック かかと', sources:['https://www.asics-trading.co.jp/img/goods/2/LO-17100_008.jpg']}
      ],
      ratings:{heel:9.0,fatigue:9.0,forefoot:8.5,cushion:8.5,softness:8.5,stability:8.5},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'→',cushion:'↑',softness:'→',stability:'↑'},
      compare:'3Eのまま「履き口・かかと周りを締める」ラストへ。',
      fit:'今回の「幅は確保したいが踵は余らせたくない」に合う設計。公式が履き口・かかと周りを締め、フィット性に配慮したラストと明示している。',
      good:'立体中敷、アーチサポート、衝撃緩衝、もちもち系素材、柔らかいラバー、屈曲性。仕事靴として機能が明確。',
      caution:'今回の判断に使える具体的な日本語購入者レビュー本文は十分確認できず。設計上は強いが、24.0/24.5cmの比較試着を優先。',
      reviews:[]
    },
    {
      id:'sd81625', rank:3,
      brand:'maRe maRe', title:'カラフルリボンフラット', code:'SD81625',
      price:'¥6,600', status:'販売ページあり／サイズ別在庫は購入時確認',
      heel:'約2.5cm', width:'EEタイプ', sizes:'22.0–26.0cm', weight:'—', toe:'ラウンド／バレエ',
      confidence:'評価確度：高（7451同ラスト）',
      url:'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-CC009_cpg-207_pno-68_ino-01.html',
      reviewUrl:'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-CC009_cpg-207_pno-68_ino-01.html',
      images:[
        {label:'公式・商品', alt:'maRe maRe SD81625 ブラック', sources:['https://image.0101.co.jp/16622/img/cc00920768/sd81625-15_800_18.jpg?basethum=800']}
      ],
      ratings:{heel:7.5,fatigue:8.0,forefoot:8.5,cushion:7.5,softness:8.5,stability:7.5},
      diffs:{heel:'↑',fatigue:'→',forefoot:'→',cushion:'→',softness:'→',stability:'→'},
      compare:'7451と同じラスト。横幅・基本的な足入れを近づけつつ、深い甲で脱げにくさ改善を狙える。',
      fit:'販売ページがSD007451と同じラストの使用を明記。さらに「甲部分が見た目より深く脱げにくい」と説明しており、7451に近い履き心地を維持しながら保持性が変わる可能性がある。',
      good:'約2.5cm、EEタイプ、日本製。同ラストという今回だけの強い比較材料があり、見た目もバレエ／フラット系で自然。',
      caution:'同じラストでもアッパー素材・甲の深さは異なるため「7451と完全に同じ履き心地」とは断定できない。7451の踵形状との相性問題が残る可能性もある。',
      reviews:[
        {text:'普段23.5〜24.0cm（24cm寄り）の購入者は23.5cmでぴったりで、履きやすく歩きやすいため履きつぶして買い直していると報告。', source:'マルイウェブチャネル購入者レビュー', url:'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-CC009_cpg-207_pno-68_ino-01.html'},
        {text:'普段24.0cm・標準幅の購入者は24.0cmで履き心地が良かったと評価。', source:'マルイウェブチャネル購入者レビュー', url:'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-CC009_cpg-207_pno-68_ino-01.html'}
      ]
    },
    {
      id:'margot3', rank:4,
      brand:'VIVAIA', title:'Margot 3.0 スクエアトゥ フラット', code:'shflatse2509150037001',
      price:'¥18,900', status:'販売中／サイズ別在庫は公式で確認',
      heel:'1.0cm', width:'80mm (EU37)／E〜4E目安', sizes:'22.0–27.5cm', weight:'約153g (EU37 / 23.5cm)', toe:'スクエア',
      confidence:'評価確度：高（公式構造＋サイズ指針）',
      url:'https://vivaia.jp/products/flats-margot3-black',
      reviewUrl:'https://vivaia.jp/pages/sizelist',
      images:[
        {label:'公式・商品', alt:'VIVAIA Margot 3.0 ブラック', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1769999492-f0e17d80-dbfc-4857-9827-562b33075c7c.jpg?crop=center&height=1000&v=1770010314&width=1000']},
        {label:'公式・横', alt:'VIVAIA Margot 3.0 ブラック 横', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1769999492-7323d5d4-4e6c-49d9-8449-29341afa6cb5.jpg?crop=center&height=1000&v=1770010314&width=1000']},
        {label:'公式・かかと', alt:'VIVAIA Margot 3.0 ブラック かかと', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1769999492-94d1e7fd-cc2f-4abe-9e80-85bdecd07278.jpg?crop=center&height=1000&v=1770010314&width=1000']}
      ],
      ratings:{heel:9.0,fatigue:9.0,forefoot:9.0,cushion:9.0,softness:9.0,stability:8.5},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'↑',cushion:'↑↑',softness:'→',stability:'↑'},
      compare:'幅広対応だけでなく270°かかとパッドで「パカパカ」を直接対策。サイズ合わせまで公式手順がある。',
      fit:'Margot 3.0は270° U-Cloudかかとパッドでアキレス腱周辺を両側から保持し、歩行中のズレ・浮きを抑える設計。Margot 2.0比で前足部も約5%広い。',
      good:'前足部EVAのクッション性約20%向上、アーチサポート約10%向上、反発性約15%向上。約153gと軽く、通勤・長時間歩行向けの説明もある。',
      caution:'VIVAIA公式もサイズ合わせを重視。購入前に足を正しく測り、普段使う靴下で試着し、つま先1〜1.5cm程度の余裕とかかと抜けを確認。かかとに指が1本入る場合はサイズダウンを推奨している。ワイドだから大きめを選ぶ、とはしない。',
      reviews:[
        {text:'VIVAIA公式サイズガイドは、足を正しく測ったうえで普段履く靴下で試し、つま先余裕とかかと抜けを確認する手順を案内している。', source:'VIVAIA公式 サイズ選びのポイント', url:'https://vivaia.jp/pages/sizelist'},
        {text:'公式Q&Aでは、Margot 3.0の270° U-Cloudかかとパッドが、かかとのフィット感を高めズレを抑えると説明している。', source:'VIVAIA公式 Margot 3.0紹介', url:'https://vivaia.jp/pages/blog-margot-3-wide-fit-bunion-friendly-new'}
      ]
    },
    {
      id:'ao10239', rank:5,
      brand:'AcureZ / ASICS Trading', title:'AO-10239', code:'AO-10239',
      price:'通常 ¥7,425（調査時セール ¥5,775）', status:'アウトレット／サイズ別在庫は公式で確認',
      heel:'約3.0cm', width:'3E相当', sizes:'22.5–24.5cm（公式表示）', weight:'約185g (23.0cm)', toe:'ポインテッド',
      confidence:'評価確度：中〜高（構造根拠が強い）',
      url:'https://www.asics-trading.co.jp/shop/g/g0415008225/',
      reviewUrl:'',
      images:[
        {label:'公式・商品', alt:'AcureZ AO-10239 ブラック', sources:['https://www.asics-trading.co.jp/img/goods/L/AO-10239_008.jpg']},
        {label:'公式・かかと', alt:'AcureZ AO-10239 ブラック かかと', sources:['https://www.asics-trading.co.jp/img/goods/2/AO-10239_008.jpg']}
      ],
      ratings:{heel:8.5,fatigue:8.5,forefoot:7.5,cushion:8.5,softness:8.5,stability:8.5},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'↓',cushion:'↑',softness:'→',stability:'↑'},
      compare:'カウンターの踵パッドは有利。ポインテッドの前足部は要確認。',
      fit:'カウンター部分に「かかと抜けに配慮したパッド入り」と公式明記。3Eと踵対策を両立する点が今回に合う。',
      good:'立体成型インソール、EVAによる軽量化、反発性EVAアウトソール、柔らかなライニング、生活防水。',
      caution:'ポインテッドトゥのため、横幅が3Eでもつま先・爪の圧迫は別途確認が必要。具体的な日本語レビュー本文は十分確認できず。',
      reviews:[]
    },
    {
      id:'ao10259', rank:6,
      brand:'AcureZ / ASICS Trading', title:'AO-10259', code:'AO-10259',
      price:'¥6,160', status:'アウトレット／サイズ別在庫は公式で確認',
      heel:'約3.0cm', width:'3E相当', sizes:'21.5–25.0cm', weight:'約200g (23.0cm)', toe:'ラウンド',
      confidence:'評価確度：中〜高（構造根拠が強い）',
      url:'https://www.asics-trading.co.jp/shop/g/g0728008215/',
      reviewUrl:'',
      images:[
        {label:'公式・商品', alt:'AcureZ AO-10259 ブラック', sources:['https://www.asics-trading.co.jp/img/goods/L/AO-10259_008.jpg']},
        {label:'公式・かかと', alt:'AcureZ AO-10259 ブラック かかと', sources:['https://www.asics-trading.co.jp/img/goods/2/AO-10259_008.jpg']}
      ],
      ratings:{heel:9.0,fatigue:8.5,forefoot:8.5,cushion:8.5,softness:8.5,stability:8.5},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'→',cushion:'↑',softness:'→',stability:'↑'},
      compare:'3E＋履き口・踵周りを締めるラストで保持性改善を狙える。',
      fit:'公式が履き口・かかと周りを締め、フィット性に配慮したラストと明記。LO-17100に近い考え方で、3Eと踵保持を両立する。',
      good:'PU立体サポート中敷、柔らかい合成ラバー、屈曲性、静音ヒール。ラウンドトゥで前足部も比較しやすい。',
      caution:'具体的な日本語購入者レビュー本文は十分確認できず。構造評価を中心とした候補。',
      reviews:[]
    },
    {
      id:'allday301', rank:7,
      brand:'ACHILLES / ALL DAY Walk', title:'ALL DAY Walk 301', code:'ALD3010-B',
      price:'¥7,920', status:'販売中／残りわずか表示あり（調査時）',
      heel:'約3.0cm', width:'2E', sizes:'22.0–25.5cm', weight:'—', toe:'スクエア',
      confidence:'評価確度：高',
      url:'https://achilles-webshop.com/products/ald3010-b',
      reviewUrl:'https://achilles-webshop.com/products/ald3010-b',
      images:[
        {label:'公式・商品', alt:'ALL DAY Walk 301 ブラック', sources:['https://achilles-webshop.com/cdn/shop/files/ALD3010-B-1.jpg?v=1692696565&width=800']}
      ],
      ratings:{heel:8.5,fatigue:9.0,forefoot:7.5,cushion:9.0,softness:9.0,stability:9.0},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'↓',cushion:'↑↑',softness:'→',stability:'↑↑'},
      compare:'踵ウレタン＋前滑り軽減は好相性。2Eの横幅だけ要確認。',
      fit:'301は公式が「かかとにウレタンスポンジを内蔵し抜けにくくなった」と明示。前滑り軽減インソールも今回の前後移動対策に合う。',
      good:'高反発クッション、衝撃吸収、シフォンライニング、屈曲性、吸水速乾・抗菌防臭。長時間仕事の購入者実績も強い。',
      caution:'2Eなので、7451で合っている横幅を圧迫しないかが最大確認点。24.0/24.5cmの両方で前足部を確認したい。',
      reviews:[
        {text:'履きつぶして再購入した利用者から、長時間履いても痛くなく歩きやすいとの評価。', source:'アキレス公式購入者レビュー', url:'https://achilles-webshop.com/products/ald3010-b'},
        {text:'4足目という購入者から、靴底が擦り切れるほど歩いても普通のヒールより疲れにくいとの報告。', source:'アキレス公式購入者レビュー', url:'https://achilles-webshop.com/products/ald3010-b'},
        {text:'仕事用購入者から、仕事中に足が痛くなりにくく快適との評価。', source:'アキレス公式購入者レビュー', url:'https://achilles-webshop.com/products/ald3010-b'}
      ]
    },
    {
      id:'lo17550', rank:8,
      brand:'Lady worker / ASICS Trading', title:'LO-17550', code:'LO-17550',
      price:'通常 ¥6,490（調査時セール ¥5,192）', status:'閉店セール対象／サイズ別在庫は公式で確認',
      heel:'約3.0cm', width:'3E相当', sizes:'21.5–25.0cm', weight:'約170g (23.0cm)', toe:'ラウンド／バレエ',
      confidence:'評価確度：中〜高',
      url:'https://www.asics-trading.co.jp/shop/g/g1644008215/',
      reviewUrl:'',
      images:[
        {label:'公式・商品', alt:'Lady worker LO-17550 ブラック', sources:['https://www.asics-trading.co.jp/img/goods/L/LO-17550_008.jpg']},
        {label:'公式・かかと', alt:'Lady worker LO-17550 ブラック かかと', sources:['https://www.asics-trading.co.jp/img/goods/2/LO-17550_008.jpg']}
      ],
      ratings:{heel:7.5,fatigue:9.0,forefoot:8.5,cushion:9.0,softness:8.5,stability:8.5},
      diffs:{heel:'↑',fatigue:'↑',forefoot:'→',cushion:'↑↑',softness:'→',stability:'↑'},
      compare:'疲労対策・軽さは強いが、踵保持の専用構造説明は上位候補より弱い。',
      fit:'立ち仕事向けの3E・約170g。履き心地重視のラスト、立体中敷、EVAインジェクションソールで長時間用途に合う。',
      good:'アーチサポート、クッション性、屈曲性、軽量EVAインジェクションソール。パンプスの見た目とスニーカー的な履き心地を狙う。',
      caution:'公式にはSGT606やAO-10239ほど明確な踵抜け対策の説明がない。踵保持は試着確認を重視。',
      reviews:[]
    },
    {
      id:'pansy4060', rank:9,
      brand:'Pansy', title:'パンジーオフィス 4060', code:'4060',
      price:'¥3,850', status:'24.0/24.5cm 在庫あり表示（調査時）',
      heel:'2.5cm', width:'3E', sizes:'21.5–25.5cm', weight:'約120g (23.0cm)', toe:'ラウンド',
      confidence:'評価確度：高',
      url:'https://www.pansy.co.jp/shop/detail.php?pcode=4060',
      reviewUrl:'https://www.pansy.co.jp/shop/detail.php?pcode=4060',
      images:[
        {label:'公式・ブラック', alt:'Pansy 4060 ブラック', sources:['https://www.pansy.co.jp/product/images/4060/other/4060_color_01%284%29.jpg']},
        {label:'公式・着用', alt:'Pansy 4060 ブラック 着用', sources:['https://www.pansy.co.jp/product/images/4060/other/4060_model_03_1.jpg']}
      ],
      ratings:{heel:7.0,fatigue:8.5,forefoot:8.5,cushion:8.5,softness:9.0,stability:7.5},
      diffs:{heel:'↑',fatigue:'↑',forefoot:'→',cushion:'↑',softness:'→',stability:'→'},
      compare:'約120gと足裏支持は魅力。踵保持の改善幅は上位候補より読みにくい。',
      fit:'3Eでストレッチ合皮が前足部に追従。スリーポイントインソールと軽量EVAで長時間勤務の疲労対策が明確。',
      good:'約120g、日本製、ストレッチ設計、土踏まず・中足骨・踵を支えるスリーポイントインソール、EVAコンプレッションソール。',
      caution:'今回の主課題である踵保持について専用パッド等の明示はない。軽さだけで決めず、踵浮きを室内歩行で確認。',
      reviews:[
        {text:'公式購入者から、足裏が疲れにくく軽いこと、アーチ周辺を支える感覚を評価する声がある。', source:'Pansy公式購入者レビュー', url:'https://www.pansy.co.jp/shop/detail.php?pcode=4060'},
        {text:'別の公式購入者から、履きやすく足に優しいため定期的に購入したいとの評価。', source:'Pansy公式購入者レビュー', url:'https://www.pansy.co.jp/shop/detail.php?pcode=4060'}
      ]
    },
    {
      id:'fitfit85601', rank:10,
      brand:'fitfit', title:'撥水ニット2WAYフラットシューズ', code:'85601 / FI5856BW10560',
      price:'通常 ¥10,890（調査時 ¥4,400）', status:'公式EC 全サイズ在庫なし（調査時）',
      heel:'1.5cm', width:'3E', sizes:'22.5–25.0cm', weight:'216g', toe:'ポインテッド',
      confidence:'評価確度：中〜高',
      url:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW10560/',
      reviewUrl:'',
      images:[
        {label:'公式・商品', alt:'fitfit 撥水ニット2WAYフラットシューズ ブラック', sources:['https://sc3.locondo.jp/contents/commodity_image/FI/FI5856BW10560_1_m.jpg']},
        {label:'公式・着用', alt:'fitfit 撥水ニット2WAYフラットシューズ ブラック 着用', sources:['https://sc3.locondo.jp/contents/commodity_image/FI/FI5856BW10560_21_m.jpg']}
      ],
      ratings:{heel:8.5,fatigue:8.5,forefoot:8.0,cushion:8.5,softness:9.0,stability:8.5},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'→',cushion:'↑',softness:'→',stability:'↑'},
      compare:'擦れにくい踵クッションは有利。ただし現在は入手性が低い。',
      fit:'公式が「擦れにくくスッと履ける踵クッション」と説明。3E・柔らかなニット・広い接地面で構造上は今回に合う。',
      good:'撥水ニット、立体インソール、衝撃吸収、広い接地面の1.5cmヒール。ハンズフリーで着脱しやすい。',
      caution:'調査時は公式ECで22.5〜25.0cmすべて在庫なし。日本語購入者レビュー本文も十分確認できず、再入荷時の比較候補。',
      reviews:[]
    },
    {
      id:'a0646', rank:11,
      brand:'Belle & Sofa', title:'やわらかスエード バレエシューズ', code:'A0646',
      price:'¥11,000（幅広特注 ¥11,990）', status:'販売中・幅広特注あり',
      heel:'約1.5cm', width:'標準＋幅広特注', sizes:'公式で確認', weight:'約145g (23.0cm)', toe:'ラウンド',
      confidence:'評価確度：中〜高',
      url:'https://www.belle-co.jp/c/pumps/a0646/a0646',
      reviewUrl:'https://store.shopping.yahoo.co.jp/yasashii-kutukoubou/y646.html',
      images:[
        {label:'公式・着用', alt:'Belle & Sofa A0646 ブラック 着用', sources:['https://belleandsofa.itembox.design/item/image/a0646-hyoshi-3.jpg']},
        {label:'公式・商品紹介', alt:'Belle & Sofa A0646 ブラック 商品紹介', sources:['https://belleandsofa.itembox.design/item/image/a0646-gazo-all-1.jpg']}
      ],
      ratings:{heel:7.5,fatigue:8.0,forefoot:8.5,cushion:7.5,softness:9.5,stability:7.5},
      diffs:{heel:'↑',fatigue:'→',forefoot:'→',cushion:'→',softness:'↑',stability:'→'},
      compare:'擦れ対策には期待できるが、前後の保持性は試着確認が必要。',
      fit:'非常に柔らかく、かかとの擦れ対策として魅力。一方、柔らかさは必ずしも踵保持の強さを意味しない。',
      good:'日本製、約145g、柔らかな人工皮革、約1.5cm。幅広特注も選べ、足当たりの優しさを比較できる。',
      caution:'購入者レビューには普段サイズだと少し大きく感じる例もある。7451と同じ前後余りを起こさないか確認。',
      reviews:[
        {text:'公式店購入者から、かかとが柔らかく靴擦れしなかったとの報告がある一方、普段サイズでは少し大きく感じたという声もある。', source:'Yahoo! Belle&Sofa公式店レビュー', url:'https://store.shopping.yahoo.co.jp/yasashii-kutukoubou/y646.html'},
        {text:'幅広特注の購入者レビューでは、柔らかさや痛みにくさを評価する声がある。', source:'楽天・Belle&Sofa購入者レビュー', url:'https://review.rakuten.co.jp/item/1/245295_10000669/1.1/'}
      ]
    },
    {
      id:'treebreezers', rank:12,
      brand:'Allbirds', title:'Tree Breezers', code:'ABW240063 / Jet Black',
      price:'通常 ¥15,950（調査時 ¥11,165・30%OFF）', status:'Jet Black 24.0/24.5cm 在庫あり（調査時）',
      heel:'ほぼフラット', width:'幅表記なし・伸縮ニット', sizes:'22.0–28.0cm', weight:'—', toe:'バレエ／ラウンド寄り',
      confidence:'評価確度：中',
      url:'https://www.goldwin.co.jp/ap/item/i/m/ABW240063',
      reviewUrl:'',
      images:[
        {label:'公式・横', alt:'Allbirds Tree Breezers Jet Black 横', sources:['https://itemimg.goldwin.co.jp/itemimg/GDW22/A0GDW0001GXY/02_AO01-432.jpg']},
        {label:'公式・斜め', alt:'Allbirds Tree Breezers Jet Black 斜め', sources:['https://itemimg.goldwin.co.jp/itemimg/GDW22/A0GDW0001GXY/03_051-432.jpg']},
        {label:'公式・上', alt:'Allbirds Tree Breezers Jet Black 上', sources:['https://itemimg.goldwin.co.jp/itemimg/GDW22/A0GDW0001GXY/03_052-432.jpg']}
      ],
      ratings:{heel:7.5,fatigue:8.0,forefoot:8.0,cushion:8.0,softness:9.5,stability:7.5},
      diffs:{heel:'↑',fatigue:'→',forefoot:'→',cushion:'↑',softness:'↑',stability:'→'},
      compare:'見た目は自然なバレエフラット。伸縮ニットで足には追従するが、専用の踵保持構造は明示されていない。',
      fit:'ユーカリ由来の伸縮メッシュを公式が「靴下を履いているように足にぴったりフィット」と説明。仕事用途も公式に挙げられている。',
      good:'SweetFoam EVAミッドソール、通気性の高いニット、柔らかな足当たり。Jet Blackはアッパーからソールまで黒で、今回の見た目条件に合う。',
      caution:'日本公式では現在、製品レビュー・スタッフレビューが未掲載。かかと抜け改善の確度はSGT606やMargot 3.0より低いため、24.0/24.5cmを実際に比較したい。',
      reviews:[]
    }
  ];

  const excluded = [
    {
      name:'maRe maRe 防水バレエシューズ HP00601',
      reason:'一般レビューは長時間の楽さ・柔らかさを高く評価し有力。ただしSD007451を気に入っていた購入者から「型が違い、足幅が狭く痛い」という直接比較があるため、今回の7451からの改善候補としては主候補から外した。',
      url:'https://voi.0101.co.jp/voi/commentListGoods?gno=CD0137615701'
    },
    {
      name:'VIVAIA Tila エクストラワイド',
      reason:'前足部の余裕とかかとパッドは魅力。ただし7451では横幅不足が主課題ではないため、87mmの非常に広いつま先幅より、踵保持とサイズ指針が強化されたMargot 3.0を優先した。',
      url:'https://vivaia.jp/products/flats-tila-black'
    },
    {
      name:'VIVAIA Margot 2.0 Wide',
      reason:'最大5E級の広さは幅広足には有効だが、今回には内部容積が余りすぎる可能性がある。270°かかとパッドを備えるMargot 3.0を優先。',
      url:'https://vivaia.jp/products/flats-margot2wide-black'
    },
    {
      name:'AcureZ AO-10261',
      reason:'3E・踵パッド・甲を覆う構造は機能的に有力だが、見た目がローファー寄り。今回のパンプス／バレエ／フラット系という外観条件から主候補を外した。',
      url:'https://www.asics-trading.co.jp/shop/g/g0730008220/'
    },
    {
      name:'ASICS WALKING / PEDALA 1212A116-001',
      reason:'長時間歩行性能は非常に強いが、外観がウォーキングシューズ／スニーカー寄り。履き心地上限の参考にはなるものの、今回の仕事用フラット候補からは外した。',
      url:'https://walking.asics.com/items/1212A116-001'
    },
    {
      name:'Lady worker LO-17130',
      reason:'履き口・かかと周りを締めるラストは有力だが4E相当。横幅がすでに合う7451からは容積が増えすぎる懸念があり、同系統の3E LO-17100を優先。',
      url:'https://www.asics-trading.co.jp/shop/g/g1657008215/'
    },
    {
      name:'ALL DAY Walk 319',
      reason:'高反発クッションは魅力だが、公式購入者レビューに少し歩くとかかとが靴擦れした例がある。同ブランドでは踵ウレタン＋前滑り軽減を明示する301を優先。',
      url:'https://achilles-webshop.com/products/ald3190-b'
    },
    {
      name:'MOONSTAR SUGATA MS SGT608',
      reason:'3E・3cm・履き口パッド・ストラップで踵抜け対策は強い。ただし調節可能なストラップ付きで、今回の「履くたびに手間を増やしたくない」条件ではSGT606を優先。',
      url:'https://store.shopping.yahoo.co.jp/moonstar/48900816.html'
    },
    {
      name:'fitfit 撥水バイカラーパンプス2',
      reason:'3E・ストレッチ素材・安定設計で有力だったが、公称ヒール3.5cmのため「上限3cm程度」から外した。',
      url:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW09990/'
    },
    {
      name:'fitfit メッシュバレエスニーカーLITE',
      reason:'歩行性能は魅力だが、公称ヒール4.0cmのため候補外。',
      url:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW010915/'
    },
    {
      name:'MOONSTAR SUGATA MS SGT501',
      reason:'SUGATAの履き心地設計は魅力だが、5cmヒールのため今回の条件外。SUGATAは3cmのSGT606を採用。',
      url:'https://www.moonstar.co.jp/store/products/detail/48900816'
    }
  ];

  const baseline = products[0];
  const candidates = products.slice(1);

  function diffClass(diff){
    if(diff === '↑↑') return 'up2';
    if(diff === '↑') return 'up';
    if(diff === '↓') return 'down';
    return 'same';
  }

  function mediaMarkup(item){
    const first = item.images[0];
    return '<div class="product-media">' +
      '<button class="product-main-button" type="button" aria-label="画像を拡大表示">' +
      '<img class="product-main-image" src="' + first.sources[0] + '" alt="' + first.alt + '" referrerpolicy="no-referrer">' +
      '</button><div class="image-fallback">画像を表示できません。公式ページから確認してください。</div></div>' +
      '<div class="thumb-rail" aria-label="画像を切り替える"></div>';
  }

  function ratingMarkup(item){
    return '<div class="rating-block"><h4 class="rating-title">履き心地の推定評価 <span class="confidence">（10点満点）</span></h4>' +
      metrics.map(function(m){
        const key=m[0], label=m[1], score=item.ratings[key], diff=item.diffs[key];
        return '<div class="rating-row">' +
          '<span class="rating-name">' + label + '</span>' +
          '<span class="rating-score">' + score.toFixed(1) + '</span>' +
          '<span class="diff ' + diffClass(diff) + '">' + diff + '</span>' +
          '<div class="rating-bar"><div class="rating-fill" style="width:' + (score*10) + '%"></div></div>' +
        '</div>';
      }).join('') + '</div>';
  }

  function reviewsMarkup(item){
    if(!item.reviews || !item.reviews.length){
      return '<div class="review-section"><h4>日本語レビュー</h4><p class="no-review">今回の判断に使える具体的な日本語レビューを十分確認できず。公式仕様・構造を中心に評価。</p></div>';
    }
    return '<div class="review-section"><h4>参考になる日本語レビュー要旨</h4>' +
      item.reviews.map(function(r){
        return '<div class="review-card"><p>' + r.text + '</p><a href="' + r.url + '" target="_blank" rel="noopener noreferrer">' + r.source + ' ↗</a></div>';
      }).join('') + '</div>';
  }

  function cardMarkup(item, baselineMode){
    const specs = [
      'ヒール ' + item.heel,
      '幅 ' + item.width,
      item.weight !== '—' ? item.weight : null,
      item.sizes ? 'サイズ ' + item.sizes : null,
      item.toe
    ].filter(Boolean);
    return '<article class="product-card" data-id="' + item.id + '">' +
      mediaMarkup(item) +
      '<div class="product-body">' +
        '<div class="top-row"><span class="rank ' + (baselineMode?'baseline-rank':'') + '">' + (baselineMode?'基準':'候補 ' + item.rank) + '</span><span class="confidence">' + item.confidence + '</span></div>' +
        '<p class="product-kicker">' + item.brand + '</p>' +
        '<h3 class="product-title">' + item.title + '</h3>' +
        '<p class="product-code">' + item.code + '</p>' +
        '<div class="price-row"><span class="price">' + item.price + '</span><span class="status">' + item.status + '</span></div>' +
        '<div class="spec-chips">' + specs.map(function(s){return '<span class="spec-chip">' + s + '</span>';}).join('') + '</div>' +
        '<div class="fit-callout"><span class="fit-label">' + (baselineMode?'実使用メモ':'7451から見たポイント') + '</span><p>' + item.fit + '</p></div>' +
        ratingMarkup(item) +
        '<div class="notes-grid"><div class="note-box good"><strong>適合ポイント</strong><p>' + item.good + '</p></div><div class="note-box caution"><strong>要確認</strong><p>' + item.caution + '</p></div></div>' +
        reviewsMarkup(item) +
        '<div class="link-row"><a class="product-link" href="' + item.url + '" target="_blank" rel="noopener noreferrer">公式ページを見る</a>' +
        (item.reviewUrl && item.reviewUrl !== item.url ? '<a class="product-link secondary" href="' + item.reviewUrl + '" target="_blank" rel="noopener noreferrer">レビュー／参考情報を見る</a>' : '') +
        '</div>' +
      '</div></article>';
  }

  function setImageWithFallback(img, media, view){
    let index=0;
    function tryNext(){
      if(index >= view.sources.length){ media.classList.add('is-error'); return; }
      img.src=view.sources[index++];
      img.alt=view.alt;
    }
    img.onerror=tryNext;
    img.onload=function(){media.classList.remove('is-error');};
    tryNext();
  }

  function setupGalleries(root){
    root.querySelectorAll('.product-card').forEach(function(card){
      const item=products.find(function(x){return x.id===card.dataset.id;});
      if(!item) return;
      const main=card.querySelector('.product-main-image');
      const media=card.querySelector('.product-media');
      const rail=card.querySelector('.thumb-rail');
      rail.innerHTML='';
      item.images.forEach(function(view,index){
        const b=document.createElement('button');
        b.className='thumb'; b.type='button';
        b.setAttribute('aria-current',index===0?'true':'false');
        b.setAttribute('aria-label',view.label+'を表示');
        b.innerHTML='<img src="'+view.sources[0]+'" alt="" referrerpolicy="no-referrer" loading="lazy">';
        b.addEventListener('click',function(){
          setImageWithFallback(main,media,view);
          rail.querySelectorAll('.thumb').forEach(function(x){x.setAttribute('aria-current',x===b?'true':'false');});
        });
        rail.appendChild(b);
      });
      setImageWithFallback(main,media,item.images[0]);
      const mainButton=card.querySelector('.product-main-button');
      if(mainButton) mainButton.addEventListener('click',function(){openLightbox(main.src,main.alt);});
    });
  }

  function renderExcluded(){
    const el=document.getElementById('excludedList');
    el.innerHTML=excluded.map(function(x){
      return '<article class="excluded-card"><h3>'+x.name+'</h3><p>'+x.reason+'</p><a href="'+x.url+'" target="_blank" rel="noopener noreferrer">参考ページ ↗</a></article>';
    }).join('');
  }

  function renderComparison(){
    const header='<thead><tr><th>モデル</th><th>ヒール</th><th>幅</th>' +
      metrics.map(function(m){return '<th>'+m[1]+'</th>';}).join('') + '<th>7451比の要点</th></tr></thead>';
    const body='<tbody>' + products.map(function(item){
      return '<tr class="'+(item.baseline?'baseline-row':'')+'"><td>'+(item.baseline?'基準｜':'')+item.brand+' '+item.title+'</td><td>'+item.heel+'</td><td>'+item.width+'</td>' +
        metrics.map(function(m){return '<td>'+item.ratings[m[0]].toFixed(1)+'</td>';}).join('') + '<td>'+item.compare+'</td></tr>';
    }).join('') + '</tbody>';
    document.getElementById('comparisonTable').innerHTML='<table class="compare-table">'+header+body+'</table>';
  }

  function render(){
    document.getElementById('baselineCard').innerHTML=cardMarkup(baseline,true);
    document.getElementById('candidateList').innerHTML=candidates.map(function(x){return cardMarkup(x,false);}).join('');
    renderExcluded();
    renderComparison();
    setupGalleries(document);
  }

  const lightbox=document.getElementById('lightbox');
  const lightboxImage=document.getElementById('lightboxImage');
  let scale=1,x=0,y=0,startDistance=0,startScale=1,lastX=0,lastY=0;
  function applyTransform(){lightboxImage.style.transform='translate('+x+'px,'+y+'px) scale('+scale+')';}
  function openLightbox(src,alt){
    lightboxImage.src=src; lightboxImage.alt=alt||'';
    scale=1;x=0;y=0;applyTransform();
    lightbox.hidden=false;document.body.classList.add('lightbox-open');
  }
  function closeLightbox(){lightbox.hidden=true;document.body.classList.remove('lightbox-open');}
  const closeButton=document.querySelector('.lightbox-close');
  if(closeButton) closeButton.addEventListener('click',closeLightbox);
  if(lightbox) lightbox.addEventListener('click',function(e){if(e.target===lightbox||e.target.classList.contains('lightbox-stage')) closeLightbox();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lightbox.hidden) closeLightbox();});
  const stage=lightbox?lightbox.querySelector('.lightbox-stage'):null;
  if(stage){
    stage.addEventListener('touchstart',function(e){
      if(e.touches.length===2){
        const a=e.touches[0],b=e.touches[1];
        startDistance=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);startScale=scale;
      } else if(e.touches.length===1){lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;}
    },{passive:true});
    stage.addEventListener('touchmove',function(e){
      if(e.touches.length===2){
        const a=e.touches[0],b=e.touches[1];
        const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
        scale=Math.min(4,Math.max(1,startScale*d/startDistance));
        if(scale===1){x=0;y=0;} applyTransform();
      } else if(e.touches.length===1&&scale>1){
        const t=e.touches[0];x+=t.clientX-lastX;y+=t.clientY-lastY;lastX=t.clientX;lastY=t.clientY;applyTransform();
      }
    },{passive:true});
  }

  render();
})();